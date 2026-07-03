const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Vite",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Manual Testing",
  "QA Testing",
  "Test Case Writing",
  "Bug Reporting",
  "Postman",
  "MySQL",
  "Java",
  "Python"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-cyan-500 rounded-xl p-6 text-center hover:bg-cyan-500 hover:text-black transition-all duration-300 cursor-pointer"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;