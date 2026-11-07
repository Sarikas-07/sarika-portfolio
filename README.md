# Sarika Ghorpade — Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide icons.
No database, no paid API, no backend. All your content lives in `src/data/`.

---

## 1. Software you need
- **Node.js 20 or newer (LTS)** — https://nodejs.org  (check with `node -v`)
- **VS Code** — https://code.visualstudio.com
- **Git** — https://git-scm.com
- A free **GitHub** account and a free **Vercel** account (sign in to Vercel with GitHub)

## 2. Open in VS Code
1. Unzip the project folder somewhere simple (e.g. `Documents/portfolio`).
2. VS Code → **File → Open Folder…** → choose the `portfolio` folder.
3. Open the built-in terminal: **Terminal → New Terminal**.

## 3. Install and run
```bash
npm install        # once, needs internet (about a minute)
npm run dev        # starts the site
```
Open http://localhost:3000. Edits to files appear instantly. Stop with `Ctrl + C`.

## 4. Check and build the production version
```bash
npm run lint        # code-style problems
npm run typecheck   # TypeScript errors (run after `npm run dev` or `build` once)
npm run build       # production build, same as Vercel runs
npm run start       # serve that build at http://localhost:3000
```
If `npm run build` passes, Vercel will almost certainly pass too.

---

## 5. What you will edit

| I want to change… | Edit this file |
|---|---|
| Name, intro, email, GitHub, LinkedIn, status pill, photo/resume path | `src/data/profile.ts` |
| About text, interests, goals | `src/data/about.ts` |
| Skills | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Internships / jobs | `src/data/experience.ts` |
| Certificates | `src/data/certifications.ts` |
| Awards, papers, copyright | `src/data/achievements.ts` |
| Degrees | `src/data/education.ts` |
| Colours, fonts | `tailwind.config.ts`, `app/layout.tsx` |

You never need to touch `src/components/` to change content.
**Optional fields can simply be deleted or commented out** — buttons for them disappear, nothing breaks.
Lines starting with `//` are comments; remove the `//` to switch a line on.

### Replace the profile photo
Overwrite `public/images/profile.jpg` with your new photo (same file name, portrait orientation, ideally under 500 KB). If you use another name or `.png`, update `photo` in `profile.ts`.

### Update the resume
Overwrite `public/resume/Sarika_Ghorpade_Resume_final.pdf` (keep the name). The "Download Resume" button hides itself if the file is missing.

### Add a project
1. (Optional) Put a screenshot in `public/images/projects/`, e.g. `my-app.png`.
2. Add an object to the array in `src/data/projects.ts`:
```ts
{
  slug: "my-new-project",               // unique, lowercase, hyphens — becomes /projects/my-new-project
  title: "My New Project",
  summary: "One or two sentences on what it does.",
  problem: "What problem it solves.",                       // optional
  features: ["Feature one", "Feature two"],                  // optional
  contribution: "What I personally built.",                  // optional
  stack: ["Python", "Streamlit"],
  github: "https://github.com/Sarikas-07/my-new-project",    // optional
  demo: "https://my-new-project.streamlit.app",              // optional
  thumbnail: "/images/projects/my-app.png",                  // optional
  featured: false,                                           // true = large card at the top
  details: [{ title: "Technical notes", points: ["Detail one", "Detail two"] }], // optional
},
```
To update a link or screenshot, edit that one field. Only write facts you can defend in an interview.

### Add a certificate
1. Put the PDF or image in `public/certificates/` (e.g. `python-course.pdf`). Use simple names: no spaces.
2. Add to `src/data/certifications.ts`:
```ts
{
  id: "python-course",
  name: "Python for Data Science",
  issuer: "Example Academy",
  issueDate: "Mar 2026",
  credentialId: "ABC-12345",                  // optional
  file: "/certificates/python-course.pdf",    // makes "View Certificate" appear
  previewImage: "/certificates/python-course.png", // optional thumbnail when file is a PDF
  verifyUrl: "https://example.com/verify/ABC-12345", // optional
  skills: ["Python", "Pandas"],               // optional
},
```
For your existing five entries, just drop each file in the folder and uncomment its `file:` line.

