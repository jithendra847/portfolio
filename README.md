# Yatam Jithendra — Personal Developer Portfolio

A modern, minimal, professional developer portfolio website built for **Yatam Jithendra** (B.Tech Information Technology student at NIT Srinagar).

![Portfolio Preview Banner](https://img.shields.io/badge/Status-Active%20Internship%20Ready-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20Vite%20%7C%20Vanilla%20CSS-blue?style=for-the-badge)

---

## 🌟 Highlights & Architecture

- **Minimalist Aesthetics**: Ultra-clean monochrome design system with generous whitespace, subtle borders, and smooth micro-animations.
- **Light & Dark Theme Toggle**: Native theme toggle with automatic system preference detection and state persistence.
- **Centralized Portfolio Data Architecture**: All content (personal bio, education, skills, project metadata, competitive programming scores, social links) is maintained in `src/data/portfolioData.js` for quick and clean updates.
- **Zero Fabrication**: 100% authentic student developer information, featuring verified GitHub project details and verified competitive programming statistics.
- **Fully Responsive & Accessible**: Mobile drawer navigation, keyboard focus management, semantic HTML5, and OpenGraph SEO tags.

---

## 📁 Repository Structure

```text
portfolio/
├── index.html                 # Main HTML entry with SEO metadata
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite development server configuration
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Sticky navigation header & mobile drawer
│   │   ├── Hero.jsx           # Developer hero section & quick CTA links
│   │   ├── About.jsx          # Education & background summary
│   │   ├── Skills.jsx         # Categorized tech badges
│   │   ├── Projects.jsx       # Featured project cards with verified tech tags
│   │   ├── CompetitiveProgramming.jsx # Codeforces & GeeksforGeeks stat blocks
│   │   ├── Contact.jsx        # Contact information & interactive message form
│   │   └── Footer.jsx         # Footer with social links & back-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx   # Theme switcher provider (Light/Dark mode)
│   ├── data/
│   │   └── portfolioData.js   # Central configuration for all portfolio content
│   ├── styles/
│   │   └── index.css          # Core CSS design system with CSS custom properties
│   ├── App.jsx                # Layout wrapper
│   └── main.jsx               # React application entry point
└── README.md                  # Instructions and documentation
```

---

## 💻 How to Run Locally

### Prerequisites

- **Node.js**: Version 18.0 or higher installed on your machine.
- **npm** or **yarn**: Node Package Manager.

### 1. Install Dependencies

In the project root directory, run:

```bash
npm install
```

### 2. Start Development Server

To launch the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live website.

---

## 📦 How to Build for Production

To create an optimized production bundle:

```bash
npm run build
```

This compiles the code into the `dist/` directory with minified JavaScript and optimized CSS.

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 🚀 How to Deploy

### Option 1: Deploy to Vercel (Recommended)

1. Push this repository to your GitHub account.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `portfolio` repository.
4. Keep framework preset as **Vite**.
5. Click **Deploy**. Vercel will automatically build and publish your portfolio with HTTPS.

### Option 2: Deploy to Netlify

1. Log into [Netlify](https://netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Connect your GitHub repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy Site**.

### Option 3: Deploy to GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add `base: '/<repository-name>/'` in `vite.config.js`.
3. Add a deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 🛠️ How to Update Portfolio Information

To modify or add your projects, skills, education, or profile links in the future:

1. Open [`src/data/portfolioData.js`](file:///d:/portfolio/src/data/portfolioData.js).
2. Edit the corresponding data objects (`personalInfo`, `education`, `skillsData`, `projects`, `competitiveProgramming`, or `socialLinks`).
3. Save the file — the application will automatically re-render with the new data!

---

## 📄 License

This portfolio website is open-source and free to use under the MIT License.
