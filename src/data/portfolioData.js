export const personalInfo = {
  name: "Yatam Jithendra",
  headlineName: "YATAM\nJITHENDRA.",
  title: "INFORMATION TECHNOLOGY STUDENT @ NIT SRINAGAR",
  email: "yatamjithendra246@gmail.com",
  phone: "9849142986",
  location: "Narsapur, Andhra Pradesh, India",
  locationShort: "NARSAPUR, INDIA",
  educationShort: "NIT SRINAGAR",
  graduationYear: "2028",
  cgpa: "7.53",
  introStatement: "I build projects to learn, experiment and get better at software development.",
  aboutEditorial: "I'm Yatam Jithendra, an Information Technology student at NIT Srinagar. I spend most of my time learning DSA, web development, and building small projects to understand how things work by making them.",
  aboutParagraphs: [
    "I'm currently learning DSA, web development and backend development by building projects and experimenting with different technologies.",
    "I started with C++ and have been gradually exploring Python and JavaScript."
  ]
};

export const education = [
  {
    institution: "NIT SRINAGAR",
    degree: "B.Tech — Information Technology",
    years: "2024 — 2028",
    cgpa: "7.53",
    status: "ENROLLED"
  }
];

export const timelineData = [
  {
    year: "2024",
    title: "Began B.Tech at NIT Srinagar",
    description: "Started studying Information Technology, learning foundational programming, C++, and discrete mathematics."
  },
  {
    year: "2025",
    title: "Started Building Projects",
    description: "Built initial software projects including a C++ OpenCV camera feed app and a JavaScript task manager."
  },
  {
    year: "2026",
    title: "Web Apps & Competitive Programming",
    description: "Built F1 Hub with Python FastAPI & PostgreSQL while practicing algorithms on Codeforces and GeeksforGeeks."
  },
  {
    year: "2028",
    title: "Expected Graduation",
    description: "Completing B.Tech IT degree with solid software engineering fundamentals."
  }
];

export const currentLearning = [
  { topic: "DSA" },
  { topic: "Web Development" },
  { topic: "Backend Development" },
  { topic: "Python" },
  { topic: "JavaScript" }
];

export const arsenalData = [
  {
    id: "cpp",
    num: "01",
    name: "C++",
    category: "LANGUAGES",
    type: "PROGRAMMING LANGUAGE",
    description: "My main language for practicing data structures, algorithms, competitive programming, and basic C++ OpenCV projects.",
    appliedIn: ["DSA", "Codeforces (867 Rating)", "Camera Opener"],
    statusLabel: "PRIMARY LANGUAGE"
  },
  {
    id: "python",
    num: "02",
    name: "PYTHON",
    category: "LANGUAGES",
    type: "SCRIPTING & BACKEND",
    description: "Used for backend API development with FastAPI, data extraction scripts, and FastF1 telemetry processing.",
    appliedIn: ["FastAPI Backend", "FastF1 Data Scripts"],
    statusLabel: "PRACTICING & APPLIED"
  },
  {
    id: "javascript",
    num: "03",
    name: "JAVASCRIPT",
    category: "LANGUAGES",
    type: "WEB DEVELOPMENT",
    description: "Core language for building reactive frontends, task UI state, drag-and-drop interfaces, and modern web apps.",
    appliedIn: ["React Frontends", "dnd-kit Task UI"],
    statusLabel: "ACTIVE DEVELOPMENT"
  },
  {
    id: "mysql",
    num: "04",
    name: "MYSQL",
    category: "DATABASES",
    type: "RELATIONAL DATABASE",
    description: "Relational database used for creating tables, writing SQL queries, and understanding relational data storage.",
    appliedIn: ["SQL Queries", "Database Schemas"],
    statusLabel: "WORKING KNOWLEDGE"
  },
  {
    id: "postgresql",
    num: "05",
    name: "POSTGRESQL",
    category: "DATABASES",
    type: "ASYNC SQL DATABASE",
    description: "Relational database used alongside Python FastAPI and AsyncPG for storing telemetry and race data.",
    appliedIn: ["F1 Hub Backend", "SQLAlchemy ORM"],
    statusLabel: "APPLIED IN PROJECTS"
  },
  {
    id: "opencv",
    num: "06",
    name: "OPENCV",
    category: "LIBRARIES",
    type: "COMPUTER VISION",
    description: "Open-source computer vision library used in C++ for camera frame capture and basic image window rendering.",
    appliedIn: ["Camera Opener App"],
    statusLabel: "WORKING KNOWLEDGE"
  },
  {
    id: "git",
    num: "07",
    name: "GIT",
    category: "TOOLS",
    type: "VERSION CONTROL",
    description: "Version control tool used for managing code revisions, branch commits, and repository history.",
    appliedIn: ["Version Control", "Commit History"],
    statusLabel: "DAILY USE"
  },
  {
    id: "github",
    num: "08",
    name: "GITHUB",
    category: "TOOLS",
    type: "CODE HOSTING",
    description: "Platform for hosting code repositories, project deployment, and open-source code publishing.",
    appliedIn: ["Repositories", "Project Releases"],
    statusLabel: "DAILY USE"
  },
  {
    id: "vscode",
    num: "09",
    name: "VS CODE",
    category: "TOOLS",
    type: "CODE EDITOR",
    description: "Primary editor for writing C++, Python, and JavaScript code with integrated terminal workflows.",
    appliedIn: ["Development Workflow", "Debugging"],
    statusLabel: "PRIMARY EDITOR"
  },
  {
    id: "antigravity",
    num: "10",
    name: "ANTIGRAVITY",
    category: "TOOLS",
    type: "AI CODING ASSISTANT",
    description: "AI pair programming assistant used for code generation, architecture planning, and debugging support.",
    appliedIn: ["Pair Programming", "Architecture Planning"],
    statusLabel: "DAILY USE"
  }
];

export const projects = [
  {
    num: "01",
    id: "f1-hub",
    slug: "f1-hub",
    title: "F1 HUB",
    tagline: "FORMULA 1 DATA & ANALYTICS PLATFORM",
    description: "A Formula 1 website I built to experiment with race data, standings, schedules and different ways of presenting the information.",
    technologies: ["REACT", "JAVASCRIPT", "PYTHON", "FASTAPI", "POSTGRESQL", "SQLALCHEMY", "FASTF1", "RECHARTS", "TAILWIND CSS"],
    github: "https://github.com/jithendra847/f1-hub",
    demo: "https://f1-hub-mu.vercel.app/",
    overview: "A Formula 1 website I built to experiment with race data, standings, schedules and different ways of presenting the information.",
    whyIBuiltIt: "I built this project to practice full-stack development with a Python FastAPI backend, PostgreSQL database, and React data charts.",
    whatIBuilt: [
      "Fetched race schedules, driver standings, and championship points using Jolpica and OpenF1 APIs.",
      "Created a Python FastAPI backend with AsyncPG for fast database querying.",
      "Built interactive lap time comparison charts using React and Recharts."
    ],
    architecture: "React 18 frontend built with Vite and Tailwind CSS connected to a Python FastAPI server storing data in PostgreSQL.",
    whatILearned: "Working on this project helped me understand how backend APIs, SQL databases, and frontend chart components fit together."
  },
  {
    num: "02",
    id: "to-do-list",
    slug: "to-do-list",
    title: "TO-DO LIST",
    tagline: "TASK MANAGEMENT WEB APP",
    description: "A simple to-do list web app I built to practice JavaScript, drag-and-drop interactions, and local storage task management.",
    technologies: ["JAVASCRIPT", "REACT", "VITE", "DND-KIT", "CSS3"],
    github: "https://github.com/jithendra847/To-Do-List",
    demo: "https://to-do-list-bice-iota.vercel.app/",
    overview: "A simple to-do list web app I built to practice JavaScript, drag-and-drop interactions, and local storage task management.",
    whyIBuiltIt: "I built this while practicing React state management and learning how drag-and-drop interfaces work.",
    whatIBuilt: [
      "Added drag-and-drop task reordering with @dnd-kit/sortable.",
      "Implemented task completion toggles and local storage saving so tasks persist after refreshing.",
      "Designed a simple responsive interface with CSS custom variables."
    ],
    architecture: "Single-page React application built with Vite using local state hooks and browser localStorage.",
    whatILearned: "Helped me understand React state updates, drag-and-drop sortable lists, and persistent browser storage."
  },
  {
    num: "03",
    id: "camera-opener",
    slug: "camera-opener",
    title: "CAMERA OPENER",
    tagline: "WEBCAM CAPTURE & PROCESSING APP",
    description: "A small C++ project that opens and displays the computer's camera feed using OpenCV.",
    technologies: ["C++", "OPENCV"],
    github: "https://github.com/jithendra847/cam-test",
    demo: null,
    overview: "A native desktop app written in C++ that captures video frames directly from a connected webcam using OpenCV.",
    whyIBuiltIt: "I built this project to get hands-on experience with OpenCV and working with camera streams in C++.",
    whatIBuilt: [
      "Initialized camera video hardware streams using OpenCV cv::VideoCapture.",
      "Displayed the live camera stream in a native window with frame update loops.",
      "Handled keyboard input for quitting the window safely."
    ],
    architecture: "C++ desktop application compiled with OpenCV VideoCapture and HighGUI windowing frameworks.",
    whatILearned: "Helped me learn C++ hardware camera access, video frame loops, and memory cleanup."
  }
];

export const competitiveProgramming = {
  codeforces: {
    platform: "CODEFORCES",
    rating: 867,
    label: "RATING",
    profileUrl: "https://codeforces.com/profile/yatamjithendra847"
  },
  geeksforgeeks: {
    platform: "GEEKSFORGEEKS",
    problemsSolved: 210,
    institutionRank: 184,
    profileUrl: "https://www.geeksforgeeks.org/profile/yatamjithm778?tab=overview"
  }
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/jithendra-yatam-675a33319/",
  github: "https://github.com/jithendra847",
  geeksforgeeks: "https://www.geeksforgeeks.org/profile/yatamjithm778?tab=overview",
  codeforces: "https://codeforces.com/profile/yatamjithendra847",
  email: "mailto:yatamjithendra246@gmail.com",
  phone: "tel:9849142986"
};
