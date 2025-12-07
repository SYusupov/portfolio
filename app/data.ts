export interface Project {
  slug: string;
  title: string;
  headline: string;
  description: string;
  tags: string[];
  content: string;
  image: string;
  features?: string[];
  architecture?: string;
  architectureImage?: string;
  secondaryImage?: string;
  secondaryImageCaption?: string;
  techStack?: { category: string; details: string }[];
}

export const personalInfo = {
  name: "Sayyor Yusupov",
  role: "MLOps & AI Engineer",
  email: "sayyor.yusupov@gmail.com",
  location: "Tashkent, Uzbekistan (Remote)",
  github: "github.com/SYusupov",
  linkedin: "linkedin.com/in/sayyory",
  summary: "MLOps and AI Application Developer with 4+ years of experience. Specializing in engineering and deploying scalable, end-to-end AI applications on Google Cloud Platform." // [cite: 10]
};

export const skills = [
  { name: "GCP & MLOps", level: 95, category: "Cloud" },
  { name: "Python (FastAPI, Django)", level: 90, category: "Backend" },
  { name: "RAG & LLMs", level: 85, category: "AI" },
  { name: "React & Next.js", level: 80, category: "Frontend" },
];

export const projects: Project[] = [
  {
    slug: "uznews-digest",
    title: "UzNews Digest",
    headline: "Automated News Scraping & Summarization Bot",
    description: "UzNewsDigest is a fully automated, serverless pipeline built on Google Cloud Platform (GCP) that intelligently scrapes news websites, extracts structured article data using Large Language Models (LLMs), filters the news, summarizes them and posts them on a Telegram Channel.",
    tags: ["GCP Cloud Run", "Cloud Tasks", "Firestore", "OpenAI", "Crawl4AI", "FastAPI", "Python", "Cloud Scheduler"],
    content: "The system utilizes a decoupled, event-driven microservices architecture on GCP. Cloud Scheduler triggers the workflow, while Cloud Tasks manages rate limiting and retries across services. We use `crawl4ai` and OpenAI models for intelligent content extraction from complex HTML, ensuring structured data retrieval. A filtering layer uses LLM embeddings to deduplicate news and verify relevance (e.g., filtering for Uzbekistan-related content). Data is stored in Firestore with a TTL policy for automatic cleanup, and final summaries are posted to Telegram in real-time.",
    image: "/images/newsdigest_screenshot.png",
    features: [
      "Automated & Scheduled: Runs automatically every 30 minutes.",
      "Intelligent Extraction: Uses crawl4ai and OpenAI models to extract structured data.",
      "News Filtering: Filters news using LLM embeddings and content analysis.",
      "Serverless & Scalable: Built on GCP Cloud Run, Cloud Tasks, and Firestore.",
      "Resilient Architecture: Decoupled microservices for fault isolation.",
      "Real-time Posting: Delivers instant notifications to Telegram."
    ],
    architecture: "The pipeline follows a decoupled, event-driven architecture. The process is initiated by Cloud Scheduler, which triggers a cascade of tasks managed by Cloud Tasks. Each step is handled by a dedicated, single-responsibility Cloud Run service.",
    architectureImage: "/images/newsdigest_architecture_diagram.png",
    techStack: [
      { category: "Cloud Platform", details: "Google Cloud Platform (GCP)" },
      { category: "Compute", details: "Cloud Run" },
      { category: "Task Management", details: "Cloud Tasks" },
      { category: "Database", details: "Firestore (with TTL Policy)" },
      { category: "AI & Scraping", details: "crawl4ai, OpenAI API" },
      { category: "Language", details: "Python 3.10+, FastAPI" }
    ]
  },

  {
    slug: "movie-stats",
    title: "MovieStats",
    headline: "Interactive Actor Career Comparison Platform",
    description: "MovieStats is a web application that allows users to compare the careers of movie actors side-by-side. It visualizes data such as box office performance, genre distribution, and critical reception, providing insights into an actor's filmography.",
    tags: ["Django 5", "PostgreSQL", "Plotly.js", "Bootstrap 5", "GCP Cloud Run", "TMDB API"],
    content: "MovieStats enables users to compare up to 3 actors simultaneously, generating interactive charts for metrics like movies per year, average revenue, and genre distribution. The application features a responsive dark-mode UI built with Bootstrap 5 and Plotly.js for rich data visualization. Behind the scenes, a custom Python pipeline fetches data from TMDB, storing it in a robust PostgreSQL database. The entire stack is containerized and deployed on Google Cloud Run with Cloud SQL.",
    image: "/images/moviestats_screenshot2.png",
    secondaryImage: "/images/moviestats_screenshot1.png",
    secondaryImageCaption: "The search interface allows users to easily find and select up to three actors for a side-by-side career comparison.",
    features: [
      "Actor Comparison: Compare up to 3 actors side-by-side with interactive charts.",
      "Rich Visualizations: Plotly.js charts for genre distribution, revenue, and collaborations.",
      "Deep Insights: Drill-down details for specific movies, co-actors, and directors.",
      "Modern UI: Responsive dark-themed interface optimized for all devices.",
      "Robust Data: Automated ingestion pipeline from TMDB API."
    ],
    techStack: [
      { category: "Backend", details: "Python, Django 5" },
      { category: "Database", details: "PostgreSQL (Cloud SQL)" },
      { category: "Frontend", details: "Django Templates, Bootstrap 5, Plotly.js" },
      { category: "Infrastructure", details: "GCP (Cloud Run, Cloud SQL, Secret Manager)" },
      { category: "Data Source", details: "TMDB API" }
    ]
  }
];