// Single source of truth for all portfolio content.
// Add/remove a project, job, skill, or leadership entry by editing this file only —
// every component reads from here, nothing is hardcoded in JSX.

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  /** Short rotating trait words shown after the name in the hero. */
  roles: string[];
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  /** Circular headshot used in the hero. */
  avatar: string;
  /** Larger cover photo used in the About "open to work" panel. Falls back to avatar if unset. */
  bentoPhoto?: string;
  openToWork: boolean;
}

export interface Highlight {
  label: string;
  value: string;
  /** Emoji icon shown above the stat. */
  icon: string;
}

export interface AboutContent {
  summary: string;
  /** Short "what I'm focused on right now" blurb for the About bento grid. */
  currentFocus: string;
  highlights: Highlight[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  /** Two-letter/short monogram shown on the placeholder cover art. */
  monogram: string;
}

export type SkillLevel = "Advanced" | "Proficient" | "Familiar";

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  category: string;
  description: string;
  icon: string;
  items: SkillItem[];
}

export interface LeadershipEntry {
  title: string;
  period: string;
  description: string;
  /** Paths to photos for this entry. Leave empty to show a placeholder block. */
  images: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SectionIntro {
  kicker: string;
  title: string;
  subtitle: string;
}

export const profile: Profile = {
  name: "Zecil Jain",
  role: "Analytics Engineer",
  tagline:
    "Turning messy data into decisions — pipelines, dashboards, and the AI-driven tools in between.",
  roles: [
    "Analytics Engineer",
    "Data Engineer",
    "Data Enthusiast",
    "Builder",
    "Problem Solver",
    "Innovator",
    "Tinkerer",
  ],
  location: "Arlington, Texas",
  email: "jain.zecil@gmail.com",
  phone: "(682) 367-8880",
  github: "https://github.com/zeciljain8197",
  linkedin: "https://linkedin.com/in/zecil-jain",
  resumeUrl: "/resume.pdf",
  avatar: "/profile_image.jpeg",
  openToWork: true,
};

export const about: AboutContent = {
  summary:
    "I've spent the last few years turning messy, high-stakes data into pipelines and dashboards people actually trust — across healthcare and enterprise systems, at a scale that keeps things interesting. Lately I've been wiring AI into that workflow too. I hold an M.S. in Computer Science from UT Arlington, graduating with a 4.0 GPA.",
  currentFocus:
    "Building agentic AI tooling with Python, LangChain, and retrieval-augmented pipelines — exploring where AI and data engineering meet.",
  highlights: [
    { label: "Projects delivered", value: "10+", icon: "🚀" },
    { label: "Years of experience", value: "4+", icon: "⏱️" },
    { label: "Technologies", value: "35+", icon: "🧰" },
  ],
};

export const experience: ExperienceEntry[] = [
  {
    company: "CVS Health",
    role: "Analytics Engineer",
    period: "Jan 2026 – Present",
    achievements: [
      "Engineered scalable Snowflake, Databricks, and SQL analytics models over 120M+ healthcare records — report generation time dropped 40% as a result.",
      "Built automated ELT pipelines with AWS Glue, Azure Data Factory, and PySpark to close data availability gaps by 35%.",
      "Architected dimensional models and semantic layers powering Power BI dashboards used across 50+ operational KPIs.",
      "Data quality and reconciliation frameworks I implemented cut reporting discrepancies by 30%.",
      "Optimized cloud workloads across Snowflake, AWS S3, and Azure Synapse, trimming processing costs by 25%.",
    ],
  },
  {
    company: "Cognizant",
    role: "Data Engineer",
    period: "Oct 2021 – Jul 2024",
    achievements: [
      "Built enterprise ETL/ELT pipelines (Python, SQL, AWS Glue, Azure Data Factory, Databricks) processing 90M+ records monthly.",
      "Reporting performance improved 38% after redesigning the warehouse layer across Snowflake, Redshift, and SQL Server.",
      "Integrated structured and unstructured datasets from APIs and cloud storage — data accessibility rose 40% across teams.",
      "Automated workflow orchestration with PySpark and cloud-native services, cutting manual effort in half.",
      "Query tuning and partitioning work brought transformation execution times down by 35%.",
      "Delivered trusted datasets powering Power BI and Tableau dashboards enterprise-wide.",
    ],
  },
  {
    company: "Transol Systems",
    role: "Data Analyst",
    period: "Aug 2019 – Sep 2021",
    achievements: [
      "Developed interactive Power BI and Tableau dashboards analyzing 25M+ business records.",
      "SQL analysis and KPI reporting I ran directly supported executive decision-making, lifting reporting efficiency by 30%.",
      "Built automated reporting frameworks that cut recurring report-prep effort by 45%.",
      "Reduced data inconsistencies by 28% through regular validation and reconciliation reviews.",
      "Generated BI reports and scorecards tracking KPIs, translating stakeholder requirements into recommendations that improved process efficiency by 20%.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    school: "University of Texas at Arlington",
    degree: "M.S. in Computer Science",
    period: "Aug 2024 – May 2026",
    gpa: "4.0",
  },
];

export const projects: Project[] = [
  {
    title: "DataVireon — AI Code Resolution Platform",
    period: "Aug 2025 – Dec 2025",
    description:
      "Full-stack web and mobile app for AI-driven issue scanning, debugging, and agentic code resolution. Built across 5 engineering roles with production CI/CD.",
    stack: ["Python", "FastAPI", "Next.js", "React Native", "Supabase", "Vercel", "Render"],
    liveUrl: "https://data-vireon.vercel.app",
    githubUrl: "https://github.com/zeciljain8197/DataVireon",
    monogram: "DV",
  },
  {
    title: "AskDocs — Hybrid RAG Q&A System",
    period: "Mar 2025 – Jul 2025",
    description:
      "Hybrid retrieval pipeline over 3,000+ chunks with vector search and cross-encoder reranking, evaluated via GitHub Actions RAGAS gates achieving 0.95 Answer Relevancy.",
    stack: ["Python", "LangChain", "Qdrant", "RAGAS", "Gradio", "HuggingFace"],
    liveUrl: "https://huggingface.co/spaces/zinu07/askdocs",
    githubUrl: "https://github.com/zeciljain8197/askdocs",
    monogram: "AD",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Analytics & Data Engineering",
    description:
      "Designing the pipelines and models that turn raw operational data into governed, analysis-ready tables.",
    icon: "🛠️",
    items: [
      { name: "Data Modeling", level: "Advanced" },
      { name: "ELT/ETL", level: "Advanced" },
      { name: "Apache Spark", level: "Proficient" },
      { name: "PySpark", level: "Advanced" },
      { name: "Airflow", level: "Familiar" },
      { name: "dbt", level: "Familiar" },
      { name: "Kafka", level: "Familiar" },
    ],
  },
  {
    category: "Cloud & Big Data",
    description: "Running and optimizing distributed workloads across the major cloud data platforms.",
    icon: "☁️",
    items: [
      { name: "AWS (Glue, S3, Redshift, EMR, Lambda)", level: "Advanced" },
      { name: "Azure Data Factory", level: "Advanced" },
      { name: "Azure Synapse", level: "Proficient" },
      { name: "Databricks", level: "Advanced" },
      { name: "Snowflake", level: "Advanced" },
      { name: "GCP", level: "Familiar" },
    ],
  },
  {
    category: "Programming",
    description: "The languages I reach for to move, transform, and query data at scale.",
    icon: "💻",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "PySpark", level: "Advanced" },
      { name: "T-SQL", level: "Proficient" },
      { name: "Java", level: "Familiar" },
      { name: "JavaScript", level: "Familiar" },
      { name: "R", level: "Familiar" },
    ],
  },
  {
    category: "AI/ML",
    description: "Where I've been focusing outside the day job — retrieval, fine-tuning, and applied ML.",
    icon: "🤖",
    items: [
      { name: "TensorFlow", level: "Familiar" },
      { name: "PyTorch", level: "Familiar" },
      { name: "Scikit-Learn", level: "Proficient" },
      { name: "Hugging Face", level: "Proficient" },
      { name: "RAG", level: "Advanced" },
      { name: "Vector Search", level: "Advanced" },
    ],
  },
  {
    category: "BI & Reporting",
    description: "Turning modeled data into dashboards executives actually use.",
    icon: "📊",
    items: [
      { name: "Power BI", level: "Advanced" },
      { name: "Tableau", level: "Advanced" },
      { name: "Looker", level: "Familiar" },
      { name: "DAX", level: "Proficient" },
      { name: "SSRS", level: "Familiar" },
    ],
  },
  {
    category: "Databases",
    description: "Storage engines I've designed schemas for and tuned in production.",
    icon: "🗄️",
    items: [
      { name: "Snowflake", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "MongoDB", level: "Familiar" },
      { name: "Redshift", level: "Advanced" },
      { name: "Qdrant", level: "Familiar" },
    ],
  },
];

