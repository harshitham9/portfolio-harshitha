import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList[stored === "dark" ? "add" : "remove"](
        "dark"
      );
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.classList[initial === "dark" ? "add" : "remove"](
        "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList[next === "dark" ? "add" : "remove"](
      "dark"
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 gap-3">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            {/* New logo icon */}
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-white flex items-center justify-center text-xs font-bold shadow-md">
              {"</>"}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">
                Harshitha <span className="text-indigo-500">Mattaparthi</span>
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Full Stack Developer · Irving, TX · Open to SDE / Java roles in US
              </p>
            </div>
          </div>

          {/* Nav + actions */}
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex gap-5 text-sm">
              <a href="#about" className="hover:text-indigo-500">
                About
              </a>
              <a href="#skills" className="hover:text-indigo-500">
                Skills
              </a>
              <a href="#experience" className="hover:text-indigo-500">
                Experience
              </a>
              <a href="#projects" className="hover:text-indigo-500">
                Projects
              </a>
              <a href="#education" className="hover:text-indigo-500">
                Education
              </a>
              <a href="#contact" className="hover:text-indigo-500">
                Contact
              </a>
            </nav>

            {/* Dark / Light switch */}
            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-slate-500 dark:text-slate-400">Dark</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="relative w-12 h-6 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center transition-colors duration-200"
                aria-label="Toggle dark / light mode"
              >
                <span
                  className={
                    "absolute top-[2px] h-5 w-5 rounded-full bg-white shadow-md flex items-center justify-center text-[10px] transition-transform duration-200 " +
                    (theme === "dark" ? "translate-x-1" : "translate-x-6")
                  }
                >
                  {theme === "dark" ? "🌙" : "☀️"}
                </span>
              </button>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                Light <span>☀️</span>
              </span>
            </div>

            {/* Resume button */}
            <a
              href="#resume"
              className="hidden sm:inline text-xs px-3 py-1 rounded-full border border-indigo-400/60 bg-white/60 dark:bg-transparent hover:bg-indigo-500 hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-16">
        {/* Hero */}
        <section className="py-16 flex flex-col gap-6" id="hero">
          <p className="text-xs inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/60 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 w-max">
            <span className="text-[10px]">🟢</span>
            Actively looking for opportunities on C2C, W2, Full-Time in the US
          </p>

          <p className="text-sm text-indigo-500 dark:text-indigo-300 font-medium">
            Full Stack Developer · Java · Python · Cloud · React
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Delivering reliable, cloud-ready applications using{" "}
            <span className="text-indigo-500 dark:text-indigo-400">
              Java/Spring Boot, Python/FastAPI, and modern JavaScript frameworks
            </span>
            .
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
            I&apos;m a Full Stack Developer based in Irving, TX, with experience
            across fintech, retail, and enterprise platforms for companies like
            Apple, Meijer, DXC Technology, and Paytm. I design and build
            scalable microservices, RESTful APIs, and responsive UIs, and I&apos;m
            open to Full-time SDE / Java roles across the US (C2C, W2, Full-Time).
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white shadow-md"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-sm hover:border-indigo-500"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/harshithamattaparthi/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full border border-sky-500/70 text-sm text-sky-700 dark:text-sky-300 hover:bg-sky-500/10 flex items-center gap-2"
            >
              <span>in</span>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-10 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-3">
            I&apos;m a results-driven Full Stack Developer with solid experience
            building microservices, RESTful APIs, and modern frontends. I&apos;ve
            contributed to large-scale systems for{" "}
            <span className="font-medium">
              Apple, Meijer, DXC Technology, and Paytm
            </span>
            , working on high-traffic, business-critical applications.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-3">
            My backend focus includes{" "}
            <span className="font-medium">
              Java, Spring Boot, Spring MVC, Spring Security, Hibernate, Struts,
              Spring Cloud, and FastAPI
            </span>{" "}
            with experience across relational and NoSQL databases such as
            Oracle, MySQL, PostgreSQL, MongoDB, Redis, and Cassandra.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            On the frontend, I&apos;ve built responsive UIs using{" "}
            <span className="font-medium">
              React, AngularJS/Angular, and Vue.js
            </span>
            , with strong foundations in JavaScript, HTML5, and CSS3. I enjoy
            collaborating with cross-functional teams, working in Agile
            environments, and taking features from concept through deployment.
          </p>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="py-10 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
            Highlighting core skills from my resume, spanning backend, frontend,
            cloud, and DevOps.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>💻</span> Languages
              </h4>
              <p>Java, Python, C/C++, PHP, SQL, JavaScript, HTML, CSS</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>☕</span> Core Java
              </h4>
              <p>OOP, Collections, Lambda, Streams, Concurrency</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>🧩</span> Frameworks
              </h4>
              <p>
                Spring Boot, Spring MVC, Spring Security, Hibernate, Struts,
                Spring Cloud, FastAPI
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>🎨</span> Frontend
              </h4>
              <p>AngularJS, Angular, React.js, Vue.js, JS Frameworks</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                HTML5, CSS3, Responsive UI
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>🌐</span> Web
              </h4>
              <p>JSP, Servlets, REST, WebSockets, HTML5, CSS3, jQuery</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>🗄️</span> Databases
              </h4>
              <p>Oracle, MySQL, PostgreSQL, MongoDB, Redis, Cassandra</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>🔗</span> ORM &amp; Tools
              </h4>
              <p>Hibernate, JPA</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Version Control &amp; Build: Git, Bitbucket, Maven, Gradle, Ant
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>✅</span> Testing
              </h4>
              <p>JUnit, Mockito, TestNG, TDD</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>☁️</span> Cloud &amp; DevOps
              </h4>
              <p className="mb-1">
                AWS (EC2, S3, Lambda, RDS, DynamoDB), Azure, GCP
              </p>
              <p className="mb-1">
                Jenkins, Docker, Kubernetes, Helm, Ansible, Terraform
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Monitoring: Prometheus, Grafana, ELK Stack
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold mb-2 text-indigo-500 dark:text-indigo-300 flex items-center gap-2">
                <span>🖥️</span> Operating Systems
              </h4>
              <p>Windows, Linux, macOS</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="py-10 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-semibold mb-6">Experience</h3>
          <div className="space-y-6 text-sm">
            {/* Apple */}
            <a
              href="https://www.apple.com"
              target="_blank"
              rel="noreferrer"
              className="block bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/60 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                  <span>🍎</span> Java Full Stack Developer · Apple
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  May 2024 – Present · Austin, TX
                </p>
              </div>
              <ul className="mt-2 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                <li>
                  Build responsive single-page applications using React, Redux,
                  HTML5, CSS3, and JavaScript.
                </li>
                <li>
                  Develop RESTful APIs and microservices using Spring Boot and
                  Spring MVC.
                </li>
                <li>
                  Deploy and monitor services with Docker and CI/CD pipelines
                  in cloud environments.
                </li>
              </ul>
            </a>

            {/* Meijer */}
            <a
              href="https://www.meijer.com"
              target="_blank"
              rel="noreferrer"
              className="block bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/60 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                  <span>🛒</span> Java Developer · Meijer
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Aug 2023 – Apr 2024 · Grand Rapids, MI
                </p>
              </div>
              <ul className="mt-2 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                <li>
                  Developed Spring Boot microservices, containerized with Docker,
                  and deployed to Kubernetes.
                </li>
                <li>
                  Integrated Kafka messaging and AWS services including DynamoDB
                  and Lambda.
                </li>
                <li>
                  Applied TDD/BDD with JUnit, Mockito, and Cucumber to enhance
                  code quality.
                </li>
              </ul>
            </a>

            {/* DXC Technology */}
            <a
              href="https://dxc.com"
              target="_blank"
              rel="noreferrer"
              className="block bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/60 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                  <span>🏢</span> Java Full Stack Developer · DXC Technology
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Jun 2021 – Jul 2022 · Hyderabad
                </p>
              </div>
              <ul className="mt-2 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                <li>
                  Built RESTful APIs and microservices with Spring Boot,
                  integrating SQL and MongoDB.
                </li>
                <li>
                  Engineered responsive UIs with AngularJS, HTML5, CSS3,
                  Bootstrap, and jQuery.
                </li>
                <li>
                  Collaborated in Agile teams to deliver scalable and maintainable
                  features.
                </li>
              </ul>
            </a>

            {/* Paytm */}
            <a
              href="https://paytm.com"
              target="_blank"
              rel="noreferrer"
              className="block bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/60 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                  <span>💳</span> Software Engineer · Paytm
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Feb 2020 – May 2021 · India
                </p>
              </div>
              <ul className="mt-2 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                <li>
                  Developed scalable backend services in Java for high-traffic
                  payment workflows.
                </li>
                <li>
                  Implemented secure RESTful APIs and integrated with cloud
                  storage and databases.
                </li>
                <li>
                  Partnered with cross-functional teams to improve performance
                  and reliability.
                </li>
              </ul>
            </a>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="py-10 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-semibold mb-4">Projects</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
            A selection of work that highlights my experience with full stack
            development, APIs, and cloud-native architectures.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {/* Portfolio project */}
            <a
              href="https://github.com/harshitham9/portfolio-harshitha"
              target="_blank"
              rel="noreferrer"
              className="block bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/60 cursor-pointer"
            >
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-300 mb-1 flex items-center gap-2">
                <span>🌐</span> Portfolio Platform (This Site)
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                Personal portfolio built with React, Vite, Tailwind CSS, GitHub
                Pages, and a Spring Boot API hosted on Render for contact form
                handling and demonstrating full stack integration.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tech: React, Vite, Tailwind, Spring Boot, Render, GitHub Pages
              </p>
            </a>

            {/* Backend API project */}
            <a
              href="https://github.com/harshitham9/portfolio-api"
              target="_blank"
              rel="noreferrer"
              className="block bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/60 cursor-pointer"
            >
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-300 mb-1 flex items-center gap-2">
                <span>🔗</span> Portfolio Backend API
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                Spring Boot REST API backing the portfolio contact form,
                designed as a microservice and deployable on platforms like
                Render, following best practices for configuration and logging.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tech: Java, Spring Boot, Maven, REST, Render
              </p>
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
            More projects on{" "}
            <a
              href="https://github.com/harshitham9"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        {/* Education */}
        <section
          id="education"
          className="py-10 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="space-y-4 text-sm">
            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex gap-3">
              <div className="mt-1 text-2xl">🎓</div>
              <div>
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-300">
                  Master of Science (M.S), Information Studies
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Trine University · Aug 2022 – Mar 2024 · Detroit
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  GPA: 3.8
                </p>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex gap-3">
              <div className="mt-1 text-2xl">🎓</div>
              <div>
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-300">
                  Bachelor of Technology (B.Tech), Computer Science Engineering
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  GIET · Jun 2017 – Jul 2021 · India
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  GPA: 3.1
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-10 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            I&apos;m actively open to{" "}
            <span className="font-medium">
              Full-time SDE / Java roles (C2C, W2, Full-Time)
            </span>{" "}
            across the US. Share a bit about your role or project, and I&apos;ll
            respond as soon as possible.
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
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm"
              required
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Resume */}
        <section
          id="resume"
          className="py-16 border-t border-slate-200 dark:border-slate-800 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
            Resume
          </h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
            Download my latest resume to review my experience, skills, and
            education as a{" "}
            <span className="text-indigo-600 dark:text-indigo-300 font-medium">
              Full Stack Developer
            </span>
            .
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="Harshitha_Mattaparthi_Resume.pdf"
              download
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow transition-transform duration-200 hover:scale-105"
            >
              📄 Download PDF
            </a>
            <a
              href="Harshitha_Mattaparthi_Resume.docx"
              download
              className="px-6 py-3 border border-indigo-400 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-600/10 rounded-full transition-transform duration-200 hover:scale-105"
            >
              📝 Download Word
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-500 dark:text-slate-500">
            Last updated: {new Date().getFullYear()}
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} Harshitha Mattaparthi ·{" "}
        <a
          href="mailto:harshithamattaparthi9@gmail.com"
          className="hover:text-indigo-500"
        >
          harshithamattaparthi9@gmail.com
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/harshithamattaparthi/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-500"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App;
