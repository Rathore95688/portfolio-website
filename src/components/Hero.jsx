import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white flex items-center pt-20"
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

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
            >
              Contact Me
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
          <div className="w-80 h-80 rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)] flex items-center justify-center bg-slate-800">
            <span className="text-8xl">👨‍💻</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;