import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";
import { FaArrowLeft } from "react-icons/fa";
import ZoomableImage from "../../components/ZoomableImage";

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
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="prose prose-invert prose-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Project Overview</h3>
            <p>{project.description}</p>
            
            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Implementation</h3>
            <p>{project.content}</p>

            {project.features && (
              <>
                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-slate-700 rounded-xl overflow-hidden">
               {/* Main Project Image */}
               <ZoomableImage 
                 src={project.image} 
                 alt={project.title} 
               />
            </div>

            {project.techStack && (
              <div className="bg-surface border border-slate-700 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">Tech Stack</h4>
                <div className="space-y-4">
                  {project.techStack.map((item, i) => (
                    <div key={i}>
                      <span className="block text-sm text-slate-400 mb-1">{item.category}</span>
                      <span className="block text-slate-200 font-medium">{item.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Architecture Section (Full Width) */}
        {project.architecture && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-4">System Architecture</h3>
            <div className="prose prose-invert prose-lg max-w-none mb-8">
              <p>{project.architecture}</p>
            </div>
            
            {project.architectureImage && (
              <div className="bg-white/5 border border-slate-700 rounded-xl p-4 overflow-hidden">
                <ZoomableImage 
                  src={project.architectureImage} 
                  alt={`${project.title} Architecture`} 
                  className="rounded-lg shadow-2xl"
                  caption={`Figure 1: High-level architecture diagram of the ${project.title} pipeline.`}
                />
                <p className="text-center text-slate-400 text-sm mt-4">
                  Figure 1: High-level architecture diagram of the {project.title} pipeline.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Secondary Image Section (Full Width) */}
        {project.secondaryImage && (
          <div className="mb-16">
            <div className="bg-surface border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
              <ZoomableImage 
                src={project.secondaryImage} 
                alt={`${project.title} Feature Screenshot`} 
                caption={project.secondaryImageCaption}
              />
            </div>
            {project.secondaryImageCaption && (
              <p className="text-center text-slate-400 text-sm mt-4">
                {project.secondaryImageCaption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}