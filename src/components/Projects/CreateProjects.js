import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/actions/projectAction';

const CreateProjects = ({ auth, createProject, history }) => {
    const [project, setProject] = useState({
        title: '',
        content: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        createProject(project);
        history.push('/');
    };

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.id]: e.target.value
        });

    };

    if (!auth.uid) {
        return <Redirect to="/signin" />
    } 
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Project Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                </div>
                <button className="btn pink lighten-1">Create Project</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjects)



