import React, {Fragment} from "react";

export const LoadingComponent = () => {
    return (
        <Fragment>
            <div className="text-center h-100">
                <div className="container d-flex h-100">
                    <span className="spinner-border m-auto text-primary" role="status"/>
                </div>
            </div>
        </Fragment>
    )
}
