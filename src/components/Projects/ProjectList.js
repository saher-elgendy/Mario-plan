import React from 'react'
import ProjectSummary from './ProjectSummary'

function ProjectList() {
    return (
        <div className="project-list section">
          <ProjectSummary />
          <ProjectSummary />
          <ProjectSummary />         
        </div>
    )
}

export default ProjectList
