const fs = require("fs");
const path = process.argv[2];
let html = fs.readFileSync(path, "utf8");

html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
html = html.replace(/<style[\s\S]*?<\/style>/gi, "");
html = html.replace(/<!--[\s\S]*?-->/g, "");

// Extract main content region if possible
const bodyMatch = html.match(/<body[\s\S]*<\/body>/i);
if (bodyMatch) html = bodyMatch[0];

// Turn block-level tags into newlines before stripping
html = html.replace(/<\/(p|div|section|h1|h2|h3|h4|h5|h6|li|tr|br|header|footer|label|button)>/gi, "\n");
html = html.replace(/<(br|hr)\s*\/?>/gi, "\n");

// Keep track of headings/labels with markers
html = html.replace(/<h1[^>]*>/gi, "\n### H1: ");
html = html.replace(/<h2[^>]*>/gi, "\n## H2: ");
html = html.replace(/<h3[^>]*>/gi, "\n# H3: ");

// strip remaining tags
html = html.replace(/<[^>]+>/g, "");

// decode entities
const entities = { "&amp;": "&", "&nbsp;": " ", "&#39;": "'", "&quot;": '"', "&lt;": "<", "&gt;": ">", "&rsquo;": "’", "&ndash;": "–", "&mdash;": "—" };
html = html.replace(/&#39;|&amp;|&nbsp;|&quot;|&lt;|&gt;|&rsquo;|&ndash;|&mdash;/g, (m) => entities[m] || m);
html = html.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)));

const lines = html.split("\n").map((l) => l.trim()).filter(Boolean);
console.log(lines.join("\n"));
