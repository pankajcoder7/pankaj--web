import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Website Builder AI",
      description: "Website Builder AI is a web-based platform that allows users to generate complete websites from simple natural language prompts using AI.",
      technologies: ["Node.js", "Express", "CORS", "React","Dotenv","@anthropic-ai/sdk","TypeScript","Tailwind CSS","Monaco Editor","WebContainer API","JSZip","Lucide React"],
      features: [
        "AI-Powered Code Generation: Turn simple text prompts into full websites.",
        "Real-Time Preview",
        "Code Editor",
        "Iterative Refinement",
        "Project Export: Download your full website as a ZIP file."
      ],
      github: "https://github.com/pankajcoder7/wesite-builder.git",
      demo: "https://sfs-frontend.vercel.app/"
    },
    {
      title: "MediaSharing",
      description: "MediaSharing  is a web application that allows users to watch videos and stream music in sync while chatting with each other in real-time..",
      technologies: ["React", "Typescript", "Tailwind CSS","Next js","Redux","Socket io","Shadecn","Framer Motion"],
      features: [
        "Real-Time Media Sharing",
        "Chat Functionality",
        "Room Creation:",
        "User Interaction",
        "Queue System",
        "Drawing Board"
      ],
      github: "https://github.com/pankajcoder7/media-sharing-app-master",
      demo: "https://mediasharing.dipu.pro/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured <span className="text-purple-600">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-black"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}