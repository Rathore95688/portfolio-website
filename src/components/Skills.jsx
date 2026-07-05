import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "💻",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Tools",
    emoji: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Render",
      "MySQL",
    ],
  },
  {
    title: "Programming",
    emoji: "⚡",
    skills: [
      "Java",
      'JavaScript',
      "Python",
      "C",
    ],
  },
  {
    title: "QA Testing",
    emoji: "🧪",
    skills: [
      "Manual Testing",
      "Test Case Writing",
      "Bug Reporting",
      "Regression Testing",
      "Smoke Testing",
      "Functional Testing",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-6 bg-[#030712] text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md">
            My Expertise
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-8">
            I build modern web applications, create responsive user
            interfaces, and ensure software quality through effective testing
            and debugging.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
            >
              {/* Card Glow */}

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

              <div className="relative">

                <h3 className="flex items-center gap-3 text-2xl font-semibold mb-8">
                  <span className="text-3xl">
                    {category.emoji}
                  </span>

                  <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="rounded-full border border-cyan-400/20 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/30 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;