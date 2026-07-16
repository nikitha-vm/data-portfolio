import React from 'react';

export default function MetricsRow({ metrics }) {
  return (
    <div className="metrics-row">
      {metrics.map(({ num, label, cls }) => (
        <div className={`metric-chip ${cls || ''}`} key={label}>
          <div className="mc-num">{num}</div>
          <div className="mc-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
