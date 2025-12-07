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
    headline: "End-to-End Serverless AI News Pipeline",
    description: "Designed and deployed a fully automated, serverless news aggregation pipeline on Google Cloud Platform.",
    tags: ["GCP Cloud Run", "Cloud Tasks", "VertexAI", "Firestore"],
    content: "Architected a decoupled microservices system using Cloud Run (asynchronous with FastAPI) and Cloud Tasks for resilient queueing. Implemented universal data extraction using LLMs and VertexAI Embedding API for duplicate detection.",
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