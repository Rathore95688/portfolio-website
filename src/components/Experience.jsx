import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Development",
    company: "Personal Projects",
    duration: "2025 - Present",
    description:
      "Built responsive web applications using React.js, Vite and Tailwind CSS. Focused on creating clean UI, reusable components and responsive layouts.",
  },
  {
    title: "QA & Manual Testing",
    company: "Self Learning",
    duration: "2025 - Present",
    description:
      "Practiced Manual Testing, Test Case Writing, Bug Reporting and API Testing using Postman. Focused on improving software quality and usability.",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="bg-slate-900 text-white py-24 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-cyan-400 mt-1">{exp.company}</p>
                </div>

                <span className="text-gray-400 mt-3 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <p className="text-gray-300 mt-5 leading-7">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;