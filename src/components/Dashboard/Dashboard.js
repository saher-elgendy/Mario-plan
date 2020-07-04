import React from 'react';
import ProjectList from '../Projects/ProjectList';
import Notifications from './Notifications';

function Dashboard() {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList />
                </div>
                <div className="col s12 m5 offset-ml">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;