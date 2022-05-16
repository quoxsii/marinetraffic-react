import React from "react";
import {Link} from "react-router-dom";

export const ListComponent = ({vessels}) => {
    return (
        <div className="row">
            {
                vessels.map((vessel, i) =>
                    <div key={i} className="col-md-6 mb-4">
                        <div className="d-flex flex-column h-100 p-4 border rounded shadow-sm">
                            <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
                                <h5 className="d-inline-block me-lg-3 text-center text-lg-start text-primary">
                                    {vessel.name} ({vessel.callSign})
                                </h5>
                                <p className="col-lg-auto text-center text-lg-end text-muted small">
                                    {Intl.DateTimeFormat('en-UK', {year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(vessel.msgTime*1000)}
                                </p>
                            </div>
                            <div className="mb-3 text-center text-lg-start">
                                <div className="row">
                                    <div className="col-lg-4"><span className="text-secondary font-monospace">Type:</span> {vessel.type}</div>
                                    <div className="col-lg-4"><span className="text-secondary font-monospace">Flag:</span> {vessel.country}</div>
                                    <div className="col-lg-4"><span className="text-secondary font-monospace">Destination:</span> {vessel.destination}</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4"><span className="text-secondary font-monospace">State:</span> {vessel.navState}</div>
                                    <div className="col-lg-4"><span className="text-secondary font-monospace">Latitude:</span> {vessel.lat}°</div>
                                    <div className="col-lg-4"><span className="text-secondary font-monospace">Longitude:</span> {vessel.lon}°</div>
                                </div>
                            </div>
                            <div className="mt-auto border-top pt-3">
                                <Link to={`/vessels/${vessel.mmsi}`} className="btn col-12 col-lg-auto me-lg-2 mb-2 mb-lg-auto btn-primary">
                                    More details
                                </Link>
                                <Link to={`/map?mmsi=${vessel.mmsi}`} className="btn col-12 col-lg-auto btn-success">
                                    Show on map
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
