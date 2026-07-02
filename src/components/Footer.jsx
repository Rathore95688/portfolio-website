import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-cyan-400">
          Harsh Rathore
        </h2>

        {/* Copyright */}
        <p className="mt-4 md:mt-0 text-center">
          © {new Date().getFullYear()} Harsh Rathore. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-4 md:mt-0">

          <a
            href="https://github.com/Rathore95688"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-rathore-772124294"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;