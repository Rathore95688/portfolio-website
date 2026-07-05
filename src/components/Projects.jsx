import { useRef, useState } from "react";
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
    featured: true,
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

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="opacity-110 animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-white/10 to-purple-500/40 transition-transform duration-300 ease-out shadow-lg hover:shadow-cyan-500/20"
      >
        {project.featured && (
          <span className="absolute -top-3 left-6 z-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-cyan-500/30">
            ⭐ Featured Project
          </span>
        )}

        <div className="relative h-full overflow-hidden rounded-3xl bg-gray-900/70 backdrop-blur-xl border border-white/10">
          <div className="relative h-52 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

            
              <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-gray-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
            >
              <span className="flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
                <ExternalLinkIcon className="h-4 w-4" />
                View Live
              </span>
            </a>
          </div>

          <div className="p-6">
            <h3 className="mb-3 text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mb-5 leading-7 text-gray-400">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 py-3 font-medium text-gray-900 shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-400/40"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400/10 hover:border-cyan-400"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gray-900 px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-5xl font-bold">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-gray-400">
          A few builds that show how I turn ideas into working, tested products.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;