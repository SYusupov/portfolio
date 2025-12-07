import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";
import { FaArrowLeft } from "react-icons/fa";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-background text-slate-100 p-6 md:p-12">
      <Link href="/" className="inline-flex items-center text-primary hover:text-accent mb-8">
        <FaArrowLeft className="mr-2" /> Back to Portfolio
      </Link>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {project.title}
        </h1>
        <p className="text-xl text-slate-400 mb-8">{project.headline}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-2 bg-surface rounded-full border border-primary/30 text-primary shadow-lg shadow-primary/10">
              {tag}
            </span>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="prose prose-invert prose-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Project Overview</h3>
            <p>{project.description}</p>
            
            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Implementation</h3>
            <p>{project.content}</p>
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-slate-700 rounded-xl p-4 h-64 flex items-center justify-center text-slate-500">
               {/* Replace with <img src={project.image} /> */}
               [Main Screenshot Placeholder]
            </div>
            <div className="bg-surface border border-slate-700 rounded-xl p-4 h-64 flex items-center justify-center text-slate-500">
               [Pipeline Graph Placeholder]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}