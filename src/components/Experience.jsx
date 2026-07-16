import React from 'react';
import { experience } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <div id="experience">
      <div className="section-wrap">
        <p className="section-label">Experience</p>
        <h2 className="section-h2">Where I've done real work.</h2>
        {experience.map(({ id, title, org, date, bullets }) => (
          <div className="exp-item" key={id}>
            <div className="exp-top">
              <div>
                <div className="exp-title">{title}</div>
                <div className="exp-org">{org}</div>
              </div>
              <span className="exp-date">{date}</span>
            </div>
            <ul className="exp-bullets">
              {bullets.map(({ bold, rest }, i) => (
                <li key={i}>
                  {bold && <strong>{bold}</strong>}
                  {rest}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
