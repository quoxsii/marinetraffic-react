import {Link} from "react-router-dom";
import React, {Fragment} from "react";

export const NoMatchPage = () => {
    return (
        <Fragment>
            <div className="text-center h-100">
                <div className="container d-flex h-100">
                    <div className="m-auto">
                        <h1 className="text-secondary">Something went wrong</h1>
                        <p className="lead mb-5">
                            Page you are looking for doesn't exist, was removed or temporary unavailable.
                        </p>
                        <Link to={"/"} className="btn btn-lg btn-outline-secondary">Home</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
