import React from 'react';
import { focusItems } from '../data/focus';
import './CurrentFocus.css';

export default function CurrentFocus() {
  return (
    <div id="focus">
      <div className="section-wrap">
        <p className="section-label">Current Focus</p>
        <h2 className="section-h2">What I'm working on.</h2>
        <p className="section-sub">
          Outside of job searching, I stay sharp by working on projects that push my technical depth and business thinking simultaneously.
        </p>
        <div className="build-grid">
          {focusItems.map(({ id, status, statusLabel, title, desc }) => (
            <div className={`build-card ${status}`} key={id}>
              <div className={`build-status ${status}`}>{statusLabel}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
