const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Let's Work Together
            </h3>

            <p className="text-gray-400 mb-8 leading-7">
              I'm looking for Frontend Developer, Web Developer, QA Tester and Software
              Testing opportunities. Feel free to contact me.
            </p>

            <div className="space-y-4">
              <a
  href="mailto:rathoreharsh641@gmail.com"
  className="flex items-center gap-2 hover:text-cyan-400 transition duration-300"
>
  📧 <strong>Email:</strong> rathoreharsh641@gmail.com
              </a>

              <p>
                📱 <strong>Phone:</strong> +91 9568851957
              </p>

              <p>
                📍 <strong>Location:</strong> India
              </p>
            </div>
          </div>

          {/* Right */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-800 outline-none border border-gray-700 focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-800 outline-none border border-gray-700 focus:border-cyan-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-gray-800 outline-none border border-gray-700 focus:border-cyan-400"
            ></textarea>

            <button
              className="bg-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;