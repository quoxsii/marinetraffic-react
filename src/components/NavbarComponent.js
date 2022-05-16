import React from "react";
import {NavLink} from "react-router-dom";

class NavbarComponent extends React.Component {
    render() {
        return (
            <header>
                <div className="px-3 py-2 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <NavLink className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" to={"/"}>
                                <h3 className="m-0">MarineTraffic</h3>
                            </NavLink>
                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "nav-link text-muted" : "nav-link text-white"
                                        }
                                        to={"/vessels"} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                             className="bi bi-list d-block mx-auto mb-1" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        </svg>
                                        List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "nav-link text-muted" : "nav-link text-white"
                                        }
                                        to={"/map"}
                                        onClick={this.forceUpdate}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                             className="bi bi-map d-block mx-auto mb-1" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                        Map
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavbarComponent;
