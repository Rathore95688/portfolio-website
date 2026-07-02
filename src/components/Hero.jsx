const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-cyan-400 text-lg mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Harsh <span className="text-cyan-400">Rathore</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
            Frontend Developer & QA Tester
          </h2>

          <p className="mt-6 text-gray-400 leading-8 max-w-xl">
            Passionate about building modern, responsive web applications using
            React and Tailwind CSS while ensuring software quality through
            Manual and Automation Testing.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-cyan-500/20 border-4 border-cyan-500 flex items-center justify-center text-8xl">
            💻
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;