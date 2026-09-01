# Yatam Jithendra — Personal Portfolio

The personal engineering portfolio of **Yatam Jithendra**, an Information Technology undergraduate at **National Institute of Technology (NIT) Srinagar** (2024–2028).

Built with **React 18**, **Vite**, and **Vanilla CSS** following an industrial/editorial design language, strict accessibility standards, and responsive architecture across all viewports.

---

## 🚀 Key Highlights

- **Flagship Project — F1 Hub**: Full-stack Formula 1 telemetry and analytics platform built with React, Python FastAPI, PostgreSQL, SQLAlchemy, FastF1, and Recharts.
- **Accessible Interactions**: Keyboard navigable dialogs (`role="dialog"`, `aria-modal="true"`, focus trapping & restoration), accessible touch targets, and pure CSS responsive layouts.
- **Performance Optimized**: Zero scroll-based state churn, GPU-accelerated CSS transforms, and strict compliance with `prefers-reduced-motion: reduce`.
- **Privacy & Security**: Zero exposed phone numbers or sensitive keys; verified links to Email, GitHub, LinkedIn, Codeforces, and GeeksforGeeks.

---

## 📁 Repository Structure

```text
portfolio/
├── index.html                 # Semantic HTML entry with SEO metadata, Open Graph, & theme colors
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite development server configuration
├── public/
│   ├── favicon.png            # Site favicon
│   ├── robots.txt             # Search engine crawling rules
│   └── sitemap.xml            # XML sitemap for SEO discovery
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Sticky header with active section spy, theme toggle, and mobile drawer
│   │   ├── Hero.jsx           # Technical positioning, prominent CTAs (Projects, Resume, GitHub, LinkedIn)
│   │   ├── About.jsx          # Education & background summary
│   │   ├── Marquee.jsx        # Lightweight technical ticker
│   │   ├── Skills.jsx         # Categorized skills (Languages, Frontend, Backend, Databases, Tools)
│   │   ├── Projects.jsx       # Featured project cards with flagship F1 Hub highlight
│   │   ├── ProjectModal.jsx   # Accessible case study modal with focus trap and deep technical breakdowns
│   │   ├── CompetitiveProgramming.jsx # Verified Codeforces & GeeksforGeeks statistics
│   │   ├── EducationLearning.jsx      # Degree details (NIT Srinagar, CGPA 7.53) & milestones
│   │   ├── Contact.jsx        # Verified contact channels & availability statement
│   │   └── Footer.jsx         # Footer with social links & back-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx   # Theme switcher provider (Dark/Light mode)
│   ├── data/
│   │   └── portfolioData.js   # Central authoritative configuration for all portfolio content
│   ├── hooks/
│   │   ├── useCounter.js      # Animated number counter respecting reduced motion
│   │   ├── useInView.js       # IntersectionObserver trigger for section reveals
│   │   └── useScrollLock.js   # Memory-safe body scroll lock during modal lifecycle
│   ├── styles/
│   │   └── index.css          # Modular CSS design system with custom properties & media queries
│   ├── App.jsx                # Layout wrapper & modal orchestration
│   └── main.jsx               # React application entry point
└── README.md                  # Instructions and documentation
```

---

## 💻 How to Run Locally

### Prerequisites

- **Node.js**: Version 18.0 or higher.
- **npm**: Node package manager.

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

---

## 📦 How to Build for Production

To create an optimized production bundle:

```bash
npm run build
```

This compiles the assets into the `dist/` directory.

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 🛠️ Updating Portfolio Information

All content is centrally managed in [`src/data/portfolioData.js`](src/data/portfolioData.js):

- `personalInfo`: Name, title, tagline, email, CGPA, resume URL, and availability statement.
- `skillsCategories`: Structured skill lists categorized by Languages, Frontend, Backend, Databases, Tools, and Applied AI/ML.
- `projects`: Detailed project records including flagship flags, descriptions, case study sections, and repository links.
- `competitiveProgramming`: Verified contest ratings and problem counts for Codeforces and GeeksforGeeks.
- `education` & `timelineData`: Academic credentials and development milestones.

---

## 📄 License

Open-source and free to use under the [MIT License](LICENSE).
