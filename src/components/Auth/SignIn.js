import React, { useState } from 'react';

const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        console.log(e)
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="Email" id="email" onChange={handleSubmit} />
                </div>

                <div className="input-field">
                    <label htmlFor="password" password>Password</label>
                    <input type="password" id="password" onChange={handleSubmit} />
                </div>
            </form>

        </div>
    )
}

export default SignIn
