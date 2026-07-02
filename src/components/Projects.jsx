const projects = [
  {
    title: "Campus Bite",
    description:
      "A modern food ordering website developed using React, Vite and Tailwind CSS with a responsive and user-friendly interface.",
    tech: "React • Vite • Tailwind CSS",
    live: "#",
    github: "#",
  },
  {
    title: "PlaceRise",
    description:
      "A placement preparation platform featuring company information, interview experiences, aptitude resources and student support.",
    tech: "React • JavaScript • Tailwind CSS",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A premium personal portfolio showcasing my frontend development and QA testing skills, projects and contact information.",
    tech: "React • Vite • Tailwind CSS",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 border border-cyan-500 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <p className="text-cyan-400 font-semibold mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="border border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-500 hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;