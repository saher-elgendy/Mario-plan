import moment from 'moment';
import React from 'react';

const ProjectSummary = ({ project }) => {
const {title, content, createdAt} = project;

    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                <p>{content}</p>
                <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary
