import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy is set per-request in middleware.ts (needs a fresh
// nonce each time so Next's inline hydration scripts are allowed to run).
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  // HSTS must never be sent on the dev server: Chrome treats localhost as a trustworthy
  // origin and will honor it, permanently force-upgrading localhost:PORT to https (which
  // doesn't exist there) until the HSTS entry is cleared in chrome://net-internals/#hsts.
  ...(isDev ? [] : [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }]),
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
