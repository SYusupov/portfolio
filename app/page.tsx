import Link from "next/link";
import { personalInfo, projects, skills } from "./data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-100">
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-[url('/grid-pattern.svg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        
        <h1 className="z-10 text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
          {personalInfo.name}
        </h1>
        <h2 className="z-10 mt-4 text-2xl md:text-3xl text-blue-200">
          {personalInfo.role}
        </h2>
        <p className="z-10 mt-4 max-w-2xl text-slate-400">
          {personalInfo.summary}
        </p>
        
        <div className="z-10 flex gap-6 mt-8">
            <a href={`https://${personalInfo.github}`} target="_blank" className="text-3xl hover:text-primary transition"><FaGithub/></a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" className="text-3xl hover:text-primary transition"><FaLinkedin/></a>
        </div>
      </section>

      {/* SKILLS SECTION (Matches image_9b7f65.png) */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Technical Expertise</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-surface p-6 rounded-lg shadow-lg border border-slate-700">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS LIST */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.slug} className="group bg-surface rounded-xl overflow-hidden hover:-translate-y-2 transition duration-300 border border-slate-700 hover:border-primary">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                 />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-slate-400 mb-4">{project.headline}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0,3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-primary rounded border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/projects/${project.slug}`} className="block w-full text-center py-2 bg-gradient-to-r from-primary to-secondary rounded text-white font-semibold hover:opacity-90 transition">
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}