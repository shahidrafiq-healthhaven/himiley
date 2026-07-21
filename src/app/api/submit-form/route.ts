import { NextResponse } from "next/server";
export const runtime = "nodejs";
import Joi from "joi";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // ponytail: in-memory per-instance limiter, same ceiling as the idempotency map below —
    // resets on redeploy and doesn't span multiple server instances. Upgrade to a shared
    // store (Redis/KV) if this ever runs behind more than one instance.
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const rateWindowMs = 60 * 1000;
    const rateLimit = 5;
    const rateMap: Map<string, number[]> =
      ((globalThis as unknown as { __submitFormRate?: Map<string, number[]> }).__submitFormRate ??=
        new Map<string, number[]>());
    const now0 = Date.now();
    const hits = (rateMap.get(ip) ?? []).filter((t) => now0 - t < rateWindowMs);
    if (hits.length >= rateLimit) {
      return NextResponse.json({ ok: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
    }
    hits.push(now0);
    rateMap.set(ip, hits);

    const idempotencyKey =
      req.headers.get("x-idempotency-key") ?? req.headers.get("X-Idempotency-Key") ?? undefined;
    if (idempotencyKey) {
      const now = Date.now();
      const windowMs = 2 * 60 * 1000;
      const recent: Map<string, number> =
        ((globalThis as unknown as { __submitFormRecent?: Map<string, number> }).__submitFormRecent ??=
          new Map<string, number>());

      for (const [k, ts] of recent) {
        if (now - ts > windowMs) recent.delete(k);
      }

      const seenAt = recent.get(idempotencyKey);
      if (seenAt && now - seenAt <= windowMs) {
        const duplicateResponse = NextResponse.json({ ok: true, duplicate: true });
        duplicateResponse.cookies.set("thank_you_access", "1", {
          httpOnly: true,
          sameSite: "lax",
          path: "/",
          maxAge: 15,
        });
        return duplicateResponse;
      }
      recent.set(idempotencyKey, now);
    }

    const raw = await req.json();
    const schema = Joi.object({
      firstName: Joi.string().trim().required(),
      lastName: Joi.string().trim().required(),
      dob: Joi.string().trim().required(),
      phone: Joi.string().trim().required(),
      email: Joi.string().email().required(),
      address: Joi.string().trim().required(),
      address2: Joi.string().allow("").optional(),
      city: Joi.string().trim().required(),
      state: Joi.string().trim().required(),
      zip: Joi.string().trim().required(),
      country: Joi.string().trim().required(),
      sex: Joi.string().trim().required(),
      uti: Joi.string().trim().allow("").optional(),
      proceedRisk: Joi.string().trim().allow("").optional(),
      lastPeriodDate: Joi.string().trim().required(),
      utiHistory: Joi.string().trim().allow("").optional(),
      monthlyIntercourse: Joi.string().trim().required(),
      adverseReaction: Joi.string().trim().allow("").optional(),
      healthNotes: Joi.string().trim().allow("").optional(),
      drugAllergies: Joi.string().trim().allow("").optional(),
      medications: Joi.string().trim().allow("").optional(),
      hasInsurance: Joi.string().trim().allow("").optional(),
      proceedInsurance: Joi.string().trim().allow("").optional(),
    });
    const { value, error } = schema.validate(raw, { abortEarly: false });
    if (error) {
      return NextResponse.json(
        {
          ok: false,
          errors: error.details.map((d) => ({
            field: d.path.join("."),
            message: d.message,
          })),
        },
        { status: 422 }
      );
    }
    const subject = process.env.MAIL_SUBJECT ?? "Medical Information Submission | Miley";
    const to = process.env.MAIL_TO ?? "atta@healthhavenrx.com";
    const esc = (v: unknown) =>
      String(v ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    const labels: Record<string, string> = {
      firstName: "First Name",
      lastName: "Last Name",
      dob: "What’s Your Date of Birth?",
      phone: "Please provide a cell phone number for prescription confirmation.",
      email: "Please provide an e-mail for prescription information.",
      address: "Address",
      address2: "Address line 2",
      city: "City/Town",
      state: "State/Region/Province",
      zip: "Zip/Postal code",
      country: "Country",
    };
    const questions: Record<string, string> = {
      sex: "What is your sex?",
      uti: "Do you have frequent UTIs? (3 or more per year)*",
      proceedRisk:
        "According to the safety profile, Phexxi should be avoided in women with a history of recurrent urinary tract infections or with urinary tract abnormalities (increasing the risk of ascending infections). Would you like to proceed despite these risks?",
      lastPeriodDate: "What was the first day of your last period?*",
      utiHistory: "Do you have a history of urinary tract abnormalities?",
      monthlyIntercourse: "Approximately how many times do you have intercourse monthly?*",
      adverseReaction:
        "Have you had an adverse reaction to any form of birth control (e.g. irregular cycles/period, moodiness, breast tenderness, weight gain, acne, etc)?",
      healthNotes:
        "Do you have any questions or is there anything else we should know about your health?",
      drugAllergies: "Do you have any drug allergies? List below or type none.",
      medications:
        "Please list any current medications you're taking for the Pharmacist.",
      hasInsurance: "Do you have prescription insurance?",
      proceedInsurance:
        "Most insurance covers Phexxi. However, there is a chance your insurance may not cover Phexxi. We will notify you. Would you like to proceed?",
    };
    const formatDob = (v: unknown) => {
      const s = String(v ?? "");
      const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
      if (m) return `${m[2]}/${m[3]}/${m[1]}`;
      try {
        const d = new Date(s);
        if (!isNaN(d.getTime())) {
          const mm = String(d.getMonth() + 1).padStart(2, "0");
          const dd = String(d.getDate()).padStart(2, "0");
          const yyyy = d.getFullYear();
          return `${mm}/${dd}/${yyyy}`;
        }
      } catch {}
      return s;
    };
    const row = (k: string, v: unknown) =>
      `<tr><td style="padding:8px 12px;border:1px solid #eee;background:#fafafa;font-weight:600">${k}</td><td style="padding:8px 12px;border:1px solid #eee">${esc(v)}</td></tr>`;
    const html = `<!doctype html><html><body style="margin:0;padding:0;background:#f7f7f7">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f7f7f7">
        <tr><td>
          <div style="max-width:720px;margin:24px auto;background:#ffffff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden">
            <div style="padding:18px 22px;background:#FF2F92;color:#fff;font-size:16px;font-weight:700">Miley |  Medical Information</div>
            <div style="padding:18px 22px;color:#111">
              <p style="margin:0 0 10px 0;font-size:14px">A new submission was received.</p>
              <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:13px">
                ${row(labels.firstName, value.firstName)}
                ${row(labels.lastName, value.lastName)}
                ${row(labels.dob, formatDob(value.dob))}
                ${row(labels.phone, value.phone)}
                ${row(labels.email, value.email)}
                ${row(labels.address, value.address)}
                ${row(labels.address2, value.address2)}
                ${row(labels.city, value.city)}
                ${row(labels.state, value.state)}
                ${row(labels.zip, value.zip)}
                ${row(labels.country, value.country)}
                ${row(questions.sex, value.sex)}
                ${row(questions.uti, value.uti)}
                ${row(questions.proceedRisk, value.proceedRisk)}
                ${row(questions.lastPeriodDate, formatDob(value.lastPeriodDate))}
                ${row(questions.utiHistory, value.utiHistory)}
                ${row(questions.monthlyIntercourse, value.monthlyIntercourse)}
                ${row(questions.adverseReaction, value.adverseReaction)}
                ${row(questions.healthNotes, value.healthNotes)}
                ${row(questions.drugAllergies, value.drugAllergies)}
                ${row(questions.medications, value.medications)}
                ${row(questions.hasInsurance, value.hasInsurance)}
                ${row(questions.proceedInsurance, value.proceedInsurance)}
              </table>
            </div>
          </div>
        </td></tr>
      </table>
    </body></html>`;

    let emailSent = false;
    try {
      const user = process.env.SMTP_USER?.trim();
      const pass = process.env.SMTP_PASS?.trim();
      const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT.trim()) : 587;
      if (!user || !pass) {
        return NextResponse.json({ ok: false, error: "SMTP credentials missing" }, { status: 500 });
      }
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `Hi Miley <${user}>`,
        to,
        subject,
        html,
      });
      emailSent = true;
    } catch (e) {
      emailSent = false;
      const msg = e instanceof Error ? e.message : String(e);
      console.error("SMTP send error:", msg);
    }

    const response = NextResponse.json({
      ok: true,
      emailSent,
      ...(emailSent ? {} : { error: "We couldn't send your submission right now. Please try again." }),
    });
    if (emailSent) {
      response.cookies.set("thank_you_access", "1", {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 15,
      });
    }
    return response;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
