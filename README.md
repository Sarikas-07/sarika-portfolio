 # Sarika Ghorpade — Portfolio

**Live Portfolio:** https://sarika-portfolio-iota.vercel.app

**GitHub Repository:** https://github.com/Sarikas-07/portfolio

A personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

No database, paid API, or application backend is required. Portfolio content is maintained in `src/data/`.

---

## 1. Features

- Responsive personal portfolio website
- Profile, introduction, skills, and education
- Projects with GitHub repositories and live demos
- Internship and experience details
- Certifications, achievements, and publications
- Downloadable resume and supporting documents
- Accessibility-focused navigation and reduced-motion support
- Security response headers configured in Next.js
- Automated production deployments through Vercel

## 2. Software Requirements

- **Node.js 20 or newer (LTS):** https://nodejs.org
- **Visual Studio Code:** https://code.visualstudio.com
- **Git:** https://git-scm.com
- GitHub account: https://github.com
- Vercel account: https://vercel.com

Check your Node.js installation:

```bash
node -v
npm -v
git --version
```

## 3. Run Locally

Clone the repository:

```bash
git clone https://github.com/Sarikas-07/portfolio.git
cd portfolio
```

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Changes to source files appear automatically during development. Stop the server with `Ctrl + C`.

## 4. Lint, Typecheck, and Production Build

Run these commands before deploying:

```bash
npm run lint
npm run typecheck
npm run build
```

To run the production build locally:

```bash
npm run start
```

Open http://localhost:3000.

If a command fails, inspect the first relevant error and fix it before deployment.

## 5. Project Structure

