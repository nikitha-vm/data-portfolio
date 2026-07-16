import React from 'react';
import './Nav.css';

const links = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav-name">Nikitha Vishnumolakala</a>
      <ul className="nav-links">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
