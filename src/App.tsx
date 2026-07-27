import { useState, useEffect, useRef, FormEvent } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Get Involved', href: '#involve' },
  { label: 'Contact', href: '#contact' },
]

const PROGRAMS = [
  {
    icon: '📚',
    title: 'Educational Materials',
    desc: 'We distribute books, notebooks, stationery, and study kits to children who cannot afford basic learning supplies.',
    bg: '#FEF3C7',
    color: '#B45309',
  },
  {
    icon: '💻',
    title: 'Computer Access',
    desc: 'We set up computer labs and donate refurbished devices so underprivileged children can build digital literacy skills.',
    bg: '#E6F4F2',
    color: '#0F766E',
  },
  {
    icon: '🎓',
    title: 'Mentoring & Tutoring',
    desc: 'Volunteers run free tuition sessions and mentor children to keep them engaged and confident in their studies.',
    bg: '#FCE7F3',
    color: '#BE185D',
  },
]

const IMPACT_STATS = [
  { num: '850+', label: 'Children Supported' },
  { num: '120+', label: 'Computers Donated' },
  { num: '5,000+', label: 'Books Distributed' },
  { num: '40+', label: 'Volunteer Mentors' },
]

const GALLERY = [
  { src: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Distribution Drive' },
  { src: 'https://images.pexels.com/photos/8422981/pexels-photo-8422981.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Learning Session' },
  { src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Computer Lab Setup' },
  { src: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Book Donation' },
  { src: 'https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Mentoring Workshop' },
  { src: 'https://images.pexels.com/photos/8617743/pexels-photo-8617743.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Community Outreach' },
]

const INVOLVE = [
  {
    icon: '🤝',
    title: 'Volunteer',
    desc: 'Give your time as a mentor, tutor, or help organize donation drives in your community.',
  },
  {
    icon: '🎁',
    title: 'Donate Materials',
    desc: 'Contribute books, stationery, or working computers that we will deliver to children in need.',
  },
  {
    icon: '💝',
    title: 'Sponsor a Child',
    desc: 'Fund a child\'s annual educational supplies and keep them learning all year round.',
  },
]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  useReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormSent(true)
    formRef.current?.reset()
    setTimeout(() => setFormSent(false), 5000)
  }

  return (
    <>
      {/* Navbar */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <div className="brand-mark">S</div>
            <div>
              <div className="brand-name">Sparsh Setu</div>
              <div className="brand-tag">Bridging Lives</div>
            </div>
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="nav-cta">
            <a href="#involve" className="btn btn-ghost">Volunteer</a>
            <a href="#involve" className="btn btn-primary">Donate Now</a>
            <button
              className={`menu-toggle ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#involve" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Donate Now</a>
      </div>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-text reveal">
            <span className="hero-eyebrow">Pimple Gurav, Pune · Est. working locally</span>
            <h1>
              Bridging the gap between <span className="accent">children in need</span> and the education they deserve.
            </h1>
            <p className="hero-sub">
              Sparsh Setu is a grassroots NGO dedicated to helping underprivileged children
              access education through donated books, computers, and mentoring — because every
              child deserves a chance to learn.
            </p>
            <div className="hero-actions">
              <a href="#involve" className="btn btn-primary">Support a Child</a>
              <a href="#about" className="btn btn-ghost">Learn More</a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">850+</div>
                <div className="hero-stat-label">Children Reached</div>
              </div>
              <div>
                <div className="hero-stat-num">120+</div>
                <div className="hero-stat-label">Computers Donated</div>
              </div>
              <div>
                <div className="hero-stat-num">15+</div>
                <div className="hero-stat-label">Communities Served</div>
              </div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="hero-img">
              <img
                src="https://images.pexels.com/photos/8595664/pexels-photo-8595664.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Children learning together"
                loading="eager"
              />
            </div>
            <div className="hero-badge top">
              <div className="badge-icon" style={{ background: '#FEF3C7' }}>📚</div>
              <div className="badge-text">
                <strong>5,000+ books</strong>
                <span>distributed to children</span>
              </div>
            </div>
            <div className="hero-badge bottom">
              <div className="badge-icon" style={{ background: '#E6F4F2' }}>💻</div>
              <div className="badge-text">
                <strong>120+ computers</strong>
                <span>placed in community labs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-img reveal">
            <img
              src="https://images.pexels.com/photos/8422981/pexels-photo-8422981.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Volunteers teaching children"
              loading="lazy"
            />
          </div>
          <div className="about-content reveal">
            <span className="section-eyebrow">Who We Are</span>
            <h2>A bridge between compassion and opportunity</h2>
            <p>
              "Sparsh Setu" means "a bridge of touch" — a connection that brings people who care
              together with children who need support. Based in Pimple Gurav, Pune, we work at the
              grassroots level to identify children who are missing out on education because of
              financial hardship.
            </p>
            <p>
              We believe education is the most lasting way to change a life. By supplying books,
              computers, and mentoring, we help children stay in school, build confidence, and
              imagine futures they might otherwise never reach.
            </p>
            <ul className="about-points">
              <li>
                <div className="point-check">✓</div>
                <div>
                  <strong>Education for every child</strong>
                  <span>No child should miss school because they can't afford a notebook.</span>
                </div>
              </li>
              <li>
                <div className="point-check">✓</div>
                <div>
                  <strong>Digital inclusion</strong>
                  <span>Computers open doors to skills and opportunities beyond the classroom.</span>
                </div>
              </li>
              <li>
                <div className="point-check">✓</div>
                <div>
                  <strong>Community-driven</strong>
                  <span>Volunteers and donors from Pune power everything we do.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-eyebrow">What We Do</span>
            <h2>Our Programs</h2>
            <p>Three focused initiatives that put learning directly into children's hands.</p>
          </div>
          <div className="programs-grid">
            {PROGRAMS.map((p) => (
              <div className="program-card reveal" key={p.title}>
                <div className="program-icon" style={{ background: p.bg, color: p.color }}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="impact">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-eyebrow">Our Impact</span>
            <h2>Numbers that mean changed lives</h2>
            <p>Every figure below represents a child who now has a better chance to learn and grow.</p>
          </div>
          <div className="impact-grid">
            {IMPACT_STATS.map((s) => (
              <div className="impact-card reveal" key={s.label}>
                <div className="impact-num">{s.num}</div>
                <div className="impact-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-eyebrow">Moments</span>
            <h2>From Our Work</h2>
            <p>A glimpse of the drives, sessions, and smiles along the way.</p>
          </div>
          <div className="gallery-grid">
            {GALLERY.map((g) => (
              <div className="gallery-item reveal" key={g.src}>
                <img src={g.src} alt={g.caption} loading="lazy" />
                <div className="gallery-overlay">
                  <span>{g.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="involve" className="involve">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-eyebrow">Get Involved</span>
            <h2>How You Can Help</h2>
            <p>Every contribution — time, materials, or support — reaches a child who needs it.</p>
          </div>
          <div className="involve-grid">
            {INVOLVE.map((i) => (
              <div className="involve-card reveal" key={i.title}>
                <div className="involve-icon">{i.icon}</div>
                <h3>{i.title}</h3>
                <p>{i.desc}</p>
                <a href="#contact" className="btn btn-primary">Get in Touch</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <span className="section-eyebrow">Contact Us</span>
            <h2>Let's connect</h2>
            <p>
              Want to volunteer, donate, or partner with us? Reach out — we'd love to hear from you.
            </p>
            <ul className="contact-list">
              <li>
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <span>Pimple Gurav, Pune – 411027, Maharashtra, India</span>
                </div>
              </li>
              <li>
                <div className="contact-icon">📞</div>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:07620040230">07620040230</a>
                </div>
              </li>
              <li>
                <div className="contact-icon">✉️</div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:hello@sparshsetu.org">hello@sparshsetu.org</a>
                </div>
              </li>
              <li>
                <div className="contact-icon">🕘</div>
                <div>
                  <strong>Working Hours</strong>
                  <span>Mon – Sat · 9:00 AM to 6:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit} ref={formRef}>
            {formSent && (
              <div className="form-success">
                ✅ Thank you! Your message has been received. We'll get back to you soon.
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="Your phone number" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="interest">I'd like to</label>
              <select id="interest" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="volunteer">Volunteer my time</option>
                <option value="donate-materials">Donate books / computers</option>
                <option value="sponsor">Sponsor a child</option>
                <option value="partner">Partner with us</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us how you'd like to help..." required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand">
                <div className="brand-mark">S</div>
                <div>
                  <div className="brand-name">Sparsh Setu</div>
                  <div className="brand-tag">Bridging Lives</div>
                </div>
              </div>
              <p className="footer-about">
                A grassroots NGO in Pimple Gurav, Pune, helping children in need access education
                through books, computers, and mentoring.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Instagram">i</a>
                <a href="#" aria-label="Twitter">t</a>
                <a href="#" aria-label="YouTube">y</a>
              </div>
            </div>
            <div>
              <h4>Organization</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Our Programs</a></li>
                <li><a href="#impact">Our Impact</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4>Get Involved</h4>
              <ul className="footer-links">
                <li><a href="#involve">Volunteer</a></li>
                <li><a href="#involve">Donate Materials</a></li>
                <li><a href="#involve">Sponsor a Child</a></li>
                <li><a href="#contact">Partner With Us</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul className="footer-links">
                <li><a href="tel:07620040230">07620040230</a></li>
                <li><a href="mailto:hello@sparshsetu.org">hello@sparshsetu.org</a></li>
                <li>Pimple Gurav, Pune – 411027</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Sparsh Setu. All rights reserved.</span>
            <span>Demo website · Built with care for a cause</span>
          </div>
        </div>
      </footer>
    </>
  )
}
