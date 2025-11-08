function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-semibold tracking-tight">
            Harshitha <span className="text-indigo-400">Mattaparthi</span>
          </h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#skills" className="hover:text-indigo-400">Skills</a>
            <a href="#experience" className="hover:text-indigo-400">Experience</a>
            <a href="#projects" className="hover:text-indigo-400">Projects</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </nav>
          <a
            href="#resume"
            className="text-sm px-3 py-1 rounded-full border border-indigo-400/50 hover:bg-indigo-500 hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-16">
        {/* Hero */}
        <section className="py-16 flex flex-col gap-6" id="hero">
          <p className="text-sm text-indigo-300">Full Stack Developer</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Building scalable web applications with{" "}
            <span className="text-indigo-400">Java, Spring Boot, and React</span>.
          </h2>
          <p className="text-slate-300 max-w-2xl">
            I&apos;m a full stack developer experienced in designing and maintaining web applications
            using Java, Spring Boot, React, and modern cloud-native architectures.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-sm font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-slate-600 text-sm hover:border-indigo-400"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-10 border-t border-slate-800">
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p className="text-slate-300">
            Full Stack Developer with experience in building microservices, RESTful APIs, and
            responsive frontends. I&apos;ve worked with Java, Spring Boot, React, Angular, AWS,
            Docker, and Kubernetes across enterprise environments.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="py-10 border-t border-slate-800">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-300">Languages</h4>
              <p>Java, Python, JavaScript, SQL, C/C++, PHP</p>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-300">Backend & Cloud</h4>
              <p>Spring Boot, Spring MVC, Spring Security, Microservices, AWS, Docker, Kubernetes</p>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-300">Frontend</h4>
              <p>React, Angular, HTML5, CSS3, Tailwind, JavaScript</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10 border-t border-slate-800">
  <h3 className="text-xl font-semibold mb-4">Contact</h3>
  <p className="text-slate-300 mb-4">
    Want to collaborate or have a role that fits my profile? Send me a message.
  </p>

  <form
    className="grid gap-4 max-w-md"
    onSubmit={async (e) => {
      e.preventDefault();
      const form = e.target;
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };

      try {
        const res = await fetch("https://portfolio-api-c68z.onrender.com/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          alert("Message sent successfully!");
          form.reset();
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (err) {
        console.error(err);
        alert("Network error. Please try again.");
      }
    }}
  >
    <input
      name="name"
      type="text"
      placeholder="Your name"
      className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm"
      required
    />
    <input
      name="email"
      type="email"
      placeholder="Your email"
      className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm"
      required
    />
    <textarea
      name="message"
      placeholder="Your message"
      rows="4"
      className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm"
      required
    ></textarea>
    <button
      type="submit"
      className="px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-sm font-medium"
    >
      Send Message
    </button>
  </form>
</section>

        {/* Experience, Projects, Contact... */}
        {/* We'll fill these later */}

        {/* Resume section */}
<section id="resume" className="py-16 border-t border-slate-800 text-center">
  <h3 className="text-2xl font-bold mb-4 text-indigo-400">Resume</h3>
  <p className="text-slate-300 max-w-xl mx-auto mb-6">
    Download my latest resume to explore my experience and projects as a
    <span className="text-indigo-300 font-medium"> Full Stack Developer</span>.
  </p>
  
  <div className="flex flex-wrap justify-center gap-4">
    <a
      href="/Harshitha_Mattaparthi_Resume.pdf"
      download
      className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow transition-all duration-200 hover:scale-105"
    >
      📄 Download PDF
    </a>
    <a
      href="/Harshitha_Mattaparthi_Resume.docx"
      download
      className="px-6 py-3 border border-indigo-400 text-indigo-300 hover:bg-indigo-600/20 rounded-full transition-all duration-200 hover:scale-105"
    >
      📝 Download Word
    </a>
  </div>

  <p className="mt-8 text-xs text-slate-500">
    Last updated: {new Date().getFullYear()}
  </p>
</section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Harshitha Mattaparthi ·{" "}
        <a
          href="mailto:harshithamattaparthi9@gmail.com"
          className="hover:text-indigo-400"
        >
          harshithamattaparthi9@gmail.com
        </a>
      </footer>
    </div>
  );
}

export default App;
