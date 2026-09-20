import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents the site being embedded in iframes on other origins (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stops browsers from MIME-sniffing away from the declared content-type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Keeps the full URL out of Referer headers when leaving to external sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restricts Permissions-Policy to only what the site actually uses
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Enables HSTS — tells browsers to only contact the site over HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
