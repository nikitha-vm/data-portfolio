import React from 'react';
import './About.css';

const values = [
  {
    title: 'Business question first',
    body: 'I start with what decision needs to be made, then work backward to what data is needed to make it.',
  },
  {
    title: 'Deep understanding over syntax',
    body: "I'd rather spend an extra hour truly understanding why something works than memorize it and hit a wall the next time it appears differently.",
  },
  {
    title: 'Honest about where I am',
    body: "I know what I'm strong in and what I'm still building. I don't oversell. I close gaps fast.",
  },
];

export default function About() {
  return (
    <div id="about" className="about-bg">
      <div className="section-wrap">
        <div className="about-grid">
          <div>
            <p className="section-label">About me</p>
            <p className="about-quote">
              "Good data work doesn't start with a query. It starts with understanding what decision someone is trying to make."
            </p>
            <div className="about-body">
              <p>
                I'm an MS Computer Science graduate from UMass Lowell, where I was awarded
                the Provost Graduate Fellowship. I'm looking for my first full-time data role
                in the US — as a Data Analyst, BI Analyst, or in a product analytics or
                junior data engineering capacity.
              </p>
              <p>
                My background is technical. I've built Python pipelines, written SQL against
                real datasets, and designed Tableau dashboards for operational audiences.
                I understand how data gets messy before it gets useful — and I enjoy that part of the work.
              </p>
              <p>
                I'm drawn to roles where data connects directly to decisions. Not just reports,
                but the kind of analysis that changes what a team does next.
              </p>
            </div>
          </div>
          <div>
            {values.map(({ title, body }) => (
              <div className="value-item" key={title}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
