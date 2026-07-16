import React from 'react';

export default function CodeBlock({ label, children }) {
  return (
    <div className="code-block">
      <div className="cb-header">
        <span className="cb-title">{label}</span>
        <div className="cb-dots">
          <span /><span /><span />
        </div>
      </div>
      <pre dangerouslySetInnerHTML={{ __html: children }} />
    </div>
  );
}
