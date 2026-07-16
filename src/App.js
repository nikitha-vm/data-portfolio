import React from 'react';
import './styles/global.css';

import Nav          from './components/Nav';
import Hero         from './components/Hero';
import About        from './components/About';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Experience   from './components/Experience';
import CurrentFocus from './components/CurrentFocus';
import Contact      from './components/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <hr className="rule" />
      <About />
      <hr className="rule" />
      <Skills />
      <hr className="rule" />
      <Projects />
      <hr className="rule" />
      <Experience />
      <hr className="rule" />
      <CurrentFocus />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '1.75rem', borderTop: '1px solid #E8E1DA', fontSize: '0.78rem', color: 'var(--ink3)' }}>
        Built by Nikitha Vishnumolakala · 2026 · Open to US data roles
      </footer>
    </>
  );
}
