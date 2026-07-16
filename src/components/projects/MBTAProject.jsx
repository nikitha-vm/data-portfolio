import React from 'react';
import MetricsRow from '../MetricsRow';
import Pipeline from '../Pipeline';
import CodeBlock from '../CodeBlock';

const SQL_HTML = `<span class="kw">SELECT</span>
    route_id,
    <span class="fn">EXTRACT</span>(HOUR <span class="kw">FROM</span> departure_time) <span class="kw">AS</span> hour_of_day,
    <span class="fn">AVG</span>(travel_time_minutes)              <span class="kw">AS</span> avg_travel_time,
    <span class="fn">COUNT</span>(*)                              <span class="kw">AS</span> trip_count,
    <span class="fn">PERCENTILE_CONT</span>(0.9) <span class="kw">WITHIN GROUP</span>
        (<span class="kw">ORDER BY</span> travel_time_minutes)      <span class="kw">AS</span> p90_travel_time
<span class="kw">FROM</span>  mbta_trips
<span class="kw">WHERE</span> travel_date <span class="kw">BETWEEN</span> <span class="str">'2024-01-01'</span> <span class="kw">AND</span> <span class="str">'2024-12-31'</span>
<span class="kw">GROUP BY</span> route_id, hour_of_day
<span class="kw">ORDER BY</span> avg_travel_time <span class="kw">DESC</span>;`;

export default function MBTAProject({ data }) {
  return (
    <div className={`project-card ${data.featured ? 'featured' : ''}`}>
      <div className="pc-topbar" />
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

        <MetricsRow metrics={data.metrics} />

        <div className="cs-grid three">
          {data.businessQuestions.map((q, i) => (
            <div className="cs-box" key={i}>
              <div className="cs-box-label rose">Business Question</div>
              <p>{q}</p>
            </div>
          ))}
        </div>

        <Pipeline steps={data.pipeline} label="Analysis Workflow" />

        <CodeBlock label={data.sqlLabel}>{SQL_HTML}</CodeBlock>

        <div className="cs-grid">
          <div>
            <div className="dash-placeholder">
              <div className="dp-icon">📊</div>
              <div className="dp-title">"Beyond the Route" — Live Tableau Dashboard</div>
              <div className="dp-sub" style={{ marginBottom: '0.75rem' }}>
                Transit Confidence Across Boston's MBTA System
              </div>
              <a href={data.tableauUrl} target="_blank" rel="noopener noreferrer">
                View live on Tableau Public →
              </a>
            </div>
          </div>
          <div>
            <div className="cs-box" style={{ height: '100%' }}>
              <div className="cs-box-label teal">Key Findings</div>
              <ul>
                {data.findings.map(({ bold, rest }, i) => (
                  <li key={i}>{bold && <strong>{bold}</strong>}{rest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="insight-box">
          <div className="ib-label">{data.insight.label}</div>
          <p>{data.insight.text}</p>
        </div>
        <div className="learning-box">
          <div className="lb-label">{data.learning.label}</div>
          <p>{data.learning.text}</p>
        </div>
      </div>
    </div>
  );
}
