import React from 'react';
import { skills } from '../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <div id="skills">
      <div className="section-wrap">
        <p className="section-label">Skills</p>
        <h2 className="section-h2">What I bring, honestly.</h2>
        <p className="section-sub">
          Organized by confidence. The "Expanding Into" column reflects active work — not wishful thinking.
        </p>
        <div className="skills-cols">
          {Object.values(skills).map(({ label, colorClass, items }) => (
            <div className="skill-col" key={label}>
              <div className={`skill-col-title ${colorClass}`}>{label}</div>
              <div className="skill-tag-wrap">
                {items.map((item) => (
                  <span className={`skill-tag ${colorClass}`} key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="skills-note">Also working with Power BI for dashboard development alongside Tableau.</p>
      </div>
    </div>
  );
}
