import React, { useState } from 'react';

const CreateProjects = () => {
    const [formData, setFormDatat] = useState({
        title: '',
        content: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setFormDatat({
            ...formData,
            [e.target.id]: e.target.value
        })
    };

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
                    <textarea id="content" className="materialize-textarea"></textarea>
                </div>
            </form>

        </div>
    )
}

export default CreateProjects



