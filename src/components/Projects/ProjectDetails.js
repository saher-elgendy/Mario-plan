
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = ({ project }) => {
    const { content, title } = project || {};

    return (
        project && <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>{content}</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <p>Posted By saher Elgendy</p>
                    <p>3rd, July, 2020</p>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = ownProps.match.params.id;

    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
