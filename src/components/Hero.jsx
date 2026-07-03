import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-linear-to-br from-gray-950 via-slate-900 to-black text-white flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-xl mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold">
            Harsh <span className="text-cyan-400">Rathore</span>
          </h1>

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
            Passionate about building responsive web applications and ensuring
            software quality through manual and QA testing.
          </p>

<div className="flex flex-wrap gap-5 mt-10">

  <a
    href="#projects"
    className="px-7 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
  >
    🚀 View Projects
  </a>

 <a
  href={resume}
  download
  className="px-7 py-3 rounded-xl border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300"
>
  📄 Download Resume
</a>

  <a
    href="#contact"
    className="px-7 py-3 rounded-xl bg-gray-800 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300"
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
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
         <div className="relative">
  <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-20"></div>

  <img
    src={profile}
    alt="Harsh Rathore"
    className="relative w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.6)] hover:scale-105 transition duration-500"
  />
  </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;