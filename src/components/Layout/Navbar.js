
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = ({ uid, profile }) => {
    const initials = profile.initials || null;

    const links = uid ? <SignedInLinks initials={initials}/> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link className="brand-logo" to="/">
                    Mario plan
                </Link>
            </div>
            {links}
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)
