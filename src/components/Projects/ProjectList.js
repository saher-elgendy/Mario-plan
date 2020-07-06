import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';


const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {
        projects.map((p, i) => {
          return (
            <Link to={"/project/" + p.id}  key={i} >
              <ProjectSummary project={p}/>
            </Link>
          );
        })
      }
    </div>
  )
}


export default ProjectList
