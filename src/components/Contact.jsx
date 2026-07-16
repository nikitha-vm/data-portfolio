import React from 'react';
import './Contact.css';

const links = [
  { label: 'Email me',       href: 'mailto:nikithavishnumolakala@gmail.com' },
  { label: 'LinkedIn',       href: 'https://linkedin.com/in/nikithavishnumolakala13', external: true },
  { label: 'GitHub',         href: 'https://github.com/nikitha-vm', external: true },
  { label: 'Tableau Public', href: 'https://public.tableau.com/app/profile/nikitha.vishnumolakala', external: true },
  { label: 'Resume PDF',     href: '#' },
];

const roles = [
  'Data Analyst', 'BI Analyst', 'Product Analytics',
  'Junior Data Engineer', 'Analytics Engineer',
];

export default function Contact() {
  return (
    <div id="contact" className="contact-section">
      <p className="section-label" style={{ textAlign: 'center' }}>Contact</p>
      <h2 className="contact-h">Let's work together.</h2>
      <p className="contact-sub">
        I'm actively looking for my first full-time data role in the US.<br />
        MS Computer Science · UMass Lowell · Provost Graduate Fellow
      </p>
      <div className="contact-availability">✦ Available now — open to full-time roles</div>
      <div className="contact-links">
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="contact-roles">
        {roles.map((role) => (
          <span className="role-tag" key={role}>{role}</span>
        ))}
      </div>
    </div>
  );
}
