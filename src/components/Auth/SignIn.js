import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from './../../store/actions/authAction';


const SignIn = (props) => {
    const { signIn, authError } = props;
    console.log(authError)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(formData);
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="Email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password" password>Password</label>
                    <input type="password" id="password" onChange={handleChange} />
                </div>
                <button className="btn pink z-depth-0 lighten-1">Sign In</button>
                <div className="red-text center">{authError}</div>
            </form>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authErr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
