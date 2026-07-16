import React from 'react';

export default function Pipeline({ steps, label = 'Workflow' }) {
  return (
    <>
      <div style={{ marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink3)' }}>
        {label}
      </div>
      <div className="pipeline">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div className={`pipe-step ${step.cls || ''}`}>
              <div className="ps-icon">{step.icon}</div>
              <div className="ps-label">{step.label}</div>
            </div>
            {i < steps.length - 1 && <div className="pipe-arrow">→</div>}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
