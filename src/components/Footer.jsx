import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold">
              Harsh<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend Developer • QA Tester
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/Rathore95688"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-rathore-772124294"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-400">

          <p className="flex justify-center items-center gap-2 flex-wrap">
            Made with <FaHeart className="text-red-500" /> by
            <span className="text-cyan-400 font-semibold">
              Harsh Rathore
            </span>
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} Harsh Rathore. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;