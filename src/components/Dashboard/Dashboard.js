import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProjectList from '../Projects/ProjectList';
import Notifications from './Notifications';

function Dashboard(props) {
    console.log(props)
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={props.projects} />
                </div>
                <div className="col s12 m5 offset-ml">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects || []
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
)(Dashboard);
