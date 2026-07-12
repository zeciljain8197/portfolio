// Single source of truth for all portfolio content.
// Add/remove a project, job, or skill by editing this file only —
// every component reads from here, nothing is hardcoded in JSX.

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatar: string;
}

export interface Highlight {
  label: string;
  value: string;
}

export interface AboutContent {
  summary: string;
  highlights: Highlight[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface LeadershipEntry {
  title: string;
  period: string;
  description: string;
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const profile: Profile = {
  name: "Zecil Jain",
  role: "Analytics Engineer",
  tagline:
    "Turning messy data into decisions — pipelines, dashboards, and the AI-driven tools in between.",
  location: "Arlington, Texas",
  email: "jain.zecil@gmail.com",
  phone: "(682) 367-8880",
  github: "https://github.com/zeciljain8197",
  linkedin: "https://linkedin.com/in/zecil-jain",
  resumeUrl: "/resume.pdf",
  avatar: "/profile.jpg",
};

export const about: AboutContent = {
  summary:
    "Analytics Engineer with experience building large-scale data platforms across healthcare and enterprise systems. I specialize in turning raw, messy data into fast, trustworthy pipelines and dashboards — and lately, in wiring AI into that workflow. Currently completing my M.S. in Computer Science at UT Arlington with a 4.0 GPA.",
  highlights: [
    { label: "Records processed", value: "120M+" },
    { label: "Years of experience", value: "4+" },
    { label: "GPA", value: "4.0" },
  ],
};

export const experience: ExperienceEntry[] = [
  {
    company: "CVS Health",
    role: "Analytics Engineer",
    period: "Jan 2026 – Present",
    achievements: [
      "Engineered scalable Snowflake, Databricks, and SQL analytics models over 120M+ healthcare records, cutting report generation time by 40%.",
      "Built automated ELT pipelines with AWS Glue, Azure Data Factory, and PySpark, improving data availability by 35%.",
      "Architected dimensional models and semantic layers powering Power BI dashboards used across 50+ operational KPIs.",
      "Implemented data quality and reconciliation frameworks that cut reporting discrepancies by 30%.",
      "Optimized cloud workloads across Snowflake, AWS S3, and Azure Synapse, cutting processing costs by 25%.",
    ],
  },
  {
    company: "Cognizant",
    role: "Data Engineer",
    period: "Oct 2021 – Jul 2024",
    achievements: [
      "Built enterprise ETL/ELT pipelines (Python, SQL, AWS Glue, Azure Data Factory, Databricks) processing 90M+ records monthly.",
      "Designed Snowflake, Redshift, and SQL Server warehouse solutions, improving reporting performance by 38%.",
      "Integrated structured/unstructured datasets from APIs and cloud storage, increasing data accessibility by 40%.",
      "Automated workflow orchestration with PySpark and cloud-native services, cutting manual effort by 50%.",
      "Improved transformation performance via query tuning and partitioning, lowering execution times by 35%.",
      "Delivered trusted datasets powering Power BI and Tableau dashboards enterprise-wide.",
    ],
  },
  {
    company: "Transol Systems",
    role: "Data Analyst",
    period: "Aug 2019 – Sep 2021",
    achievements: [
      "Developed interactive Power BI and Tableau dashboards analyzing 25M+ business records.",
      "Performed advanced SQL analysis and KPI reporting supporting executive decisions, improving reporting efficiency by 30%.",
      "Built automated reporting frameworks, cutting recurring report prep effort by 45%.",
      "Ran data validation/reconciliation reviews, reducing inconsistencies by 28%.",
      "Generated BI reports/scorecards tracking KPIs; translated stakeholder requirements into data-driven recommendations, improving process efficiency by 20%.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "DataVireon — AI Code Resolution Platform",
    period: "Aug 2025 – Dec 2025",
    description:
      "Full-stack web and mobile app for AI-driven issue scanning, debugging, and agentic code resolution. Built across 5 engineering roles with production CI/CD.",
    stack: ["Python", "FastAPI", "Next.js", "React Native", "Supabase", "Vercel", "Render"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AskDocs — Hybrid RAG Q&A System",
    period: "Mar 2025 – Jul 2025",
    description:
      "Hybrid retrieval pipeline over 3,000+ chunks with vector search and cross-encoder reranking, evaluated via GitHub Actions RAGAS gates achieving 0.95 Answer Relevancy.",
    stack: ["Python", "LangChain", "Qdrant", "RAGAS", "Gradio", "HuggingFace"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Analytics & Data Engineering",
    items: ["Data Modeling", "ELT/ETL", "Apache Spark", "PySpark", "Airflow", "dbt", "Kafka"],
  },
  {
    category: "Cloud & Big Data",
    items: [
      "AWS (Glue, S3, Redshift, EMR, Lambda)",
      "Azure Data Factory",
      "Azure Synapse",
      "Databricks",
      "Snowflake",
      "GCP",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "SQL", "PySpark", "T-SQL", "Java", "JavaScript", "R"],
  },
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "Scikit-Learn", "Hugging Face", "RAG", "Vector Search"],
  },
  {
    category: "BI & Reporting",
    items: ["Power BI", "Tableau", "Looker", "DAX", "SSRS"],
  },
  {
    category: "Databases",
    items: ["Snowflake", "PostgreSQL", "MySQL", "MongoDB", "Redshift", "Qdrant"],
  },
];

export const leadership: LeadershipEntry[] = [
  {
    title: "Organizing Team Member — Datathon @ UTA",
    period: "2025",
    description:
      "Co-designed 8 AI/ML challenges for a 24-hour hackathon with 200+ participants; defined judging rubrics and mentored teams.",
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

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
