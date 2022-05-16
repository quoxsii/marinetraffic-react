import React, {Fragment} from "react";
import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <Fragment>
            <div className="background text-center text-white h-100">
                <div className="container d-flex h-100 p-3 flex-column col-lg-4 col-md-6">
                    <div className="mt-auto">
                        <h1>Welcome to MarineTraffic</h1>
                        <p className="lead">This is a web application created by a student using his API.
                            You can explore the ships that the API provides and capture some information about them.
                        </p>
                        <p className="lead">
                            <Link to={"/map"} className="btn btn-lg btn-outline-light">Get started</Link>
                        </p>
                    </div>
                    <div className="mt-auto">
                        <div className="inner">
                            <p>
                                <a className="text-white" href="https://reactjs.org/">React</a> application for MarineTraffic API by <a
                                className="text-white" href="https://github.com/quoxsii">@quoxsii</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
