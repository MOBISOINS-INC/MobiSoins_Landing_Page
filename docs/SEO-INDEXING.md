# Getting www.mobisoins.com indexed and visible — owner checklist

The site already ships robots.txt, sitemap.xml (80 FR/EN URLs), canonical + hreflang tags
and Organization/MedicalBusiness JSON-LD. What is missing is **proof of ownership** to the
search engines and **off-site signals**. Work through this list top to bottom.

The code reads two environment variables (see `client/src/lib/seo.ts` → `verificationMetadata`,
wired in `client/src/app/RootDocument.tsx`). When they are empty, **no meta tag is rendered**.

| Env var | Renders |
|---|---|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `<meta name="google-site-verification" content="…">` |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | `<meta name="msvalidate.01" content="…">` |

Set them in **Netlify → Site configuration → Environment variables** (scope: Production at least),
then **trigger a new deploy** — `NEXT_PUBLIC_*` values are baked in at build time.

---

## A. Google Search Console (GSC) — do this first

1. Go to https://search.google.com/search-console and add **two** properties:
   - **Domain** property: `mobisoins.com` (covers http/https, www/apex). Verification is a DNS TXT
     record — add it at your DNS host (Netlify DNS or the registrar). This is the one to keep long term.
   - **URL-prefix** property: `https://www.mobisoins.com/` — lets you use the HTML-tag method today.
2. For the URL-prefix property choose **HTML tag**. Copy only the value inside `content="…"`.
3. Netlify → env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<that value>` → redeploy.
4. Confirm: `curl -s https://www.mobisoins.com/ | grep google-site-verification` prints the tag.
   Click **Verify** in GSC.
5. GSC → **Sitemaps** → submit `https://www.mobisoins.com/sitemap.xml`.
6. GSC → **URL Inspection** → paste each URL → **Request indexing** for:
   `/`, `/en`, `/services`, `/contact` (and `/en/services`, `/en/contact` if quota allows — ~10/day).
7. Do not remove the env var later: Google re-checks the tag periodically.

## B. Bing Webmaster Tools

1. https://www.bing.com/webmasters → **Import from Google Search Console** (fastest; also imports the sitemap).
2. If import is not possible: Add site → **HTML Meta Tag** → copy the `msvalidate.01` content value →
   Netlify env var `NEXT_PUBLIC_BING_SITE_VERIFICATION=<value>` → redeploy → Verify.
3. Submit the sitemap and use **URL Submission** for `/`, `/en`, `/services`, `/contact`.
   (Bing also feeds DuckDuckGo, Yahoo and Copilot.)

## C. Google Business Profile (GBP) — the local "map pack"

Create/claim at https://business.google.com using **exactly** the NAP already in the site's JSON-LD
(`client/src/lib/organizationLd.ts`). Keep it byte-for-byte identical everywhere (site, GBP, directories):

- Name: **MobiSoins Inc.** (display name on the site: MobiSoins)
- Address: **8457 Boulevard Newman, Bureau 118, LaSalle QC H8N 0A2**
- Phone: **+1 263-588-6196**
- Email: **info@mobisoins.com**
- Website: **https://www.mobisoins.com** (FR); add `https://www.mobisoins.com/en` as a secondary link if offered
- Primary category: **Home health care service**; secondary: Nursing agency / Nurse practitioner (if available)
- Business type: service-area business; service areas **Montréal, Laval, Longueuil**
- Primary language: **French**; add an English description too
- Add logo, 3–5 photos, opening hours, and a short FR description matching the home-page wording

Verification is usually by postcard or video — start it now; it can take 1–2 weeks.

## D. Netlify domain sanity

1. Netlify → Domain management: **primary domain = `www.mobisoins.com`**, `mobisoins.com` set to redirect.
2. Check the apex redirect is a single hop:
   `curl -I https://mobisoins.com/` → expect `HTTP/2 301` with `location: https://www.mobisoins.com/`.
   Also `curl -I http://mobisoins.com/` and `curl -I http://www.mobisoins.com/` → each a 301 to https://www.
3. `curl -s https://www.mobisoins.com/robots.txt` must list `Sitemap: https://www.mobisoins.com/sitemap.xml`.
4. Make sure no deploy-preview / branch URL gets indexed (Netlify adds `X-Robots-Tag: noindex` to previews by default; keep it that way).

## E. After each deploy — validate

1. **Rich Results Test** (https://search.google.com/test/rich-results) on `/`, `/contact` and one service page
   (e.g. `/services/pansements` — any slug from the sitemap). Expect Organization /
   MedicalBusiness detected with no errors.
2. **Schema validator** (https://validator.schema.org) for the same pages if Rich Results shows nothing.
3. **PageSpeed Insights** (https://pagespeed.web.dev) → Mobile → note **LCP** (target < 2.5 s) and CLS (< 0.1).
   The hero video is the usual LCP suspect; write the measured LCP in the deploy notes.
4. GSC → URL Inspection → "View crawled page" to confirm Google sees the FR content and the hreflang tags.

## F. 30-day follow-up

- [ ] GSC → **Pages (Indexing)** report: all 80 sitemap URLs should trend to "Indexed".
      For "Discovered – currently not indexed" / "Crawled – currently not indexed": request indexing again,
      add internal links to those pages from the home page or articles, and make sure their content is unique.
- [ ] GSC → **Performance**: brand queries ("mobisoins", "mobi soins") should show impressions; if the site
      ranks below the unrelated French "Mobisoins" software, the GBP listing + disambiguating JSON-LD do the heavy lifting.
- [ ] First **backlinks / citations** (same NAP everywhere): Pages Jaunes / YellowPages.ca, 411.ca, Yelp CA,
      Indice santé / Québec health & home-care directories, OIIQ-adjacent nurse-agency listings, the LaSalle /
      Montréal-area chamber of commerce, partner clinics, pharmacies and CLSC community pages, LinkedIn company page.
- [ ] Publish **FR articles** on the target queries ("infirmière à domicile Montréal", "prise de sang à domicile",
      "soins à domicile Laval/Longueuil", "soins de plaies à domicile") — one per week, each linking to the
      matching service page; add the EN version under `/en`.
- [ ] Ask early customers for **Google reviews** on the GBP listing (reply to each in French).
- [ ] Re-run PageSpeed Insights mobile and compare LCP against the baseline noted in step E.
