import React from 'react';
import MetricsRow from '../MetricsRow';
import Pipeline from '../Pipeline';
import CodeBlock from '../CodeBlock';

const PYTHON_HTML = `<span class="kw">import</span> re
<span class="kw">import</span> pandas <span class="kw">as</span> pd

<span class="kw">def</span> <span class="fn">extract_cam_sections</span>(filing_text: str) -> list[dict]:
    <span class="str">"""Extract Critical Audit Matter sections from 10-K text."""</span>
    cam_pattern = re.<span class="fn">compile</span>(
        <span class="str">r'Critical Audit Matter[s]?\\s*[\\:\\-]?\\s*'</span>
        <span class="str">r'(?P&lt;title&gt;[^\\n]{10,120})\\n'</span>
        <span class="str">r'(?P&lt;body&gt;.{200,}?)(?=Critical Audit Matter|$)'</span>,
        re.IGNORECASE | re.DOTALL
    )
    matches = cam_pattern.<span class="fn">finditer</span>(filing_text)
    <span class="kw">return</span> [
        {<span class="str">'title'</span>: m.<span class="fn">group</span>(<span class="str">'title'</span>).<span class="fn">strip</span>(),
         <span class="str">'body'</span>:  m.<span class="fn">group</span>(<span class="str">'body'</span>).<span class="fn">strip</span>(),
         <span class="str">'char_count'</span>: <span class="fn">len</span>(m.<span class="fn">group</span>(<span class="str">'body'</span>))}
        <span class="kw">for</span> m <span class="kw">in</span> matches
    ]

<span class="cm"># Validation: flag extractions below minimum threshold</span>
<span class="kw">def</span> <span class="fn">validate_extraction</span>(df: pd.DataFrame) -> pd.DataFrame:
    df[<span class="str">'valid'</span>] = (df[<span class="str">'char_count'</span>] > 300) & df[<span class="str">'title'</span>].<span class="fn">notna</span>()
    <span class="kw">return</span> df`;

export default function SECProject({ data }) {
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

        <MetricsRow metrics={data.metrics} />
        <Pipeline steps={data.pipeline} label="Pipeline Architecture" />

        <div className="cs-grid">
          <div className="cs-box">
            <div className="cs-box-label">{data.problemLeft.label}</div>
            <p>{data.problemLeft.text}</p>
          </div>
          <div className="cs-box">
            <div className="cs-box-label">{data.problemRight.label}</div>
            <p>{data.problemRight.text}</p>
          </div>
        </div>

        <CodeBlock label={data.pythonLabel}>{PYTHON_HTML}</CodeBlock>

        <div className="cs-grid">
          <div className="cs-box">
            <div className="cs-box-label rose">Data Before</div>
            <ul>{data.before.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <div className="cs-box">
            <div className="cs-box-label teal">Data After</div>
            <ul>{data.after.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
        </div>

        <div className="insight-box">
          <div className="ib-label">{data.insight.label}</div>
          <p>{data.insight.text}</p>
        </div>
        <div className="learning-box">
          <div className="lb-label">{data.learning.label}</div>
          <p><strong>{data.learning.text.split('—')[0]}—</strong>{data.learning.text.split('—')[1]}</p>
        </div>

        {data.githubUrl && (
          <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="pc-link">
            View on GitHub →
          </a>
        )}
      </div>
    </div>
  );
}
