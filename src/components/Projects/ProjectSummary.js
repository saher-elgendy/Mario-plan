import React from 'react';

const ProjectSummary = ({ project }) => {
const {title, content} = project;

    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                <p>{content}</p>
                <p className="grey-text">3rd July, 2020</p>
            </div>
        </div>
    )
}

export default ProjectSummary
