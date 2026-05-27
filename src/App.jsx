import { portfolioData } from './portfolioData'
import { useEffect, useState } from 'react'

function SvgIcon({ children, className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  )
}

function UserIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </SvgIcon>
  )
}

function CircuitIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
      <path d="M10 10h4v4h-4z" />
    </SvgIcon>
  )
}

function NetworkIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="5" cy="5" r="1.75" />
      <circle cx="19" cy="5" r="1.75" />
      <circle cx="12" cy="12" r="1.75" />
      <circle cx="5" cy="19" r="1.75" />
      <circle cx="19" cy="19" r="1.75" />
      <path d="M6.4 6.2 10.8 10.6M17.6 6.2 13.2 10.6M6.4 17.8 10.8 13.4M17.6 17.8 13.2 13.4" />
    </SvgIcon>
  )
}

function CpuIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M3 9h3M3 15h3M18 3v3M12 3v3M18 18v3M12 18v3M21 9h-3M21 15h-3" />
    </SvgIcon>
  )
}

function ServerIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect x="5" y="4" width="14" height="6" rx="1.5" />
      <rect x="5" y="14" width="14" height="6" rx="1.5" />
      <path d="M8 7h.01M8 17h.01M11 7h5M11 17h5" />
    </SvgIcon>
  )
}

function CodeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="M13 6 11 18" />
    </SvgIcon>
  )
}

function FolderCodeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3.5 7.5h6l1.8 2H20a1.5 1.5 0 0 1 1.5 1.5v6.5A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5V9a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="m10 11-2 2 2 2" />
      <path d="m14 11 2 2-2 2" />
    </SvgIcon>
  )
}

function ProjectNetworkIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect x="4.5" y="5.5" width="15" height="13" rx="2.5" />
      <path d="M7 16V9.5" />
      <path d="M11 16V7.5" />
      <path d="M15 16V11" />
      <path d="M7 12.5h4M11 9.5h4M11 13.5h4" />
      <circle cx="7" cy="12.5" r="0.9" />
      <circle cx="11" cy="9.5" r="0.9" />
      <circle cx="15" cy="13.5" r="0.9" />
    </SvgIcon>
  )
}

function ProjectNutritionIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 9.5c0-2.2 1.8-4 4-4s4 1.8 4 4v2.2c0 2.5-1.8 4.8-4 4.8s-4-2.3-4-4.8V9.5Z" />
      <path d="M8.5 14.6h7" />
      <path d="M12 4.8v-1.3" />
      <path d="M15.1 6.1l1-1" />
      <path d="M8.9 6.1l-1-1" />
      <path d="M16.3 11.1h1.4" />
      <path d="M6.3 11.1H5" />
      <path d="M12 8.2v6.9" />
    </SvgIcon>
  )
}

function BriefcaseIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <rect x="3.5" y="7" width="17" height="12.5" rx="2" />
      <path d="M3.5 12h17" />
    </SvgIcon>
  )
}

function SlidersIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 6h8" />
      <path d="M4 12h16" />
      <path d="M4 18h12" />
      <circle cx="16" cy="6" r="1.75" />
      <circle cx="8" cy="12" r="1.75" />
      <circle cx="18" cy="18" r="1.75" />
    </SvgIcon>
  )
}

function GraduationCapIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m3.5 9.5 8.5-4.5 8.5 4.5-8.5 4.5-8.5-4.5Z" />
      <path d="M7 11v3.5c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5V11" />
      <path d="M20.5 9.5V14" />
    </SvgIcon>
  )
}

function BadgeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 3.5 9.7 5.1 6.9 5.2 5.3 7.5 3.5 9.5 4.1 12 3.5 14.5 5.3 16.5 6.9 18.8 9.7 18.9 12 20.5l2.3-1.6 2.8-.1 1.6-2.3 1.8-2-.6-2.5.6-2.5-1.8-2-1.6-2.3-2.8-.1L12 3.5Z" />
      <path d="m8.5 12 2.1 2.1 4.9-4.9" />
    </SvgIcon>
  )
}

function MailIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </SvgIcon>
  )
}

function LinkedInIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M6.2 9.2V18" />
      <path d="M6.2 6.2v.1" />
      <path d="M10.2 18v-4.5c0-1.8 1-2.7 2.5-2.7 1.6 0 2.4 1 2.4 2.7V18" />
      <path d="M14.5 18v-4.2" />
      <path d="M6.2 12.6c0-2.1 1.3-3.4 3.2-3.4" />
    </SvgIcon>
  )
}

function GithubIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.4c-2.1.5-2.6-.9-2.6-.9-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.8 2.3.6.1-.5.3-.8.5-1-1.7-.2-3.5-.8-3.5-3.8 0-.8.3-1.5.8-2.1-.1-.2-.4-1 .1-2 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1 .2 1.8.1 2 .5.6.8 1.3.8 2.1 0 3-1.8 3.6-3.5 3.8.3.3.6.7.6 1.5v2.2c0 .2.1.5.5.4A8.5 8.5 0 0 0 12 3.5Z" />
    </SvgIcon>
  )
}

function ArrowRightIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </SvgIcon>
  )
}

function FileTextIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 7 20V5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M14 3.5V8h4.5" />
      <path d="M9.5 12h5M9.5 15h5M9.5 9h2.5" />
    </SvgIcon>
  )
}

function ExternalLinkIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 6H6.5A2.5 2.5 0 0 0 4 8.5v9A2.5 2.5 0 0 0 6.5 20h9A2.5 2.5 0 0 0 18 17.5V14" />
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
    </SvgIcon>
  )
}

function XIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </SvgIcon>
  )
}

function UpArrowIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 19V5" />
      <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
    </SvgIcon>
  )
}

function SectionTitle({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="section-head">
      {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
      <div className="section-head-row">
        {Icon ? (
          <span className="section-head-icon" aria-hidden="true">
            <Icon className="section-head-svg" />
          </span>
        ) : null}
        <h2>{title}</h2>
      </div>
      {description ? <p className="muted section-head-description">{description}</p> : null}
    </div>
  )
}

function computeAge(birthDateString) {
  const birth = new Date(birthDateString)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age -= 1
  }
  return age
}

