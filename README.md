# Talentbegleitung — Marie-Louise Schäfer

Bilingual (DE/EN) one-page website with separate Impressum and Datenschutz pages.
Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules · no runtime dependencies beyond React.

Intended production domain: **www.talentbegleitung.com**

---

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (this is what Vercel runs) |
| `npm start` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run build:pages` | Static export into `./out` for GitHub Pages |
| `npm run preview:pages` | Build the static export and serve it locally |

---

## Deploying

The site is fully static — no database, no server code, no API routes — so both
targets below work without changes.

### Vercel (recommended)

1. Push this repository to GitHub.
2. <https://vercel.com/new> → **Import** the repository.
3. Accept every default (Vercel detects Next.js: build `npm run build`, output `.next`).
4. Deploy.

To use the real domain: Vercel project → **Settings → Domains** → add
`talentbegleitung.com` and `www.talentbegleitung.com`, then point the DNS records
Vercel shows you at your registrar.

### GitHub Pages (fallback)

Vercel is the primary target. `.github/workflows/deploy-pages.yml` is kept as a
backup and runs **only when started by hand** — it has no `push` trigger.

1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Actions** tab → *Deploy to GitHub Pages* → **Run workflow**.

> A Pages site is publicly reachable even when the repository is private
> (private Pages needs GitHub Enterprise), so only turn this on when the site
> is ready to be seen.

The workflow figures out the base path on its own:

| Repository | Site URL | Base path |
| --- | --- | --- |
| `website_malou` | `https://<user>.github.io/website_malou/` | `/website_malou` |
| `<user>.github.io` | `https://<user>.github.io/` | none |
| any, with `public/CNAME` | your custom domain | none |

**Custom domain on Pages:** create `public/CNAME` containing a single line
(`www.talentbegleitung.com`), commit it, and set the same domain under
Settings → Pages. The workflow then builds without a base path automatically.

> Vercel and GitHub Pages can both be live at once — they build from the same
> commit and produce the same site.

---

## Layout of the code

```
src/
  app/
    layout.tsx            Root layout: Inter font, metadata, providers, cookie banner
    page.tsx              The one-page site (all five sections)
    page.module.css       Section styles
    globals.css           Design tokens — brand colour, type scale, spacing
    icon.svg              Browser tab icon (white mark on brand blue-grey)
    legal.module.css      Shared styles for the two legal pages
    impressum/            Imprint  (page.tsx = metadata, content.tsx = markup)
    datenschutz/          Privacy  (same split)
  components/
    Navigation.tsx        Fixed header, five tabs, DE/EN toggle, mobile drawer
    Footer.tsx            Navigation / contact / legal columns
    ContactForm.tsx       Name · Email · Telefonnummer · Nachricht
    CookieBanner.tsx      Consent banner + preferences dialog
    Logo.tsx              The three-chevron mark (inherits currentColor)
  lib/
    i18n/translations.ts  ← ALL WEBSITE TEXT LIVES HERE (German + English)
    i18n/LanguageContext  Language state, persisted in localStorage
    cookies.ts            Consent storage
    useReveal.ts          Fade-in-on-scroll
public/
  logo.svg                Standalone white logo file
  .nojekyll               Stops GitHub Pages from hiding the /_next folder
```

### Editing the text

Everything visible on the site is in **`src/lib/i18n/translations.ts`** —
German in the `de` object, English in `en`. The two are type-checked against
each other, so a missing English key fails the build rather than shipping empty.

### Editing the colours

All in the `:root` block of **`src/app/globals.css`**:

```css
--brand: #89a3b0;   /* RGB 137/163/176 — the specified blue-grey */
--ink:   #ffffff;   /* all type is white */
--leading-body: 1.15;
```

---

## The contact form

Submissions go through [Web3Forms](https://web3forms.com) — a plain browser
`POST`, so it works on Vercel and on the GitHub Pages fallback alike.

1. Go to <https://web3forms.com> and enter the destination address
   (`schaefer@talentbegleiter.de`). The access key arrives by email.
2. **Vercel** → Settings → Environment Variables → add
   `NEXT_PUBLIC_WEB3FORMS_KEY`, then redeploy.
3. **Locally** → `cp .env.example .env.local` and paste the key in.
4. *(Optional)* **GitHub** → Settings → Secrets → Actions → add the same name,
   so the Pages fallback has a working form too.

The key is public by design: it identifies the inbox, it does not authorise
anything. **With no key set the form still works** — it falls back to opening
the visitor's mail client with the message pre-filled, so nothing breaks while
you wait for the key.

Spam protection: Web3Forms' own filtering plus an off-screen honeypot field.

> ⚠️ The form and the Impressum point at **different domains**.
> Enquiries go to `schaefer@talentbegleiter.de` (confirmed as the live inbox,
> and the address to register with Web3Forms), while the Impressum, the footer
> and the contact block display `schaefer@talentbegleitung.de`, reproduced
> verbatim from the client's document. Worth consolidating — either set up
> forwarding from the old domain, or update the displayed address.

## Known gaps

- **Datenschutz** contains a clearly marked placeholder — the brief supplied only
  the heading. Real legal text is needed before going live.
- **Profil** shows only the "Expertise & Zertifikate" list; the brief said
  *"Hier bitte Profil reinsetzen (habe ich Email angehängt)"* and that attachment
  was not part of the document.
- **The contact form** has no backend. It composes the message and opens the
  visitor's mail client. Swap `handleSubmit` in `ContactForm.tsx` for a POST to a
  form service or server action once an endpoint exists.
