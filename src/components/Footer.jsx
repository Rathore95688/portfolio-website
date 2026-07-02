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

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">

          <a
            href="https://github.com/Rathore95688"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-rathore-772124294"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;