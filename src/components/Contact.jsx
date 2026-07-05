import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const MailIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const WhatsappIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.51 1.36 5.03L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.93A9.86 9.86 0 0 0 12.04 2Zm5.79 14.19c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.41-.71-2.89-1.15-4.73-4.1-4.87-4.29-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.38.26-.28.57-.35.76-.35h.55c.18 0 .42-.03.65.5.24.55.81 1.9.88 2.04.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.26.14.44.2.5.31.07.12.07.65-.17 1.33Z" />
  </svg>
);

const socials = [
  { icon: MailIcon, href: "mailto:rathoreharsh641@gmail.com", label: "Email" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/harsh-rathore-772124294", label: "LinkedIn" }, // TODO: apna LinkedIn URL daalna
  { icon: GithubIcon, href: "https://github.com/Rathore95688", label: "GitHub" },
  { icon: WhatsappIcon, href: "https://wa.me/919568851957", label: "WhatsApp" },
];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder-gray-500 outline-none backdrop-blur-sm transition focus:border-cyan-400/60 focus:bg-white/[0.07] focus:shadow-lg focus:shadow-cyan-500/10";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_wr437vs",
        "template_8yoklaf",
        form.current,
        "bL9ZiYOKPNfasa0cU"
      )
      .then(() => {
        setMessage("✅ Message sent successfully!");
        form.current.reset();
        setLoading(false);

        setTimeout(() => {
          setMessage("");
        }, 3000);
      })
      .catch(() => {
        setMessage("❌ Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>
        <h2 className="mb-16 text-center text-4xl font-bold md:text-6xl">
          Let's Build{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Together.
          </span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div className="opacity-100 animate-fade-up">
            <p className="mb-8 max-w-md leading-7 text-gray-400">
              Have an idea, project, or opportunity in mind? Send me a
              message and let's create something clean, tested, and
              impactful together.
            </p>

            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  title={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="opacity-100 animate-fade-up space-y-5 rounded-3xl border border-white/10 bg-gray-900/70 p-8 backdrop-blur-xl"
            style={{ animationDelay: "150ms" }}
          >
            <h3 className="text-xl font-semibold text-white">
              Send Message
            </h3>

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className={inputClasses}
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className={inputClasses}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              required
              className={inputClasses}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-8 py-3 font-semibold text-gray-900 shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-400/40 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p className="font-medium text-cyan-400">{message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;