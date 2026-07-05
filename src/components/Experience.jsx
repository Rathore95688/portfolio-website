import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Development",
    company: "Personal Projects",
    duration: "2026 - Present",
    description:
      "Built responsive web applications using React.js, Vite and Tailwind CSS. Focused on creating clean UI, reusable components and responsive layouts.",
  },
  {
    title: "QA & Manual Testing",
    company: "Self Learning",
    duration: "2026 - Present",
    description:
      "Practiced Manual Testing, Test Case Writing, Bug Reporting and API Testing using Postman. Focused on improving software quality and usability.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gray-900 px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-5xl font-bold"
        >
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-gray-400">
          What I've been building and learning, one project at a time.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-400/60 via-purple-400/40 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-gray-900 shadow-lg shadow-cyan-500/30 md:flex">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                </span>

                <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-white/10 to-purple-500/40 transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/70 p-6 backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-cyan-500/10 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="mt-1 font-medium text-cyan-400">
                          {exp.company}
                        </p>
                      </div>

                      <span className="mt-3 inline-block w-fit rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300 md:mt-0">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="mt-5 leading-7 text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;