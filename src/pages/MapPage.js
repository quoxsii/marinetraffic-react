import React, {Fragment, useEffect, useState} from "react";
import {PlacemarkComponent} from "../components/PlacemarkComponent";
import {Map, YMaps} from "react-yandex-maps";
import VesselService from "../services/VesselService";
import {useSearchParams} from "react-router-dom";
import {LoadingComponent} from "../components/LoadingComponent";
import {NoMatchPage} from "./NoMatchPage";

export const MapPage = () => {
    const [searchParams] = useSearchParams();
    const [center, setCenter] = useState([38.038901, -42.214171]);
    const [zoom, setZoom] = useState(4);
    const [vessels, setVessels] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [fetchingFailed, setFetchingFailed] = useState(false);

    useEffect(() => {
        if(fetching) {
            if(searchParams.has('mmsi')) {
                VesselService.getVesselByMmsi(searchParams.get('mmsi'))
                    .then(response => {
                        setVessels([response.data]);
                        setCenter([response.data.lat, response.data.lon]);
                        setZoom(6);
                    })
                    .catch(() => {
                        setFetchingFailed(true);
                    })
                    .finally(() => {
                        setFetching(false);
                    });
            }
            else {
                VesselService.getAllVessels()
                    .then(response => {
                        setVessels([...vessels, ...response.data]);
                    })
                    .catch(() => {
                        setFetchingFailed(true);
                    })
                    .finally(() => {
                        setFetching(false);
                    });
            }

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
            <YMaps
                query={{
                    lang: 'en_RU',
                    ns: 'use-load-option',
                    load:
                        'Map,' +
                        'Placemark,' +
                        'control.ZoomControl,' +
                        'geoObject.addon.balloon,' +
                        'geoObject.addon.hint'
                }}>
                <Map
                    width={'100vw'}
                    height={'100vh'}
                    state={{
                        center: center,
                        zoom: zoom,
                        controls: ['zoomControl']
                    }}
                    options={{
                        minZoom: 2,
                        suppressMapOpenBlock: true
                    }}>
                    <PlacemarkComponent vessels={vessels}/>
                </Map>
            </YMaps>
        </Fragment>
    )
}
