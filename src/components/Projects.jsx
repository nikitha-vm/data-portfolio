import React from 'react';
import { projects } from '../data/projects';
import MBTAProject from './projects/MBTAProject';
import SECProject from './projects/SECProject';
import URLProject from './projects/URLProject';
import './Projects.css';

const projectComponents = {
  mbta: MBTAProject,
  sec:  SECProject,
  url:  URLProject,
};

export default function Projects() {
  return (
    <div id="projects">
      <div className="section-wrap">
        <p className="section-label">Selected work</p>
        <h2 className="section-h2">Case studies in data problem-solving.</h2>
        <p className="section-sub">
          Every project below started with a real business question. The tools came second.
        </p>
        {projects.map((project) => {
          const Component = projectComponents[project.id];
          return Component ? <Component key={project.id} data={project} /> : null;
        })}
      </div>
    </div>
  );
}
