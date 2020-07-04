import React from 'react';
import ProjectSummary from './ProjectSummary';


const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {
        projects.map((p, i) => {
          return (
            <ProjectSummary p={p} key={i}/>
          );
        })
      }
    </div>
  )
}


export default ProjectList
