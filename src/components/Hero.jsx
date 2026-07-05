import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#050816] overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Background Glow */}
<div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px]"></div>

<div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[170px]"></div>

<div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2"></div>

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
    Available for Internship & Full-Time Opportunities
  </div>

  <p className="text-cyan-400 text-xl mt-5">
    👋 Hello, I'm
  </p>
          </div>

          <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Harsh <span className="text-cyan-400">Rathore</span>
          </motion.h1>

          <div className="text-2xl md:text-3xl font-semibold mt-5 text-gray-300">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "QA Tester",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-gray-400 leading-8 max-w-xl">
            Frontend Developer and QA Tester passionate about creating responsive,
high-performance web applications with React. I also specialize in
manual testing, bug reporting, and software quality assurance to
deliver reliable user experiences.
          </p>

<div className="flex flex-wrap gap-5 mt-10">

  <a
    href="#projects"
    className="px-8 py-3 rounded-xl bg-cyan-500 font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 hover:-translate-y-1 transition-all duration-300"
  >
    🚀 View Projects
  </a>

 <a
  href={resume}
  download
  className="px-8 py-3 rounded-xl border border-cyan-400 bg-white/5 backdrop-blur-md hover:bg-cyan-400 hover:text-black transition-all duration-300"
>
  📄 Download Resume
</a>

  <a
    href="#contact"
    className="px-8 py-3 rounded-xl bg-gray-900 border border-gray-700 hover:border-cyan-400 hover:bg-gray-800 transition-all duration-300"
  >
    📩 Contact Me
  </a>

</div>

          <div className="flex gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/Rathore95688"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-rathore-772124294"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 border border-gray-700 flex items-center justify-center hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg">

  <div className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-4 text-center hover:scale-105 transition">
    <h2 className="text-3xl font-bold text-cyan-400">3+</h2>
    <p className="text-gray-400 text-sm mt-1">Projects</p>
  </div>

  <div className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-4 text-center hover:scale-105 transition">
    <h2 className="text-3xl font-bold text-cyan-400">15+</h2>
    <p className="text-gray-400 text-sm mt-1">Skills</p>
  </div>

  <div className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-4 text-center hover:scale-105 transition">
    <h2 className="text-3xl font-bold text-cyan-400">Open</h2>
    <p className="text-gray-400 text-sm mt-1">To Work</p>
  </div>

        </div>
        
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
         <div className="relative flex justify-center items-center">

  <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-[130px] opacity-30 animate-pulse"></div>

  <img
    src={profile}
    alt="Harsh Rathore"
    className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-[6px] border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.6)] hover:scale-105 duration-500"
  />

</div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;