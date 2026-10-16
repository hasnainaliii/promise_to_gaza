import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// No nonces: they would force every page to render dynamically. Next's inline
// bootstrap scripts and React style attributes need 'unsafe-inline'.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  // Cloudinary hosts the relief-drive videos and their poster frames.
  "img-src 'self' data: blob: https://res.cloudinary.com",
  "media-src 'self' https://res.cloudinary.com",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // Prevents the site being embedded in iframes (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Stops browsers from MIME-sniffing away from the declared content-type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Keeps the full URL out of Referer headers when leaving to external sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restricts Permissions-Policy to only what the site actually uses
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Isolates the browsing context from cross-origin popups (e.g. wa.me tabs)
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Enables HSTS — tells browsers to only contact the site over HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
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
