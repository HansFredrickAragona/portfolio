# Prompt 09 — Private Release Preparation

Prepare, but never perform, production deployment.

Before any push or PR creation, verify that it cannot trigger preview or production deployment. If unverified or connected to automatic deployment, keep the release work local and record the owner action needed. Do not connect hosting, change deployment settings, initialize Git, or configure remotes without authorization.

Confirm all approval gates, checks, public content, and redacted resume. Update `docs/RELEASE_CHECKLIST.md`, `docs/MANUAL_DEPLOYMENT.md`, `memory/CURRENT_STATE.md`, and `memory/HANDOFF.md`. Create a clean release branch and PR if repository access is configured. Do not merge it.

Manual instructions must cover connecting the private GitHub repository to Vercel, selecting the correct branch, build settings, any verified environment values, free `vercel.app` domain, post-deploy smoke tests, rollback, and the owner's later choice to make the repository public. Never change visibility.

Include the owner's configuration of the verified production URL and verification of canonical, sitemap, and absolute metadata values before public release. Explain that hosting connection can enable automatic branch/PR deployments and that future agent pushes remain prohibited when they would trigger deployment.

Final report must include branch, commit, PR if created, checks, remaining manual actions, and exact owner deployment sequence. Stop.
