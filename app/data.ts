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

export const projects = [
  {
    slug: "uznews-digest",
    title: "UzNews Digest",
    headline: "Automated News Scraping & Summarization Bot",
    description: "UzNewsDigest is a fully automated, serverless pipeline built on Google Cloud Platform (GCP) that intelligently scrapes news websites, extracts structured article data using Large Language Models (LLMs), filters the news, summarizes them and posts them on a Telegram Channel.",
    tags: ["GCP Cloud Run", "Cloud Tasks", "Firestore", "OpenAI", "Crawl4AI", "FastAPI", "Python", "Cloud Scheduler"],
    content: "The system utilizes a decoupled, event-driven microservices architecture on GCP. Cloud Scheduler triggers the workflow, while Cloud Tasks manages rate limiting and retries across services. We use `crawl4ai` and OpenAI models for intelligent content extraction from complex HTML, ensuring structured data retrieval. A filtering layer uses LLM embeddings to deduplicate news and verify relevance (e.g., filtering for Uzbekistan-related content). Data is stored in Firestore with a TTL policy for automatic cleanup, and final summaries are posted to Telegram in real-time.",
    image: "/images/placeholder-news.png" // You will replace this with your actual screenshot
  },
  {
    slug: "valeo-llm",
    title: "Enterprise Document Extraction",
    headline: "Hybrid LLM Pipeline at Valeo",
    description: "Designed and deployed hybrid LLM pipelines for large-scale document extraction, reducing manual processing by 80%.",
    tags: ["RAG", "GCP Cloud Functions", "LangChain", "Python"],
    content: "Implemented a 2-stage split-merge strategy to handle token limits. Optimized RAG pipelines through advanced prompt engineering, boosting response relevance by 40%.",
    image: "/images/placeholder-valeo.png"
  },
  {
    slug: "movie-stats",
    title: "Actors & Movies Analytics",
    headline: "Full-Stack Analytics Platform",
    description: "Engineered a full-stack web application using Django and deployed on GCP Cloud Run.",
    tags: ["Django", "PostgreSQL", "Cloud Scheduler", "TMDB API"],
    content: "Automated a serverless data-ingestion pipeline from the TMDB API using Cloud Functions. utilized Cloud SQL for robust data storage.",
    image: "/images/placeholder-movies.png"
  }
];