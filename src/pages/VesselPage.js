import React, {Fragment, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import VesselService from "../services/VesselService";
import {NoMatchPage} from "./NoMatchPage";
import {LoadingComponent} from "../components/LoadingComponent";

export function VesselPage() {
    const {vesselMmsi} = useParams();
    const [vessel, setVessel] = useState('');
    const [fetching, setFetching] = useState(true);
    const [fetchingFailed, setFetchingFailed] = useState(false);

    useEffect(() => {
        if (fetching && vesselMmsi != null) {
            VesselService.getVesselByMmsi(vesselMmsi)
                .then(response => {
                    setVessel(response.data)
                })
                .catch(() => {
                    setFetchingFailed(true);
                })
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    if (fetching) {
        return <LoadingComponent/>
    }

    if (fetchingFailed) {
        return <NoMatchPage/>
    }

    return (
        <Fragment>
            <div className="container my-3 h-100">
                <div className="d-flex flex-column h-100 p-4 border rounded shadow-sm">
                    <div className="text-center text-lg-start mb-3">
                        <h4 className="text-primary">
                            {vessel.name} ({vessel.callSign})
                        </h4>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <div className="pb-2 h-100 ms-0 me-0 me-md-1 border rounded">
                                    <h5 className="fw-normal my-2 px-lg-2 pb-2 border-bottom text-center text-lg-start">Vessel Information</h5>
                                    <ul className="list-inline mb-0 px-4">
                                        <li><span className="text-secondary font-monospace">MMSI:</span> {vessel.mmsi}</li>
                                        <li><span className="text-secondary font-monospace">Flag:</span> {vessel.country}</li>
                                        <li><span className="text-secondary font-monospace">Type:</span> {vessel.type}</li>
                                        <li><span className="text-secondary font-monospace">Type detail:</span> {vessel.typeDetail}</li>
                                        <li><span className="text-secondary font-monospace">Length:</span> {vessel.length}m</li>
                                        <li><span className="text-secondary font-monospace">Width:</span> {vessel.width}m</li>
                                        <li><span className="text-secondary font-monospace">Draught:</span> {vessel.draught}m</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="pb-2 ms-0 ms-md-1 me-0 border rounded">
                                    <h5 className="fw-normal my-2 px-lg-2 pb-2 border-bottom text-center text-lg-start">Latest position</h5>
                                    <ul className="list-inline mb-0 px-4">
                                        <li><span className="text-secondary font-monospace">Latitude:</span> {vessel.lat}°</li>
                                        <li><span className="text-secondary font-monospace">Longitude:</span> {vessel.lon}°</li>
                                        <li><span className="text-secondary font-monospace">Course:</span> {vessel.cog}°</li>
                                        <li><span className="text-secondary font-monospace">Speed:</span> {vessel.sog}kn</li>
                                        <li><span className="text-secondary font-monospace">ETA:</span> {vessel.eta}</li>
                                        <li><span className="text-secondary font-monospace">Destination:</span> {vessel.destination}</li>
                                        <li><span className="text-secondary font-monospace">State:</span> {vessel.navState}</li>
                                        <li><span className="text-secondary font-monospace">Received:</span> {Intl.DateTimeFormat('en-UK', {year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(vessel.msgTime*1000)}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto border-top pt-3">
                        <Link to={"/vessels"} className="btn col-12 col-md-auto me-md-2 mb-2 mb-md-auto btn-primary">
                            Go to list
                        </Link>
                        <Link to={`/map?mmsi=${vessel.mmsi}`} className="btn col-12 col-md-auto btn-success">
                            Show on map
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
