# Release prerequisites and analytics decision

Status: draft for morning owner review. Not publication approval.

## Analytics

- **Decision: disabled.** No `@vercel/analytics` or other analytics package is installed.
- Overnight contract: keep analytics disabled for the local draft.
- Privacy: contact messages must never be captured by analytics or a backend.
- Vercel Analytics was not evaluated for a free-plan install because there is no production URL and the owner has not approved an analytics plan. Revisit only after domain + privacy review.

## Production URL (owner required before release)

Until the owner supplies a verified origin:

| Output | Current state | Required action |
|---|---|---|
| `metadataBase` / absolute canonical | Omitted | Set once origin is known |
| Open Graph / Twitter absolute URLs + og:image | Omitted (would need absolute asset URLs) | Add with verified origin + approved image |
| `sitemap.xml` | Not generated | Add `src/app/sitemap.ts` with home + `/work/soil-scan` + `/work/baguioreadygis` |
| `robots.txt` Sitemap line | Omitted (rules only) | Point to absolute sitemap URL |
| Vercel deployment / env | Not configured in this batch | Owner deploys separately; no push in overnight batch |

Never substitute a guessed domain.

## Implemented routes (for future sitemap)

- `/`
- `/work/soil-scan`
- `/work/baguioreadygis`

## Contact

- Client-side mailto only; no storage/send backend.
- Fallbacks: copy message, copy email, LinkedIn, GitHub.
- Facebook omitted until verified owner link.

## Privacy checklist (pre-release)

- [ ] No phone, address, raw resume, secrets in tracked files
- [ ] Redacted resume download only if separately approved
- [ ] Analytics decision reconfirmed with owner
- [ ] Absolute metadata filled only with verified origin
