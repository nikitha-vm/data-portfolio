import React from 'react';
import './Hero.css';

const pathItems = [
  { dot: 'done', title: 'MS Computer Science · Provost Fellow', sub: 'Strong programming and research foundations' },
  { dot: 'done', title: 'Built real data pipelines & dashboards', sub: 'Python ETL on 500+ SEC filings · MBTA Tableau dashboard' },
  { dot: 'done', title: 'Business-first thinking', sub: 'Every project starts with a business question, not a tool' },
  { dot: 'now',  title: 'Deepening SQL, Python & dbt', sub: 'Building toward production-grade transformation workflows' },
];

const stats = [
  { num: '500+',   label: 'Documents structured via Python' },
  { num: '3',      label: 'End-to-end data projects' },
  { num: '2026',   label: 'Available now' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-left">
        <p className="hero-eyebrow">Data Analyst · BI · Product Analytics</p>
        <h1 className="hero-h1">
          I help organizations<br />
          make <em>better decisions</em><br />
          with their data.
        </h1>
        <p className="hero-sub">
          MS Computer Science · UMass Lowell · Provost Graduate Fellow.
          I build dashboards, pipelines, and analyses that connect raw data
          to the business questions people actually need answered.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-p">See my work</a>
          <a href="mailto:nikithavishnumolakala@gmail.com" className="btn-s">Get in touch</a>
        </div>
        <div className="hero-stats">
          {stats.map(({ num, label }) => (
            <div className="stat-item" key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <div className="story-card">
          <p className="story-heading">What I bring to a data team.</p>
          <div className="story-path">
            {pathItems.map(({ dot, title, sub }) => (
              <div className="path-item" key={title}>
                <div className={`path-dot ${dot}`}>
                  {dot === 'done' ? '✓' : dot === 'now' ? '→' : '◦'}
                </div>
                <div>
                  <div className="path-title">{title}</div>
                  <div className="path-sub">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
