import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import {
  FiCode,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiBarChart2,
  FiCpu
} from "react-icons/fi";

import photo from "./assets/vishnu-priya.png";

import {
  profile,
  education,
  skillGroups,
  experience,
  projects,
  publications,
  certifications,
  achievements,
  membership
} from "./data";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Publications",
  "Certifications",
  "Achievements",
  "Contact"
];

const skillIcons = {
  Programming: FiCode,
  Frontend: FiMonitor,
  Analytics: FiBarChart2,
  "Tools & Concepts": FiCpu,
  "Programming Languages": FiCode,
  "Frontend Engineering": FiMonitor,
  "Backend Development": FiServer,
  "Database Engineering": FiDatabase,
  "Data Analytics": FiBarChart2,
  "Core CS & Tools": FiCpu
};

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <span className="heading-line" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [formState, formspreeSubmit] = useForm("mzdnkndn");

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach(item => revealObserver.observe(item));

    const updateActiveSection = () => {
      const navbarOffset = 140;
      const scrollPosition = window.scrollY + navbarOffset;

      let currentSection = "Home";

      navItems.forEach(item => {
        const section = document.getElementById(item.toLowerCase());

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item;
        }
      });

      setActive(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollTo = item => {
    const section = document.getElementById(item.toLowerCase());

    if (section) {
      setActive(item);

      const navbarHeight = 92;

      const targetPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <button
          className="brand"
          onClick={() => scrollTo("Home")}
        >
          {profile.shortName}
        </button>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(value => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(item => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <a
          className="top-github"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GITHUB ↗
        </a>
      </header>

      <main>
        <section
          id="home"
          className="hero"
        >
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="hero-copy reveal">
            <div className="availability">
              <span />
              {profile.availability}
            </div>

            <p className="hero-kicker">HELLO, I'M</p>

            <h1>
              VISHNU PRIYA
              <br />
              <span>CHINNASAMY</span>
            </h1>

            <h2>{profile.role}</h2>

            <p className="hero-description">
              {profile.tagline}
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollTo("Contact")}
              >
                Get In Touch
              </button>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vishnupriya.c.240307@gmail.com&su=Opportunity%20from%20Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="/Vishnu_Priya_Chinnasamy_Resume.pdf"
                download
              >
                Resume
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap reveal">
            <div className="photo-orbit orbit-one" />
            <div className="photo-orbit orbit-two" />

            <div className="hero-photo-card">
              <img
                src={photo}
                alt="Vishnu Priya Chinnasamy"
              />
            </div>

            <div className="photo-label">
              <strong>90.5%</strong>
              <span>Academic Aggregate</span>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section"
        >
          <SectionHeader
            eyebrow="PROFESSIONAL PROFILE"
            title="About Me"
          />

          <div className="about-grid">
            <div className="glass-panel biography reveal">
              <h3>Professional Biography</h3>

              <p>
                I am a final-year Computer Science with Data Analytics
                student interested in software development, data analysis,
                computer vision, and practical digital solutions.
              </p>

              <p>
                My technical foundation includes Python, SQL, React.js,
                JavaScript, HTML, CSS, Power BI, Excel, GitHub, and OpenCV.
                I enjoy turning real-world requirements into structured,
                user-friendly applications and meaningful insights.
              </p>

              <p>
                I am actively seeking opportunities where I can contribute,
                learn from experienced teams, and grow into a capable
                Software Developer or Data Analyst.
              </p>

              <div className="stat-row">
                <div>
                  <strong>90.5%</strong>
                  <span>B.Sc. Aggregate</span>
                </div>

                <div>
                  <strong>6</strong>
                  <span>Featured Projects</span>
                </div>

                <div>
                  <strong>2</strong>
                  <span>Publications</span>
                </div>
              </div>
            </div>

            <div className="timeline reveal">
              <h3>Academic Journey</h3>

              {education.map(item => (
                <article
                  className="timeline-card"
                  key={item.title}
                >
                  <div className="timeline-dot" />

                  <div className="timeline-top">
                    <span>{item.period}</span>
                    <strong>{item.score}</strong>
                  </div>

                  <h4>{item.title}</h4>

                  <p className="institution">
                    {item.institution}
                  </p>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="section alternate"
        >
          <SectionHeader
            eyebrow="TECHNICAL TOOLKIT"
            title="Skills & Capabilities"
          />

          <div className="skills-grid enhanced-skills-grid">
            {skillGroups.map(group => {
              const Icon = skillIcons[group.title] || FiCpu;

              return (
                <article
                  className="skill-card enhanced-skill-card reveal"
                  key={group.title}
                >
                  <div className="skill-card-heading">
                    <div className="skill-icon-box">
                      <Icon aria-hidden="true" />
                    </div>

                    <h3>{group.title}</h3>
                  </div>

                  <div className="tag-list skill-tags">
                    {group.skills.map(skill => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="experience"
          className="section"
        >
          <SectionHeader
            eyebrow="PRACTICAL JOURNEY"
            title="Experience & Work"
          />

          {experience.map(item => (
            <article
              className="experience-card reveal"
              key={item.title}
            >
              <div className="experience-icon">
                ⌘
              </div>

              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <p className="eyebrow">
                      {item.badge}
                    </p>

                    <h3>{item.title}</h3>

                    <p>{item.company}</p>
                  </div>

                  <span className="period-pill">
                    {item.period}
                  </span>
                </div>

                <div className="divider" />

                <p className="mini-label">
                  KEY CONTRIBUTIONS
                </p>

                <ul className="check-list">
                  {item.bullets.map(bullet => (
                    <li key={bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="tag-list compact">
                  {item.tech.map(tech => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="projects" className="section alternate">
  <SectionHeader
    eyebrow="SELECTED WORK"
    title="Featured Projects"
  />

  <div className="project-grid">
    {projects.map(project => {
      const hasGithub =
        Boolean(project.github) && project.github !== "#";

      const hasDemo =
        Boolean(project.demo) && project.demo !== "#";

      const isAIProject =
        project.category.includes("AI") ||
        project.title.includes("AI");

      return (
        <article
          className={`project-card reveal ${
            isAIProject ? "ai-project-card" : ""
          }`}
          key={project.title}
        >
          <div>
            <div className="project-card-top">
              <span className="category-pill">
                {project.category}
              </span>

              {isAIProject && (
                <span className="ai-project-badge">
                  AI PROJECT
                </span>
              )}
            </div>

            <h3>{project.title}</h3>

            <p className="project-subtitle">
              {project.subtitle}
            </p>

            <p>{project.description}</p>

            <p className="mini-label">
              KEY FEATURES
            </p>

            <ul className="check-list">
              {project.features.map(feature => (
                <li key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="tag-list compact">
              {project.tech.map(tech => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            {(hasGithub || hasDemo) && (
              <div className="project-links">
                {hasGithub && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository
                  </a>
                )}

                {hasDemo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
      );
    })}
  </div>
</section>

        <section
          id="publications"
          className="section"
        >
          <SectionHeader
            eyebrow="RESEARCH & WRITING"
            title="Publications"
          />

          <div className="publication-list">
            {publications.map(item => (
              <article
                className="publication-card reveal"
                key={item.title}
              >
                <div className="publication-icon">
                  ▣
                </div>

                <div>
                  <div className="publication-meta">
                    <span>{item.type}</span>
                    <span>{item.year}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p className="institution">
                    {item.organization}
                  </p>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="section alternate"
        >
          <SectionHeader
            eyebrow="VERIFIED CREDENTIALS"
            title="Certifications"
          />

          <div className="cert-grid">
            {certifications.map(certificate => (
              <article
                className={`cert-card reveal cert-${certificate.accent}`}
                key={certificate.title}
              >
                <div className="cert-top">
                  <span className="provider-pill">
                    {certificate.provider}
                  </span>

                  <span className="cert-year">
                    ◫ {certificate.year}
                  </span>
                </div>

                <div className="cert-title-row">
                  <span className="certificate-icon">
                    ♙
                  </span>

                  <div>
                    <h3>{certificate.title}</h3>

                    <p className="credential-type">
                      {certificate.type}
                    </p>
                  </div>
                </div>

                <p className="mini-label">
                  SKILLS PRACTICED
                </p>

                <div className="tag-list compact">
                  {certificate.skills.map(skill => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="cert-footer">
                  <span className="verified-badge">
                    Certificate Available
                  </span>

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify / View Certificate ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section membership-section">
          <SectionHeader
            eyebrow="PROFESSIONAL MEMBERSHIP"
            title="IEEE Membership"
          />

          <article className="membership-card reveal">
            <div className="membership-brand">
              <span className="ieee-name">
                IEEE
              </span>

              <span className="ieee-tagline">
                Advancing Technology for Humanity
              </span>
            </div>

            <div className="membership-content">
              <p className="eyebrow">
                {membership.subsection}
              </p>

              <h3>{membership.title}</h3>

              <p className="membership-description">
                {membership.description}
              </p>

              <div className="membership-information">
                <div>
                  <span>MEMBER NUMBER</span>
                  <strong>
                    {membership.memberNumber}
                  </strong>
                </div>

                <div>
                  <span>MEMBERSHIP YEAR</span>
                  <strong>
                    {membership.year}
                  </strong>
                </div>

                <div>
                  <span>VALIDITY</span>
                  <strong>
                    {membership.validity}
                  </strong>
                </div>
              </div>

              <div className="membership-actions">
                <a
                  href={membership.card}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Membership Card ↗
                </a>

                <a
                  href={membership.certificate}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Membership Certificate ↗
                </a>
              </div>
            </div>
          </article>
        </section>

        <section
          id="achievements"
          className="section"
        >
          <SectionHeader
            eyebrow="TRACK RECORD"
            title="Honors & Achievements"
          />

          <div className="achievement-grid">
            {achievements.map(item => (
              <article
                className="achievement-card reveal"
                key={item.title}
              >
                <span className="achievement-metric">
                  {item.metric}
                </span>

                <p className="mini-label">
                  RECOGNITION
                </p>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {item.file && (
                  <a
                    className="achievement-link"
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Achievement Certificate ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="section alternate"
        >
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Let's Collaborate"
          />

          <div className="contact-grid">
            <div className="contact-card reveal">
              <h3>Contact Information</h3>

              <p>
                I am open to internships, entry-level opportunities,
                project collaborations, and conversations related to
                software development and data analytics.
              </p>

              <div className="contact-detail">
                <span>LOCATION</span>
                <strong>
                  {profile.location}
                </strong>
              </div>

              <div className="contact-detail">
                <span>EMAIL</span>

                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>

              <div className="contact-links">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="/Vishnu_Priya_Chinnasamy_Resume.pdf"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>

            <form
              className="contact-form reveal"
              onSubmit={formspreeSubmit}
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <div className="form-row">
                <label>
                  FULL NAME

                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={formState.errors}
                  />
                </label>

                <label>
                  EMAIL ADDRESS

                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={formState.errors}
                  />
                </label>
              </div>

              <label>
                YOUR MESSAGE

                <textarea
                  name="message"
                  rows="8"
                  placeholder="Tell me about the opportunity or project..."
                  required
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={formState.errors}
                />
              </label>

              <button
                className="primary-button form-button"
                type="submit"
                disabled={formState.submitting}
              >
                {formState.submitting
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {formState.succeeded && (
                <div
                  className="form-status success"
                  role="status"
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <ValidationError errors={formState.errors} />
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>{profile.name}</strong>

          <p>
            Designed and developed as a modern personal portfolio.
          </p>
        </div>

        <button
          onClick={() => scrollTo("Home")}
          aria-label="Back to top"
        >
          ↑
        </button>
      </footer>
    </div>
  );
}

export default App;
