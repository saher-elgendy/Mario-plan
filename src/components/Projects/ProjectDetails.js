
import React from 'react';

const ProjectDetails = (props) => {
    console.log(props)
    console.log(props.match.params.id)
    return (
        <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title</span>
                    <p>Lorem Ipsum dolor amet.......................</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <p>Posted By saher Elgendy</p>
                    <p>3rd, July, 2020</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