export const leadership: LeadershipEntry[] = [
  {
    title: "Organizing Team Member — Datathon @ UTA",
    period: "2025",
    description:
      "Co-designed 8 AI/ML challenges for a 24-hour hackathon with 200+ participants; defined judging rubrics and mentored teams.",
    images: ["/leadership/datathon-uta.jpg"],
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const sectionIntros: Record<string, SectionIntro> = {
  about: {
    kicker: "Get to know me",
    title: "About Me",
    subtitle: "The short version: clean data, strong coffee, and dashboards that don't lie.",
  },
  journey: {
    kicker: "Where I've been",
    title: "My Journey",
    subtitle: "From spreadsheets to Spark clusters — here's the road so far.",
  },
  projects: {
    kicker: "What I've built",
    title: "Projects",
    subtitle: "A few side quests I actually finished, end to end.",
  },
  skills: {
    kicker: "Tech toolkit",
    title: "Skills",
    subtitle: "Grouped by where I use them, with an honest read on how deep each one goes — no inflated bars here.",
  },
  leadership: {
    kicker: "Beyond the desk",
    title: "Leadership & Activities",
    subtitle: "Where I trade SQL for sticky notes and help build community around data and AI.",
  },
  contact: {
    kicker: "Let's talk",
    title: "Get In Touch",
    subtitle: "Got a project, a question, or just want to talk data? My inbox doesn't bite.",
  },
};
export const contactFormAccessKey = "4f8ee497-2eee-49c2-8df1-397ac3c3055c";
