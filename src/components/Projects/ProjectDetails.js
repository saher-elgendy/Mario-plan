
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

const ProjectDetails = ({ project, auth }) => {
    const { content, title, authorFirstName, authorLastName, createdAt } = project || {};

    if (!auth.uid) return <Redirect to="/signin" />

    return (
        project && <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>{content}</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <p>Posted By {authorFirstName} {authorLastName}</p>
                    <p>{moment(createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null

    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
