import campusbite from "../assets/campusbite.png";
import placerise from "../assets/placerise.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "Campus Bite",
    image: campusbite,
    description:
      "A modern food ordering web application with a responsive UI and smooth user experience.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Rathore95688/CampusBite",
    live: "https://campusbite-1eqe.onrender.com/user-selection",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Personal portfolio showcasing frontend development skills, QA testing knowledge, and projects.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Rathore95688/portfolio-website",
    live: "https://portfolio-website-eight-theta-25.vercel.app/#projects",
  },
  {
    title: "PlaceRise",
    image: placerise,
    description:
      "A placement preparation platform providing interview resources, company insights, and career guidance.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Rathore95688/placerise",
    live: "https://placerise.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-cyan-400 hover:-translate-y-3 transition-all duration-300 shadow-lg"
            >
              {/* Placeholder Image */}
             <img
  src={project.image}
  alt={project.title}
  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  <a
                    href={project.live}
                    className="flex-1 text-center bg-cyan-500 py-3 rounded-xl hover:bg-cyan-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-cyan-400 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;