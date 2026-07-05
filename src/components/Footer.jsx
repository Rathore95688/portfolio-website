import { FaGithub, FaLinkedin, FaHeart, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gray-950 py-12 text-white">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Harsh<span className="text-cyan-400"></span>
            </h2>
            <p className="mt-2 text-gray-400">
              Frontend Developer • QA Tester
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Rathore95688"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-gray-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-rathore-772124294"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-gray-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:rathoreharsh641@gmail.com"
              title="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-gray-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-400">
          <p className="flex flex-wrap items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> by
            <span className="font-semibold text-cyan-400">
              Harsh Rathore
            </span>
          </p>

          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Harsh Rathore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;