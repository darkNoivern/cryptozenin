import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = (props) => {

    const substituteData = useSelector(state => state);
    const user = substituteData.user
    
    const dispatch = useDispatch();

    const logout = () => {
        props.toggleUser(false)
        dispatch({
            type: 'LOGOUT',
        });
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link exact to="/" className="navbar-brand fred text-warning py-2">
                        $ CryptoZenin $
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1 text-warning"
                                exact to="/" >
                                Home
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1 text-warning"
                                exact to="/coins" >
                                Coins
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1 text-warning"
                                exact to="/news" >
                                News
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1 text-warning"
                                exact to="/stalk" >
                                StalkList
                            </NavLink>
                        </div>

                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                user === false ?
                                    <>

                                        <NavLink
                                            activeclassname="active"
                                            className="nav-link ms-1 text-warning"
                                            exact to="/signin">
                                            SignIn
                                        </NavLink>
                                        <NavLink
                                            activeclassname="active"
                                            className="nav-link ms-1 text-warning"
                                            exact to="/signup">
                                            SignUp
                                        </NavLink>
                                    </>
                                    :
                                    <NavLink
                                        activeclassname="active"
                                        className="nav-link ms-1 text-warning"
                                        onClick={logout}
                                        exact to="/signin">
                                        Logout
                                    </NavLink>
                            }
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }

// export default connect(mapStateToProps)(Navbar)
export default Navbar