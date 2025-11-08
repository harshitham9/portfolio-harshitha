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
            <a href="#about" className="hover:text-indigo-400">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-400">
              Skills
            </a>
            <a href="#experience" className="hover:text-indigo-400">
              Experience
            </a>
            <a href="#projects" className="hover:text-indigo-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-400">
              Contact
            </a>
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
            I&apos;m a full stack developer experienced in designing and maintaining
            web applications using Java, Spring Boot, React, and modern cloud-native
            architectures.
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
            Full Stack Developer with experience in building microservices, RESTful
            APIs, and responsive frontends. I&apos;ve worked with Java, Spring Boot,
            React, Angular, AWS, Docker, and Kubernetes across enterprise environments.
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
              <h4 className="font-semibold mb-2 text-indigo-300">
                Backend &amp; Cloud
              </h4>
              <p>Spring Boot, Spring MVC, Spring Security, Microservices, AWS, Docker, Kubernetes</p>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-300">Frontend</h4>
              <p>React, Angular, HTML5, CSS3, Tailwind, JavaScript</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-10 border-t border-slate-800">
          <h3 className="text-xl font-semibold mb-6">Experience</h3>
          <div className="space-y-6 text-sm">
            {/* Apple */}
            <article className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h4 className="font-semibold text-indigo-300">
                  Java Full Stack Developer · Apple
                </h4>
                <p className="text-xs text-slate-400">
                  May 2024 – Present · Austin, TX
                </p>
              </div>
              <ul className="mt-2 text-slate-300 list-disc list-inside space-y-1">
                <li>
                  Build responsive single-page applications using React, Redux,
                  HTML5, CSS3, and JavaScript.
                </li>
                <li>
                  Develop RESTful APIs and microservices with Spring Boot and Spring MVC.
                </li>
                <li>
                  Deploy microservices on AWS using Docker and CI/CD pipelines.
                </li>
              </ul>
            </article>

            {/* Meijer */}
            <article className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h4 className="font-semibold text-indigo-300">
                  Java Developer · Meijer
                </h4>
                <p className="text-xs text-slate-400">
                  Aug 2023 – Apr 2024 · Grand Rapids, MI
                </p>
              </div>
              <ul className="mt-2 text-slate-300 list-disc list-inside space-y-1">
                <li>
                  Developed Spring Boot microservices, containerized with Docker, deployed
                  to Kubernetes.
                </li>
                <li>
                  Integrated Kafka messaging and AWS services such as DynamoDB and Lambda.
                </li>
                <li>
                  Applied TDD/BDD with JUnit, Mockito, and Cucumber to improve code quality.
                </li>
              </ul>
            </article>

            {/* DXC Technology */}
            <article className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h4 className="font-semibold text-indigo-300">
                  Java Full Stack Developer · DXC Technology
                </h4>
                <p className="text-xs text-slate-400">
                  Jun 2021 – Jul 2022 · Hyderabad
                </p>
              </div>
              <ul className="mt-2 text-slate-300 list-disc list-inside space-y-1">
                <li>
                  Built RESTful APIs and microservices with Spring Boot, integrating SQL and MongoDB.
                </li>
                <li>
                  Implemented responsive UIs using Angular, HTML5, CSS3, and Bootstrap.
                </li>
                <li>
                  Collaborated in Agile teams to deliver scalable and maintainable solutions.
                </li>
              </ul>
            </article>

            {/* Paytm */}
            <article className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h4 className="font-semibold text-indigo-300">
                  Software Engineer · Paytm
                </h4>
                <p className="text-xs text-slate-400">Feb 2020 – May 2021 · India</p>
              </div>
              <ul className="mt-2 text-slate-300 list-disc list-inside space-y-1">
                <li>
                  Developed scalable backend services in Java for high-traffic payment workflows.
                </li>
                <li>
                  Implemented secure RESTful APIs and integrated with cloud storage and databases.
                </li>
                <li>
                  Worked closely with cross-functional teams to improve performance and reliability.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-10 border-t border-slate-800">
          <h3 className="text-xl font-semibold mb-4">Projects</h3>
          <p className="text-slate-300 mb-4">
            A selection of projects that showcase my experience with full stack
            development, cloud, and modern frontend frameworks.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <article className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <h4 className="font-semibold text-indigo-300 mb-1">
                Portfolio Platform (This Site)
              </h4>
              <p className="text-slate-300 mb-2">
                Personal portfolio built with React, Vite, Tailwind CSS, GitHub Pages,
                and a Spring Boot API hosted on Render for contact form handling.
              </p>
              <p className="text-xs text-slate-400">
                Tech: React, Tailwind, Vite, Spring Boot, Render, GitHub Pages
              </p>
            </article>

            <article className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <h4 className="font-semibold text-indigo-300 mb-1">
                Microservices Backend
              </h4>
              <p className="text-slate-300 mb-2">
                Designed and implemented RESTful microservices with Spring Boot and
                Docker, integrating AWS services and messaging for scalable enterprise workloads.
              </p>
              <p className="text-xs text-slate-400">
                Tech: Java, Spring Boot, Docker, AWS, Kafka
              </p>
            </article>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            More projects on{" "}
            <a
              href="https://github.com/harshitham9"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        {/* Contact */}
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
                const res = await fetch(
                  "https://portfolio-api-c68z.onrender.com/api/contact",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  }
                );

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

        {/* Resume section */}
        <section id="resume" className="py-16 border-t border-slate-800 text-center">
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">Resume</h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            Download my latest resume to explore my experience and projects as a
            <span className="text-indigo-300 font-medium"> Full Stack Developer</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* no leading slash so it works on GitHub Pages */}
            <a
              href="Harshitha_Mattaparthi_Resume.pdf"
              download
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow transition-all duration-200 hover:scale-105"
            >
              📄 Download PDF
            </a>
            <a
              href="Harshitha_Mattaparthi_Resume.docx"
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
