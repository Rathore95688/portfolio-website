const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Harsh Rathore
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
            Frontend Developer & QA Tester
          </h2>

          <p className="text-gray-400 mt-6 leading-7">
            I build responsive web applications with React, Tailwind CSS and
            perform Manual & Automation Testing to deliver high-quality software.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full bg-cyan-500/20 border-4 border-cyan-500 flex items-center justify-center">
            <span className="text-7xl">👨‍💻</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;