### Add an achievement or a publication
In `src/data/achievements.ts`:
```ts
{
  id: "hackathon-2026",
  type: "competition",          // publication | copyright | award | competition | research | other
  title: "Finalist, Example Hackathon",
  date: "Feb 2026",
  organization: "Example College",
  description: "Built a … in 24 hours.",
  file: "/certificates/hackathon.pdf",      // optional proof
  link: "https://example.com/results",      // optional
},
{
  id: "my-second-paper",
  type: "publication",
  title: "Exact title of the paper",
  date: "2027",
  organization: "Journal or conference name",
  details: [
    { label: "Authors", value: "A. Author, S. D. Ghorpade" },
    { label: "DOI", value: "10.xxxx/xxxxx" },
  ],
  link: "https://doi.org/10.xxxx/xxxxx",
},
```

### Add experience / education
Copy the existing object in `experience.ts` or `education.ts`, edit it, put the newest first.

---

## 6. Things still to fill or confirm (nothing is shown as fake)
- GitHub repo link for the Legal Intelligence project (commented `github:` line in `projects.ts`).
- Which parts of Construction Site Management System and BillSnap **you** built (`contribution`).
- Certificate / proof files: FDP, the journal paper, the copyright certificate and supporting document, and the AMIEE membership (held back: it shows a college roll number).
- Verify the journal paper's details (ISSN, publisher) and keep proof; verify or remove the BillSnap "Top Performer" line.
- Real project screenshots (the current images are illustrations).
- `siteUrl` in `profile.ts` after the first deploy (improves link previews).
- Your phone number is **not** shown on the site. It is inside the downloadable resume PDF.
- Re-check the PeopleBook and BillSnap demo links; they may be temporary Vercel preview URLs.

## 7. Push to GitHub
First time:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Sarikas-07/portfolio.git   # create an empty repo with this name on github.com first
git push -u origin main
```
Every later update:
```bash
git add .
git commit -m "Add new certificate"
git push
```

## 8. Deploy on Vercel
1. Go to https://vercel.com → **Add New… → Project**.
2. **Import** your `portfolio` GitHub repository (allow Vercel access if asked).
3. Leave every setting as detected (Framework: Next.js). No environment variables are needed.
4. Click **Deploy**. In about a minute you get a `…vercel.app` URL.
5. Paste that URL into `siteUrl` in `profile.ts`, commit and push.

**Redeploy:** every `git push` to `main` redeploys automatically.

## 9. Troubleshooting
| Problem | Fix |
|---|---|
| `npm: command not found` | Install Node.js, then reopen VS Code. |
| Port 3000 busy | `npm run dev -- -p 3001` |
| Red error about a data file | The message names the wrong field; compare with the examples above. Missing comma or quote is the usual cause. |
| Vercel build fails but local works | Run `npm run build` locally and read the first error. Check file-name case: `Profile.jpg` ≠ `profile.jpg` on Vercel. |
| Button/link missing | The file path is wrong or the file isn't in `public/`. Paths start with `/` and leave out `public`. |
| Photo not showing | Check `public/images/profile.jpg` exists and `photo` in `profile.ts` matches. |
| Changes not visible after push | Wait for the Vercel deployment to finish; hard-refresh (`Ctrl+Shift+R`). |

---

## 10. Technical decisions (for interviews)
- **App Router + static generation:** every page, including `/projects/[slug]`, is pre-rendered at build time via `generateStaticParams`, so the site is fast and needs no server.
- **Content separated from presentation:** typed objects in `src/data/` (types in `src/lib/types.ts`) mean the compiler catches content mistakes and components never change when content does.
- **No broken links:** `publicFileExists()` (server-side, `src/lib/assets.ts`) checks that referenced files exist at build time and hides buttons otherwise.
- **Design tokens:** colours, fonts and animations are defined once in `tailwind.config.ts` and `globals.css`.
- **Motion with restraint:** one orchestrated hero entrance, small one-time scroll reveals, optional cursor glow and magnetic buttons on fine-pointer devices only. All motion is switched off for `prefers-reduced-motion`; scrolling is never hijacked.
- **Accessibility:** skip link, semantic landmarks, labelled icon buttons, visible focus rings, `aria-current` in the nav, keyboard-closable mobile menu.
- **Contact:** a real `mailto:` link rather than a form, because there is no backend and a fake "sent" message would be dishonest.
- **Performance:** `next/image` with `priority` for the hero photo, `next/font` self-hosting, decorative background in pure CSS/SVG, no Three.js (it would not improve this design).
