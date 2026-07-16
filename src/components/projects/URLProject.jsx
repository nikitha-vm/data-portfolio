import React from 'react';

export default function URLProject({ data }) {
  return (
    <div className="project-card">
      <div className={`pc-topbar ${data.topbarClass}`} />
      <div className="pc-header">
        <div className="pc-tags">
          {data.tags.map(({ label, cls }) => (
            <span className={`tag ${cls}`} key={label}>{label}</span>
          ))}
        </div>
        <span className="pc-num">{data.num} / {data.type}</span>
      </div>
      <div className="pc-body">
        <h3 className="pc-title">{data.title}</h3>
        <p className="pc-lead">{data.lead}</p>
        <div className="cs-grid three">
          {data.boxes.map(({ label, labelCls, text }) => (
            <div className="cs-box" key={label}>
              <div className={`cs-box-label ${labelCls || ''}`}>{label}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