```text
portfolio/
├── app/                  # Next.js routes and layouts
├── public/
│   ├── certificates/     # Public certificate files
│   ├── documents/        # Public supporting documents
│   ├── images/           # Profile and project images
│   ├── publications/     # Public publication documents
│   └── resume/            # Downloadable resume
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/             # Portfolio content
│   └── lib/              # Types and utility functions
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

## 6. Update Portfolio Content

| Content | File |
|---|---|
| Name, introduction, contact links, photo, resume, site URL | `src/data/profile.ts` |
| About section | `src/data/about.ts` |
| Skills | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Internships and work experience | `src/data/experience.ts` |
| Certifications | `src/data/certifications.ts` |
| Achievements and publications | `src/data/achievements.ts` |
| Education | `src/data/education.ts` |
| Colours and typography | `tailwind.config.ts`, `app/layout.tsx` |

Content changes generally do not require editing components.

### Update the Profile

Edit `src/data/profile.ts` to update your personal information, professional links, photo, and resume path.

The deployed website URL is:

```ts
siteUrl: "https://sarika-portfolio-iota.vercel.app",
```

Keep your existing `profile` object and change only the relevant field.

### Replace the Profile Photo

Replace:

`public/images/profile.jpg`

Keep the same filename or update the `photo` field in `src/data/profile.ts` if the filename changes.

### Update the Resume

Replace the existing file:

`public/resume/Sarika_Ghorpade_Resume_final.pdf`

Keep the same filename to avoid changing the existing resume path.

The resume URL is:

https://sarika-portfolio-iota.vercel.app/resume/Sarika_Ghorpade_Resume_final.pdf

Only place documents in `public/` that you are comfortable making publicly accessible.

## 7. Add a Project

Add an object to the array in `src/data/projects.ts`.

```ts
{
  slug: "my-new-project",
  title: "My New Project",
  summary: "A concise description of the application.",
  problem: "The problem it solves.",
  features: ["Feature one", "Feature two"],
  contribution: "What I personally implemented.",
  stack: ["Python", "Streamlit"],
  github: "https://github.com/username/my-new-project",
  demo: "https://example.streamlit.app",
  thumbnail: "/images/projects/my-app.png",
  featured: false,
}
```

Optional fields can be omitted when they are not applicable. Use only accurate descriptions and verifiable links.

## 8. Add a Certificate

1. Add the certificate PDF or image to `public/certificates/`.
2. Add or update its entry in `src/data/certifications.ts`.
3. Use a public file path beginning with `/certificates/`.

Example:

```ts
{
  id: "python-course",
  name: "Python for Data Science",
  issuer: "Example Academy",
  issueDate: "Mar 2026",
  file: "/certificates/python-course.pdf",
  skills: ["Python", "Pandas"],
}
```

Replace the example details with the actual certificate information.

## 9. Add an Achievement or Publication

Edit `src/data/achievements.ts`.

Example:

```ts
{
  id: "my-publication",
  type: "publication",
  title: "Exact title of the publication",
  date: "2027",
  organization: "Journal or conference name",
  description: "A brief, accurate description.",
  link: "https://example.com/publication",
}
```

Include supporting files or links only when they are available and verified.

## 10. Security

The portfolio includes baseline security headers configured in `next.config.mjs`.

The configured headers include:

- **X-Content-Type-Options:** Helps prevent MIME-type sniffing.
- **X-Frame-Options:** Prevents the site from being embedded in frames.
- **Referrer-Policy:** Controls referrer information shared with other sites.
- **Permissions-Policy:** Restricts camera, microphone, and geolocation capabilities.
- **Strict-Transport-Security:** Instructs supporting browsers to use HTTPS after receiving the header over a secure connection.

### Security Best Practices

- Never commit API keys, passwords, access tokens, or private credentials.
- Keep environment files out of Git using `.gitignore`.
- Do not store secrets in `public/`; its contents are publicly accessible.
- Review certificates and documents before publishing them.
- Keep dependencies updated and review security advisories.
- Run the production build before deploying changes.
- Enable two-factor authentication on GitHub and Vercel.
- Verify response headers after deployment.
- Review any new third-party scripts or external resources before introducing a Content Security Policy.

These headers are baseline protections and do not replace a complete security audit.

## 11. Push Changes to GitHub

For an existing repository, use:

```bash
git status
git add .
git status
git commit -m "Update portfolio documentation"
git push
```

Review staged changes before committing. Do not upload secrets or private files.

For a new repository, configure the Git remote only once:

```bash
git init
git branch -M main
git remote add origin https://github.com/Sarikas-07/portfolio.git
git add .
git commit -m "Initial portfolio"
git push -u origin main
```

Do not repeat `git remote add origin` if the remote is already configured.

## 12. Deploy on Vercel

Live website: https://sarika-portfolio-iota.vercel.app

The project is already deployed on Vercel and connected to the GitHub repository.

For subsequent updates:

1. Commit your changes locally.
2. Push the commit to the configured production branch.
3. Open the project in Vercel.
4. Wait for the new production deployment to show **Ready**.
5. Visit the live website and verify the changes.

A successful Git push does not itself guarantee a successful deployment; always check the deployment status.

## 13. Troubleshooting

| Problem | Solution |
|---|---|
| `npm` command not found | Install Node.js and reopen the terminal. |
| Port 3000 is busy | Run `npm run dev -- -p 3001`. |
| Build fails | Read the first relevant error and run `npm run build` locally. |
| Resume link fails | Confirm the PDF filename and its location inside `public/`. |
| Image is missing | Check the path and capitalization. |
| Changes do not appear | Wait for deployment completion and hard-refresh using `Ctrl + Shift + R`. |
| Vercel deployment fails | Inspect the deployment build logs and fix the reported error. |
| Security headers are missing | Check the deployed response headers and the active Next.js configuration. |

## 14. Technical Decisions

- **Next.js App Router:** Organizes pages and routes using the App Router architecture.
- **TypeScript:** Provides type checking for portfolio data and components.
- **Content separation:** Typed data in `src/data/` separates portfolio information from UI presentation.
- **Static generation:** Project pages can be generated at build time where configured.
- **Accessibility:** Semantic landmarks, keyboard navigation, visible focus states, and reduced-motion support improve usability.
- **Performance:** Uses Next.js image and font optimizations where configured.
- **Contact:** Uses a `mailto:` link rather than presenting a non-functional contact form.
- **Security:** Applies baseline HTTP response headers through the Next.js configuration.
- **Deployment:** GitHub and Vercel support version-controlled updates and production builds.

---

## Author

**Sarika Ghorpade**

- Portfolio: https://sarika-portfolio-iota.vercel.app
- GitHub: https://github.com/Sarikas-07
- LinkedIn: https://www.linkedin.com/in/sarika-ghorpade-3a234930a
- Email: sarikas9266@gmail.com

