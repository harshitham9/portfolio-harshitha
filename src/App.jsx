import { useEffect, useState, useRef } from "react";

// Reusable fade-in-on-scroll wrapper
function FadeInSection({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        `transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } ` + className
      }
    >
      {children}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  // Initialize theme on first load
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");

    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      root.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      root.classList.toggle("dark", initial === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    root.classList.toggle("dark", next === "dark");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 gap-3">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            {/* Logo icon */}
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-indigo-500/40 transform transition-transform duration-200 hover:scale-105">
              HM
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">
                Harshitha <span className="text-indigo-500">Mattaparthi</span>
              </p>
              <p className="text-[12px] text-slate-500 dark:text-slate-400">
                Full Stack Developer · Irving, TX · Open to SDE / Java roles
              </p>
            </div>
          </div>

          {/* Nav + actions */}
          <div className="flex items-center gap-3">
            <nav className="hidden lg:flex gap-5 text-sm text-slate-600 dark:text-slate-300">
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

            {/* Dark / Light switch as an actual switch */}
            <div className="hidden sm:flex items-center gap-2 text-[11px]">
              <span className="text-slate-500 dark:text-slate-400">
                <span> 🌙 </span> Dark
              </span>
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
              className="text-xs px-3 py-1 rounded-full border border-indigo-400/60 bg-white/60 dark:bg-transparent hover:bg-indigo-500 hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* HERO – full screen height, animated background */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800"
      >
        {/* Soft background decoration (with gentle pulse) */}
        <div className="pointer-events-none absolute -top-32 -right-10 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-16 min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
          {/* Left: main text */}
          <FadeInSection className="flex-1 relative z-10 lg:self-center">
            <p className="text-xs inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/60 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-200 w-max mb-4">
              <span className="text-[12px]"> 🟢 </span>
              Actively looking · C2C · W2 · Full-Time · US
            </p>

            <p className="text-sm text-indigo-600 dark:text-indigo-300 font-medium mb-2">
              Full Stack Developer | Java · Spring · Cloud · React
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Building reliable,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400">
                cloud-ready applications
              </span>{" "}
              with Java/Spring &amp; modern web tech.
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mb-6 text-sm md:text-base">
              I&apos;m a Full Stack Developer based in Irving, TX, with
              experience across fintech, retail, and enterprise platforms for
              companies like Apple, Meijer, DXC Technology, and Paytm. I focus
              on scalable microservices, RESTful APIs, and clean, responsive UIs.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white shadow-lg shadow-indigo-500/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-sm hover:border-indigo-500 hover:bg-slate-100/70 dark:hover:bg-slate-900/70"
              >
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/harshithamattaparthi/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full border border-sky-500/70 text-sm text-sky-700 dark:text-sky-300 hover:bg-sky-500/10 flex items-center gap-2"
              >
                <span className="font-bold text-base">in</span>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </FadeInSection>

          {/* Right: stats card */}
          <FadeInSection className="flex-1 max-w-lg w-full relative z-10">
            <div className="bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xl shadow-black/10 dark:shadow-black/40 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-3">
                Snapshot
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                    Experience
                  </p>
                  <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                    4+ Years
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Full Stack / Java
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                    Current
                  </p>
                  <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                    Apple
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Java Full Stack Developer
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                    Backend
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Java, Spring Boot
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Microservices, REST APIs
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                    Frontend
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    React, Angular
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Responsive UI, SPAs
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 md:px-10 pb-16 space-y-12">
        {/* About */}
        <section
          id="about"
          className="pt-12 border-b border-slate-200 dark:border-slate-800 pb-8"
        >
          <FadeInSection>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-indigo-500 text-lg">👋</span> About
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-3 text-sm md:text-base">
              I&apos;m a results-driven Full Stack Developer with experience
              building microservices, RESTful APIs, and modern frontends. I&apos;ve
              contributed to large-scale systems for{" "}
              <span className="font-medium">
                Apple, Meijer, DXC Technology, and Paytm
              </span>
              , working on high-traffic, business-critical platforms.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-3 text-sm md:text-base">
              My backend focus includes{" "}
              <span className="font-medium">
                Java, Spring Boot, Spring MVC, Spring Security, Hibernate,
                Struts, Spring Cloud, and FastAPI
              </span>{" "}
              with experience across Oracle, MySQL, PostgreSQL, MongoDB, Redis,
              and Cassandra.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
              On the frontend, I&apos;ve built responsive UIs using{" "}
              <span className="font-medium">
                React, AngularJS/Angular, and Vue.js
              </span>{" "}
              with strong foundations in JavaScript, HTML5, and CSS3. I enjoy
              collaborating in Agile teams and owning features from concept to
              deployment.
            </p>
          </FadeInSection>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="border-b border-slate-200 dark:border-slate-800 pb-8 scroll-mt-20"
        >
          <FadeInSection>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-indigo-500 text-lg">🧠</span> Technical
              Skills
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
              Core technical strengths across backend, frontend, cloud, and
              DevOps.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {[
                {
                  icon: "💻",
                  title: "Languages",
                  body: "Java, Python, C/C++, PHP, SQL, JavaScript, HTML, CSS",
                },
                {
                  icon: "☕",
                  title: "Core Java",
                  body: "OOP, Collections, Lambda, Streams, Concurrency",
                },
                {
                  icon: "🧩",
                  title: "Frameworks",
                  body: "Spring Boot, Spring MVC, Spring Security, Hibernate, Struts, Spring Cloud, FastAPI",
                },
                {
                  icon: "🎨",
                  title: "Frontend",
                  body: "AngularJS, Angular, React.js, Vue.js, HTML5, CSS3, Responsive UI",
                },
                {
                  icon: "🌐",
                  title: "Web & APIs",
                  body: "JSP, Servlets, REST, WebSockets, jQuery",
                },
                {
                  icon: "🗄️",
                  title: "Databases",
                  body: "Oracle, MySQL, PostgreSQL, MongoDB, Redis, Cassandra",
                },
                {
                  icon: "🔗",
                  title: "ORM & Tools",
                  body: "Hibernate, JPA, Git, Bitbucket, Maven, Gradle, Ant",
                },
                {
                  icon: "✅",
                  title: "Testing",
                  body: "JUnit, Mockito, TestNG, TDD",
                },
                {
                  icon: "☁️",
                  title: "Cloud & DevOps",
                  body: "AWS, Azure, GCP · Jenkins, Docker, Kubernetes, Helm, Ansible, Terraform · Prometheus, Grafana, ELK",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white/80 dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-200"
                >
                  <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                    <span>{card.icon}</span> {card.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-xs md:text-[13px]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="border-b border-slate-200 dark:border-slate-800 pb-8 scroll-mt-20"
        >
          <FadeInSection>
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-indigo-500 text-lg">💼</span> Experience
            </h2>
            <div className="space-y-6 text-sm">
              {/* Apple */}
              <a
                href="https://www.apple.com"
                target="_blank"
                rel="noreferrer"
                className="block bg-white/80 dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                    <span>🍎</span> Java Full Stack Developer · Apple
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    May 2024 – Present | Austin, TX
                  </p>
                </div>
                <ul className="mt-2 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                  <li>
                    Build responsive SPAs with React, Redux, HTML5, CSS3, and
                    JavaScript.
                  </li>
                  <li>
                    Develop RESTful APIs and microservices using Spring Boot and
                    Spring MVC.
                  </li>
                  <li>
                    Deploy and monitor services with Docker and CI/CD in cloud
                    environments.
                  </li>
                </ul>
              </a>

              {/* Meijer */}
              <a
                href="https://www.meijer.com"
                target="_blank"
                rel="noreferrer"
                className="block bg-white/80 dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                    <span>🛒</span> Java Developer · Meijer
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Aug 2023 – Apr 2024 | Grand Rapids, MI
                  </p>
                </div>
                <ul className="mt-2 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                  <li>
                    Developed Spring Boot microservices, containerized with
                    Docker and deployed to Kubernetes.
                  </li>
                  <li>
                    Integrated Kafka messaging and AWS services like DynamoDB
                    and Lambda.
                  </li>
                  <li>
                    Used TDD/BDD with JUnit, Mockito, and Cucumber to improve
                    code quality.
                  </li>
                </ul>
              </a>

              {/* DXC */}
              <a
                href="https://dxc.com"
                target="_blank"
                rel="noreferrer"
                className="block bg-white/80 dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                    <span>🏢</span> Java Full Stack Developer · DXC Technology
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Jun 2021 – Jul 2022 | Hyderabad
                  </p>
                </div>
                <ul className="mt-2 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                  <li>
                    Built RESTful APIs and microservices with Spring Boot,
                    integrating SQL and MongoDB.
                  </li>
                  <li>
                    Engineered UIs with AngularJS, HTML5, CSS3, Bootstrap, and
                    jQuery.
                  </li>
                  <li>
                    Delivered scalable features in Agile teams.
                  </li>
                </ul>
              </a>

              {/* Paytm */}
              <a
                href="https://paytm.com"
                target="_blank"
                rel="noreferrer"
                className="block bg-white/80 dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                    <span>💳</span> Software Engineer · Paytm
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Feb 2020 – May 2021 | India
                  </p>
                </div>
                <ul className="mt-2 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                  <li>
                    Developed backend services in Java for high-traffic payment
                    workflows.
                  </li>
                  <li>
                    Implemented secure RESTful APIs and integrated with
                    databases and storage.
                  </li>
                  <li>
                    Improved performance and reliability with cross-functional
                    teams.
                  </li>
                </ul>
              </a>
            </div>
          </FadeInSection>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-b border-slate-200 dark:border-slate-800 pb-8 scroll-mt-20"
        >
          <FadeInSection>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-indigo-500 text-lg">📂</span> Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
              Work that highlights full stack development, API design, and cloud
              deployment.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <a
                href="https://github.com/harshitham9/portfolio-harshitha"
                target="_blank"
                rel="noreferrer"
                className="block bg-white/80 dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer"
              >
                <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 mb-1 flex items-center gap-2">
                  <span>🌐</span> Portfolio Platform (This Site)
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Personal portfolio built with React, Vite, Tailwind CSS,
                  GitHub Pages, and a Spring Boot API hosted on Render for the
                  contact form, demonstrating end-to-end integration.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Tech: React, Vite, Tailwind, Spring Boot, Render, GitHub
                  Pages
                </p>
              </a>

              <a
                href="https://github.com/harshitham9/portfolio-api"
                target="_blank"
                rel="noreferrer"
                className="block bg-white/80 dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer"
              >
                <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 mb-1 flex items-center gap-2">
                  <span>🔗</span> Portfolio Backend API
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Spring Boot REST API backing the portfolio contact form,
                  container-ready and deployable to platforms like Render, built
                  with clean layering and validation.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Tech: Java, Spring Boot, Maven, REST, Render
                </p>
              </a>
            </div>
          </FadeInSection>
        </section>

        {/* Education */}
        <section
          id="education"
          className="border-b border-slate-200 dark:border-slate-800 pb-8 scroll-mt-20"
        >
          <FadeInSection>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-indigo-500 text-lg">🎓</span> Education
            </h2>
            <div className="space-y-4 text-sm">
              <div className="bg-white/80 dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex gap-3">
                <div className="mt-1 text-2xl">🎓</div>
                <div>
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-300">
                    M.S. in Information Studies
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Trine University · Aug 2022 – Mar 2024 · Detroit
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    GPA: 3.8
                  </p>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex gap-3">
                <div className="mt-1 text-2xl">🎓</div>
                <div>
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-300">
                    B.Tech in Computer Science Engineering
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    GIET · Jun 2017 – Jul 2021 · India
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    GPA: 3.1
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-b border-slate-200 dark:border-slate-800 pb-8 scroll-mt-20"
        >
          <FadeInSection>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-indigo-500 text-lg">✉️</span> Contact
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm md:text-base">
              I&apos;m actively open to{" "}
              <span className="font-medium">
                Full-time SDE / Java roles (C2C, W2, Full-Time)
              </span>{" "}
              across the US. Share a bit about the role or project, and I&apos;ll
              get back to you soon.
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
                className="px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white shadow-lg shadow-indigo-500/30"
              >
                Send Message
              </button>
            </form>
          </FadeInSection>
        </section>

        {/* Resume */}
        <section id="resume" className="pt-10 scroll-mt-20 text-center">
          <FadeInSection>
            <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
              Resume
            </h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-xl mx-auto mb-6 text-sm md:text-base">
              Download my latest resume to review my experience, skills, and
              education as a Full Stack Developer.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="Harshitha_Mattaparthi_Resume.pdf"
                download
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg shadow-indigo-500/30 transition-transform duration-200 hover:scale-105"
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
          </FadeInSection>
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
