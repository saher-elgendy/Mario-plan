import React, { useState } from 'react';

const SignUp = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log(e)
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onchange={handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}

export default SignUp
 