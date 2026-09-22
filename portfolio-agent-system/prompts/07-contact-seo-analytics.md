# Prompt 07 — Contact, SEO, and Analytics Decision

Implement the client-side general-message composer with name, email, and message. Validate locally, create a safely encoded subject/body, and open the visitor's email client only after explicit action. Add copy-message, copy-email, LinkedIn, and owner-approved Facebook links. Explain the behavior and provide accessible success/error feedback. No backend, persistence, or analytics event may capture message content.

Add verified site/route metadata, canonical URL configuration, Open Graph assets, sitemap, robots, icons, and Person structured data only for verified facts.

If the production URL is unknown, omit URL-dependent output and document the owner configuration and verification required before release. Never substitute a guessed domain. Include only approved, implemented case-study routes.

Consult current official Vercel documentation. Add Vercel Analytics only if free-plan availability and privacy behavior meet the specification. Otherwise leave it disabled and document why.

Run security/privacy review, URL-encoding tests, keyboard/accessibility checks, metadata checks, and build.

## Approval gate 7

Report contact behavior, fallbacks, analytics decision, metadata status, privacy findings, and checks. Stop.
