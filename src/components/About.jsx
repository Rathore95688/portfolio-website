import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative overflow-hidden bg-[#050816] text-white py-28 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}

      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-[170px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-[110px] opacity-30 animate-pulse"></div>

            {/* Ring */}

            <div
              className="absolute inset-[-15px] rounded-full border border-cyan-400/30"
              style={{
                animation: "spin 16s linear infinite",
              }}
            ></div>

            <img
              src={profile}
              alt="Harsh Rathore"
              className="relative w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-[6px] border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,.45)] hover:scale-105 transition duration-500"
            />

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            About Me
          </span>

          <h2 className="text-5xl font-black mt-4 leading-tight">
            Turning Ideas Into
            <span className="text-cyan-400"> Reality.</span>
          </h2>

          <p className="mt-8 text-gray-400 leading-8 text-lg">
            I'm a passionate Frontend Developer and QA Tester who enjoys
            building responsive, modern and user-friendly web applications
            using React, Vite and Tailwind CSS while ensuring software quality
            through Manual Testing, Test Case Writing and Bug Reporting.
          </p>

          {/* Information Card */}

          <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,.15)] transition-all duration-500">

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-xl p-4 hover:bg-cyan-500/10 transition">
                <h4 className="text-cyan-400 font-semibold">Name</h4>
                <p className="mt-2 text-gray-300">Harsh Rathore</p>
              </div>

              <div className="rounded-xl p-4 hover:bg-cyan-500/10 transition">
                <h4 className="text-cyan-400 font-semibold">Role</h4>
                <p className="mt-2 text-gray-300">
                  Frontend Developer
                </p>
              </div>

              <div className="rounded-xl p-4 hover:bg-cyan-500/10 transition">
                <h4 className="text-cyan-400 font-semibold">Experience</h4>
                <p className="mt-2 text-gray-300">Fresher</p>
              </div>

              <div className="rounded-xl p-4 hover:bg-cyan-500/10 transition">
                <h4 className="text-cyan-400 font-semibold">Location</h4>
                <p className="mt-2 text-gray-300">India</p>
              </div>

            </div>

          </div>

          {/* Expertise */}

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="group rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.25)] hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-cyan-400 text-xl font-bold">
                💻 Frontend
              </h3>

              <p className="text-gray-400 mt-3">
                React • Vite • Tailwind CSS
              </p>

            </div>

            <div className="group rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.25)] hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-cyan-400 text-xl font-bold">
                🧪 QA Testing
              </h3>

              <p className="text-gray-400 mt-3">
                Manual Testing & Bug Reporting
              </p>

            </div>

            <div className="group rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.25)] hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-cyan-400 text-xl font-bold">
                📄 Test Cases
              </h3>

              <p className="text-gray-400 mt-3">
                Writing Effective Test Cases
              </p>

            </div>

            <div className="group rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.25)] hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-cyan-400 text-xl font-bold">
                🚀 Learning
              </h3>

              <p className="text-gray-400 mt-3">
                APIs • Automation • React
              </p>

            </div>

          </div>

          {/* Button */}

          <a
            href="#contact"
            className="inline-flex items-center mt-10 px-8 py-3 rounded-xl bg-cyan-500 font-semibold hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,.45)] transition duration-300"
          >
            Let's Connect →
          </a>

        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;