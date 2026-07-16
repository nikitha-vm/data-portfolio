export const projects = [
  {
    id: "mbta",
    num: "01",
    type: "ANALYTICS DASHBOARD · FEATURED",
    featured: true,
    topbarClass: "",
    tags: [
      { label: "SQL", cls: "tag-rose" },
      { label: "Tableau", cls: "tag-rose" },
      { label: "Excel", cls: "tag-neutral" },
      { label: "Transit Analytics", cls: "tag-neutral" },
    ],
    title: "MBTA Transit Operations Dashboard",
    lead: "Boston's MBTA carries hundreds of thousands of commuters daily. But where does the system actually fail them — and when? I built an operational analytics dashboard to answer that question with data.",
    metrics: [
      { num: "3", label: "Transit lines analyzed", cls: "" },
      { num: "15.25", label: "Avg min — Red Line (most congested)", cls: "" },
      { num: "4", label: "Coordinated dashboard views", cls: "teal" },
      { num: "10AM–12PM", label: "Most reliable travel window", cls: "warm" },
    ],
    businessQuestions: [
      "Which MBTA lines and routes create the most friction for daily commuters?",
      "When are peak demand windows — and how does reliability shift across the day?",
      "Which journeys carry the highest time burden — and what does that mean for capacity planning?",
    ],
    pipeline: [
      { icon: "📥", label: "MBTA Travel Time Dataset", cls: "highlight" },
      { icon: "🧹", label: "Excel Data Cleaning", cls: "" },
      { icon: "🔍", label: "SQL Aggregations", cls: "highlight" },
      { icon: "📊", label: "Tableau Visualizations", cls: "" },
      { icon: "💡", label: "Operational Insights", cls: "teal" },
    ],
    sqlSnippet: `SELECT
    route_id,
    EXTRACT(HOUR FROM departure_time) AS hour_of_day,
    AVG(travel_time_minutes)          AS avg_travel_time,
    COUNT(*)                          AS trip_count,
    PERCENTILE_CONT(0.9) WITHIN GROUP
        (ORDER BY travel_time_minutes) AS p90_travel_time
FROM  mbta_trips
WHERE travel_date BETWEEN '2024-01-01' AND '2024-12-31'
GROUP BY route_id, hour_of_day
ORDER BY avg_travel_time DESC;`,
    sqlLabel: "SQL — Avg travel time by line and hour",
    tableauUrl:
      "https://public.tableau.com/app/profile/nikitha.vishnumolakala/viz/mbta_dashboard/MBTATransitReliabilityCongestionDashboard",
    findings: [
      { bold: "Red Line", rest: " is the most congested — 15.25 min avg, higher than Blue and Orange" },
      { bold: "Braintree ↔ Alewife", rest: " corridor is the single most time-intensive journey pair" },
      { bold: "6–8 AM and 4–7 PM", rest: " are confirmed peak windows with highest congestion" },
      { bold: "10 AM–12 PM", rest: " is consistently the most reliable window for travel" },
      { bold: "Hour-8 Red Line spike", rest: " is clearly visible in the congestion heatmap" },
    ],
    insight: {
      label: "Operational Recommendation",
      text: "The Red Line needs priority intervention. Frequent congestion between Braintree and Alewife suggests a need for better scheduling and crowd management during the 6–8 AM window. A targeted increase in train frequency during this corridor's peak hours would have the highest per-commuter impact.",
    },
    learning: {
      label: "What I Learned",
      text: "Designing for an operational audience is different from designing for exploration. Every chart had to answer a specific decision — not just describe the data. That constraint made the analysis sharper and taught me to lead with the 'so what,' not the method.",
    },
    githubUrl: null,
  },
  {
    id: "sec",
    num: "02",
    type: "DATA PIPELINE · RESEARCH PUBLISHED",
    featured: false,
    topbarClass: "teal",
    tags: [
      { label: "Python", cls: "tag-teal" },
      { label: "NLP", cls: "tag-teal" },
      { label: "pandas", cls: "tag-neutral" },
      { label: "Data Engineering", cls: "tag-neutral" },
    ],
    title: "SEC Filing Intelligence Pipeline",
    lead: "Critical Audit Matters buried in SEC 10-K filings carry high-signal financial risk information — but they're locked inside hundreds of inconsistently formatted documents. I built a Python pipeline to extract, validate, and structure that data at scale.",
    metrics: [
      { num: "500+", label: "SEC filings processed", cls: "teal" },
      { num: "100%", label: "Automated — zero manual extraction", cls: "teal" },
      { num: "Apr 2024", label: "Published research", cls: "warm" },
    ],
    pipeline: [
      { icon: "📄", label: "Raw SEC 10-K Filings", cls: "highlight" },
      { icon: "🐍", label: "Python Ingestion", cls: "" },
      { icon: "🔡", label: "Regex / NLP Extraction", cls: "highlight" },
      { icon: "✅", label: "Validation Checks", cls: "" },
      { icon: "🧹", label: "Cleaning & Normalization", cls: "" },
      { icon: "📊", label: "Structured Dataset", cls: "teal" },
    ],
    problemLeft: {
      label: "The Business Problem",
      text: "CAMs contain auditor risk assessments that analysts need to compare across companies and industries — but they're written in free-form prose inside dense 10-K filings. Manual extraction across 500+ documents is not viable. The data needed to be structured to be useful.",
    },
    problemRight: {
      label: "The Engineering Challenge",
      text: "Regulatory documents are inconsistently formatted across companies, years, and auditors. A single rigid regex fails on edge cases. The solution required iterative rule refinement, section boundary detection, and validation loops to catch failures before they entered the output.",
    },
    pythonSnippet: `import re
import pandas as pd

def extract_cam_sections(filing_text: str) -> list[dict]:
    """Extract Critical Audit Matter sections from 10-K text."""
    cam_pattern = re.compile(
        r'Critical Audit Matter[s]?\\s*[\\:\\-]?\\s*'
        r'(?P<title>[^\\n]{10,120})\\n'
        r'(?P<body>.{200,}?)(?=Critical Audit Matter|$)',
        re.IGNORECASE | re.DOTALL
    )
    matches = cam_pattern.finditer(filing_text)
    return [
        {'title': m.group('title').strip(),
         'body':  m.group('body').strip(),
         'char_count': len(m.group('body'))}
        for m in matches
    ]

# Validation: flag extractions below minimum threshold
def validate_extraction(df: pd.DataFrame) -> pd.DataFrame:
    df['valid'] = (df['char_count'] > 300) & df['title'].notna()
    return df`,
    pythonLabel: "Python — CAM section extraction (illustrative)",
    before: [
      "Raw prose in PDF/HTML format",
      "Inconsistent section headings across filers",
      "Embedded tables, footnotes, legal boilerplate",
      "No standardized structure",
    ],
    after: [
      "Structured tabular CSV — one row per CAM",
      "Fields: company, year, auditor, CAM title, body text",
      "Validated: length check + title presence check",
      "Ready for cross-industry pattern analysis",
    ],
    insight: {
      label: "Why This Matters Beyond the Project",
      text: "This is the same pattern as a production ETL pipeline: extract → validate → transform → load. The challenge of handling real-world document inconsistency is exactly what data engineers face with messy source data.",
    },
    learning: {
      label: "Key Learning",
      text: "Real-world documents are inconsistent in ways that clean datasets aren't. Building robust extraction meant handling edge cases, not optimizing for the happy path. Validation is not optional — it's where you find out if your pipeline actually works.",
    },
    githubUrl: "https://github.com/nikithavishnumolakala",
  },
  {
    id: "url",
    num: "03",
    type: "MACHINE LEARNING · APR 2024",
    featured: false,
    topbarClass: "neutral",
    tags: [
      { label: "Python", cls: "tag-neutral" },
      { label: "scikit-learn", cls: "tag-neutral" },
      { label: "Published Research", cls: "tag-neutral" },
    ],
    title: "URL Security Classification",
    lead: "An ML pipeline to classify malicious vs. benign URLs using lexical and structural feature engineering — published April 2024 with 4 co-authors.",
    boxes: [
      {
        label: "Problem",
        text: "Blocklist-based URL filtering misses structurally malicious links. A feature-engineering classifier catches patterns blocklists can't.",
      },
      {
        label: "Approach",
        text: "Extracted lexical features (URL length, special characters, subdomain depth) and structural features (TLD, entropy) as classifier inputs.",
      },
      {
        label: "Why It's Here",
        labelCls: "rose",
        text: "Published research signals rigorous problem framing, methodology design, and ability to communicate findings — skills that transfer to analytics work.",
      },
    ],
    githubUrl: null,
  },
];
