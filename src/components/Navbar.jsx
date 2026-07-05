import { useEffect, useState } from "react";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-2xl transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/70 backdrop-blur-2xl border border-cyan-500/20 shadow-[0_0_35px_rgba(34,211,238,.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-black tracking-wide hover:scale-105 transition-all duration-300"
        >
          <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,.7)]">
            Harsh
          </span>
          <span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="group relative text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                {link.name}

                <span className="absolute left-1/2 -bottom-2 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Resume Button */}
          <a
            href={resume}
            download
            className="hidden md:flex items-center px-6 py-2.5 rounded-xl bg-cyan-500 font-semibold text-white hover:scale-105 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,.5)] transition-all duration-300"
          >
            Resume
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-cyan-400 hover:rotate-90 transition-all duration-300"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mx-4 mb-4 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-cyan-500/20 overflow-hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="px-6 py-4">
              <a
                href={resume}
                download
                className="block text-center rounded-xl bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;