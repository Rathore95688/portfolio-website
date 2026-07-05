import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050816] pt-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[180px]" />

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-lg">

            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-cyan-300 text-sm font-medium">
              Available for Internship & Full-Time Opportunities
            </span>

          </div>

          {/* Hello */}

          <p className="text-cyan-400 text-xl mt-8">
            👋 Hello, I'm
          </p>

          {/* Name */}

          <motion.h1
            initial={{ opacity:0,y:20 }}
            animate={{ opacity:1,y:0 }}
            transition={{ delay:.2 }}
            className="text-5xl md:text-7xl font-black leading-tight mt-3"
          >
            Harsh

            <br />

            <span className="text-cyan-400">
              Rathore
            </span>

          </motion.h1>

          {/* Typing */}

          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mt-6">

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "QA Tester",
                2000,
                "Manual Tester",
                2000
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />

          </div>

          {/* Description */}

          <p className="mt-8 max-w-xl text-gray-400 leading-8">

            Passionate Frontend Developer and QA Tester with experience
            building responsive web applications using React, Vite and
            Tailwind CSS. Skilled in Manual Testing, Test Case Writing,
            Bug Reporting and delivering high-quality user experiences.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-cyan-500 font-semibold hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,.45)] transition-all duration-300"
            >
              🚀 View Projects
            </a>

            <a
              href={resume}
              download
              className="px-8 py-3 rounded-xl border border-cyan-400 bg-white/5 backdrop-blur-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              📄 Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl bg-gray-900 border border-gray-700 hover:border-cyan-400 hover:bg-gray-800 transition-all duration-300"
            >
              📩 Contact
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-5 mt-12 max-w-xl">

            <motion.div
              whileHover={{ y:-8 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl p-5 text-center"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

              <h2 className="relative text-4xl font-bold text-cyan-400">
                3+
              </h2>

              <p className="relative text-gray-400 mt-2">
                Projects
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y:-8 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl p-5 text-center"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

              <h2 className="relative text-4xl font-bold text-cyan-400">
                15+
              </h2>

              <p className="relative text-gray-400 mt-2">
                Skills
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y:-8 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl p-5 text-center"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

              <h2 className="relative text-4xl font-bold text-cyan-400">
                Open
              </h2>

              <p className="relative text-gray-400 mt-2">
                To Work
              </p>

            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center items-center"
>
  {/* Main Glow */}
  <div className="absolute w-[430px] h-[430px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-[130px] opacity-30 animate-pulse"></div>

  {/* Outer Ring */}
  <div
    className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/30"
    style={{
      animation: "spin 18s linear infinite",
    }}
  />

  {/* Inner Ring */}
  <div
    className="absolute w-[360px] h-[360px] rounded-full border border-purple-400/30"
    style={{
      animation: "spin 14s linear infinite reverse",
    }}
  />

  {/* Floating Icons */}

  <div className="absolute -top-2 left-24 w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20 animate-bounce">
    ⚛️
  </div>

  <div
    className="absolute top-32 -left-6 w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20"
    style={{
      animation: "float 4s ease-in-out infinite",
    }}
  >
    💻
  </div>

  <div
    className="absolute bottom-16 -left-2 w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20"
    style={{
      animation: "float 5s ease-in-out infinite",
    }}
  >
    🧪
  </div>

  <div
    className="absolute top-24 right-0 w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20"
    style={{
      animation: "bounce 3s infinite"
    }}
  >
    🌐
  </div>

  {/* Profile */}

  <motion.img
    whileHover={{
      scale: 1.05,
    }}
    transition={{
      duration: 0.4,
    }}
    src={profile}
    alt="Harsh Rathore"
    className="relative z-10 w-80 h-80 md:w-[400px] md:h-[400px] rounded-full object-cover border-[6px] border-cyan-400 shadow-[0_0_70px_rgba(34,211,238,.55)]"
  />

</motion.div>

      </div> {/* max-w-7xl */}

    </section>
  );
};

export default Hero;