import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-gray-900 text-white py-24 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profile}
                alt="Harsh Rathore"
                className="relative w-80 h-80 object-cover rounded-3xl border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right */}
          <div>

            <h3 className="text-4xl font-bold mb-6">
              Frontend Developer &
              <span className="text-cyan-400"> QA Tester</span>
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              I'm a passionate Frontend Developer who enjoys building
              responsive, modern and user-friendly web applications using
              React.js, Vite and Tailwind CSS.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Along with frontend development, I have knowledge of Manual
              Testing, QA Testing, Test Case Writing and Bug Reporting. I enjoy
              improving software quality and creating seamless user experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <h4 className="text-cyan-400 font-semibold">Name</h4>
                <p className="mt-1">Harsh Rathore</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <h4 className="text-cyan-400 font-semibold">Role</h4>
                <p className="mt-1">Frontend Developer</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <h4 className="text-cyan-400 font-semibold">Experience</h4>
                <p className="mt-1">Fresher</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <h4 className="text-cyan-400 font-semibold">Location</h4>
                <p className="mt-1">India</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default About;