function App() {
  const {
    profile,
    about,
    experience,
    projects,
    skills,
    education,
    certifications,
    contact,
  } = portfolioData

  const age = profile.birthDate ? computeAge(profile.birthDate) : profile.age

  const [modalOpen, setModalOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalBadgeId, setModalBadgeId] = useState('')
  const [modalWidth, setModalWidth] = useState(0)
  const [modalHeight, setModalHeight] = useState(0)
  const [modalDesc, setModalDesc] = useState('')
  const [modalIssuer, setModalIssuer] = useState('')
  const [modalIssuerUrl, setModalIssuerUrl] = useState('')
  const [modalCertSkills, setModalCertSkills] = useState([])
  const [showBackToTop, setShowBackToTop] = useState(false)
  const projectIcons = {
    network: ProjectNetworkIcon,
    nutrition: ProjectNutritionIcon,
  }
  useEffect(() => {
    if (!modalOpen || !modalBadgeId) {
      return undefined
    }

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js'
    script.setAttribute('data-credly-embed', 'true')
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [modalOpen, modalBadgeId])

  useEffect(() => {
    function updateBackToTopVisibility() {
      setShowBackToTop(window.scrollY > 180)
    }

    updateBackToTopVisibility()
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateBackToTopVisibility)
    }
  }, [])

  function openCertModal(cert) {
  
    setModalUrl(cert.publicUrl)
    setModalTitle(cert.name)
    setModalBadgeId(cert.embedBadgeId ?? '')
    setModalDesc(cert.details ?? '')
    setModalIssuer(cert.issuer ?? '')
    setModalIssuerUrl(cert.issuerUrl ?? '')
    setModalCertSkills(cert.skills ?? [])
    setModalWidth(cert.embedWidth ? Math.max(620, cert.embedWidth + 500) : 1100)
    setModalHeight(cert.embedHeight ? Math.max(620, cert.embedHeight + 320) : 820)
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    setModalUrl('')
    setModalTitle('')
    setModalBadgeId('')
    setModalWidth(0)
    setModalHeight(0)
    setModalDesc('')
    setModalIssuer('')
    setModalIssuerUrl('')
    setModalCertSkills([])
  }

  function openResume() {
    window.open(`${import.meta.env.BASE_URL}resume.html`, 'Resume_Mendoza', 'noopener,noreferrer')
  }

  const navItems = [
    { href: '#about', label: 'About', icon: UserIcon },
    { href: '#experience', label: 'Experience', icon: BriefcaseIcon },
    { href: '#projects', label: 'Projects', icon: FolderCodeIcon },
    { href: '#contact', label: 'Contact', icon: MailIcon },
  ]

  const checklistItems = [
    { label: 'Networking', icon: NetworkIcon },
    { label: 'Hardware Support', icon: CpuIcon },
    { label: 'IT Infrastructure', icon: ServerIcon },
    { label: 'Software Development', icon: CodeIcon },
  ]

  return (
    <div className="page-shell">
      <header className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <nav className="top-nav" aria-label="Main">
              {navItems.map(({ href, label, icon: Icon }) => (
                <a href={href} key={label}>
                  <Icon className="nav-link-icon" />
                  <span>{label}</span>
                </a>
              ))}
            </nav>

            <div className="hero-heading reveal">
              <p className="eyebrow">{profile.greeting ?? 'Hello!'}</p>
              <h1>{profile.intro ?? `I'm ${profile.name}`}</h1>
              <p className="role">{profile.role}</p>
            </div>

            <p className="hero-summary reveal">{profile.summary}</p>

            <div className="hero-cta reveal">
              <button type="button" className="btn btn-primary" onClick={openResume}>
                <FileTextIcon className="btn-icon" />
                View Resume
              </button>
              <a className="btn btn-secondary" href="#projects">
                <ArrowRightIcon className="btn-icon" />
                Explore Projects
              </a>
            </div>
          </div>

          <div className="hero-panel reveal">
            <div className="hero-panel-card">
              <span className="hero-card-badge">
                <CircuitIcon className="hero-badge-icon" />
                Network & Hardware
              </span>
              {profile.photo ? (
                <div className="hero-card-frame">
                  <img className="hero-avatar" src={profile.photo} alt={`${profile.name} photo`} />
                </div>
              ) : null}
              <ul className="hero-card-checklist">
                {checklistItems.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <span className="hero-card-checklist-icon" aria-hidden="true">
                      <Icon className="hero-card-checklist-svg" />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section reveal" id="about">
          <SectionTitle icon={UserIcon} title="About" />
          <div className="about-grid">
            <article className="about-summary">
              <p>
                Hi, I’m <strong>{profile.fullName}</strong>, {age} years old. I am a graduate of <strong>{about.degree}</strong> from <strong>{about.school}</strong> {about.summary}
              </p>
            </article>

            <div className="about-details">
              <article className="about-block">
                <h3>Tech Stack</h3>
                <ul className="about-chip-list">
                  {about.techStack?.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal" id="experience">
          <SectionTitle icon={BriefcaseIcon} title="Experience" />
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-head">
                  <h3>{item.role}</h3>
                  <p className="muted">{item.company}</p>
                </div>
                <p className="muted">{item.period}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="projects">
          <SectionTitle
            icon={FolderCodeIcon}
            title="Projects"
            description="Featured work in networking and software development"
          />
          <div className="project-grid">
            {projects.map((project) => (
              (() => {
                const ProjectIcon = projectIcons[project.icon] ?? CodeIcon

                return (
                  <article className="project-card" key={project.name}>
                    <div className="project-card-top">
                      <span className="project-card-icon" aria-hidden="true">
                        <ProjectIcon className="project-card-svg" />
                      </span>
                      <div className="project-card-copy">
                        <p className="project-card-label">{project.label}</p>
                        <h3>{project.name}</h3>
                      </div>
                    </div>
                    <p className="project-card-description">{project.description}</p>
                    <ul className="stack-list project-stack-list">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                    </ul>
                  </article>
                )
              })()
            ))}
          </div>
        </section>

        <section className="section reveal" id="skills">
          <SectionTitle icon={SlidersIcon} title="Skills" />
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-group" key={group.category}>
                <h3>
                  <span className="skill-group-icon" aria-hidden="true">
                    <SlidersIcon className="skill-group-svg" />
                  </span>
                  <span>{group.category}</span>
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="education">
          <SectionTitle title="Education" />
          {education.map((item) => (
            <article className="education-item" key={`${item.school}-${item.degree}`}>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <p className="muted">{item.period}</p>
            </article>
          ))}
        </section>

        <section className="section reveal" id="certifications">
          <SectionTitle title="Certifications" />
          {certifications.map((item) => (
            <article className="education-item" key={`${item.name}-${item.year}`}>
              <div className="cert-row">
                <div className="cert-copy">
                  <h3>{item.name}</h3>
                  <p className="muted">{item.year}</p>
                </div>
                {item.publicUrl ? (
                  <button
                    type="button"
                    className="btn cert-btn"
                    onClick={() => openCertModal(item)}
                  >
                    <ExternalLinkIcon className="btn-icon" />
                    View Certificate
                  </button>
                ) : null}
              </div>
              <p className="cert-details">{item.details}</p>
            </article>
          ))}
        </section>

        {modalOpen ? (
          <div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            onClick={closeModal}
          >
            <div
              className="modal"
              onClick={(event) => event.stopPropagation()}
              style={{
                '--modal-width': `${modalWidth}px`,
                '--modal-height': `${modalHeight}px`,
              }}
            >
              <header className="modal-header">
                <h3>{modalTitle}</h3>
                <div className="modal-actions">
                  <button className="btn modal-close-btn" onClick={closeModal} aria-label="Close certificate modal">
                    <XIcon className="modal-close-icon" />
                  </button>
                </div>
              </header>
              {/* description/issuer will render below the badge so users see the visual first */}
              <div className="modal-body modal-fallback">
                {modalBadgeId ? (
                  <div className="credly-embed-wrap">
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id={modalBadgeId}
                      data-share-badge-host="https://www.credly.com"
                    />
                    {/* description and issuer shown below badge */}
                    {modalDesc ? <p className="modal-desc">{modalDesc}</p> : null}
                    {modalIssuer ? (
                      <p className="modal-issuer">
                        Issued by{' '}
                        {modalIssuerUrl ? (
                          <a href={modalIssuerUrl} target="_blank" rel="noreferrer">
                            {modalIssuer}
                          </a>
                        ) : (
                          modalIssuer
                        )}
                      </p>
                    ) : null}
                    {modalCertSkills && modalCertSkills.length ? (
                      <div className="modal-skills">
                        {modalCertSkills.map((s) => (
                          <span key={s} className="cert-skill-chip">
                            {s}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <p className="embed-note">
                      If the badge doesn&apos;t appear, use the button below to open it on Credly.
                    </p>
                    <a className="btn cert-btn cert-bottom-link" href={modalUrl} target="_blank" rel="noreferrer">
                      Open on Credly
                    </a>
                  </div>
                ) : (
                  <div className="modal-card">
                    <p className="modal-label">Certificate preview</p>
                    <h4>Credly does not allow embedding in this page.</h4>
                    <p>
                      Use the button below to open the certificate on Credly in a new tab.
                      You can also close this modal and continue browsing the portfolio.
                    </p>
                    {modalDesc ? <p className="modal-desc">{modalDesc}</p> : null}
                    {modalIssuer ? (
                      <p className="modal-issuer">
                        Issued by{' '}
                        {modalIssuerUrl ? (
                          <a href={modalIssuerUrl} target="_blank" rel="noreferrer">
                            {modalIssuer}
                          </a>
                        ) : (
                          modalIssuer
                        )}
                      </p>
                    ) : null}
                    {modalCertSkills && modalCertSkills.length ? (
                      <div className="modal-skills">
                        {modalCertSkills.map((s) => (
                          <span key={s} className="cert-skill-chip">
                            {s}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <a className="btn btn-primary cert-bottom-link" href={modalUrl} target="_blank" rel="noreferrer">
                      Open on Credly
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}

        <section className="section contact reveal" id="contact">
          <div className="contact-shell">
            <div className="contact-copy">
              <p className="section-label">Get In Touch</p>
              <h2>Let’s Connect</h2>
              <p className="contact-description">
                Feel free to reach out for opportunities, collaborations, or just to connect.
              </p>
            </div>

            <div className="contact-cards">
              <a className="contact-card contact-card-primary" href={`mailto:${contact.email}`}>
                <span className="contact-card-icon" aria-hidden="true">
                  <MailIcon className="contact-card-svg" />
                </span>
                <div>
                  <p className="contact-card-title">Email</p>
                  <p className="contact-card-copy">{contact.email}</p>
                </div>
              </a>

              <div className="contact-card-grid">
                <a className="contact-card contact-card-secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
                  <span className="contact-card-icon" aria-hidden="true">
                    <LinkedInIcon className="contact-card-svg" />
                  </span>
                  <div>
                    <p className="contact-card-title">LinkedIn</p>
                    <p className="contact-card-copy">Connect on LinkedIn</p>
                  </div>
                </a>

                <a className="contact-card contact-card-secondary" href={contact.github} target="_blank" rel="noreferrer">
                  <span className="contact-card-icon" aria-hidden="true">
                    <GithubIcon className="contact-card-svg" />
                  </span>
                  <div>
                    <p className="contact-card-title">GitHub</p>
                    <p className="contact-card-copy">View projects and source</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          {new Date().getFullYear()} {profile.fullName}
        </p>
      </footer>

      {showBackToTop ? (
        <a className="back-to-top" href="#top" aria-label="Back to top">
          <UpArrowIcon className="back-to-top-icon" />
        </a>
      ) : null}
    </div>
  )
}

export default App