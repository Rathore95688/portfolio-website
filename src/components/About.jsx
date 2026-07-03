const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-2xl border-4 border-cyan-400 bg-gray-800 flex items-center justify-center text-8xl">
              👨‍💻
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-3xl font-semibold mb-5">
              Frontend Developer & QA Tester
            </h3>

            <p className="text-gray-300 leading-8">
              I am passionate about developing responsive and user-friendly web
              applications using modern technologies like React.js, Vite and
              Tailwind CSS.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              Along with frontend development, I have knowledge of Manual
              Testing, QA processes, Test Case Writing and Bug Reporting. My
              goal is to build high-quality applications that provide an
              excellent user experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-cyan-400 font-semibold">Name</h4>
                <p>Harsh Rathore</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Role</h4>
                <p>Frontend Developer</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Experience</h4>
                <p>Fresher</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Location</h4>
                <p>India</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;