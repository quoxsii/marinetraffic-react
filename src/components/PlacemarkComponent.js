import React from "react";
import {Placemark} from "react-yandex-maps";

export const PlacemarkComponent = ({vessels}) => {
return (
        vessels.map((vessel, i) =>
        <Placemark
            key={i}
            defaultGeometry={[vessel.lat, vessel.lon]}
            options={{
                preset: 'islands#circleIcon',
                hideIconOnBalloonOpen: false
            }}
            properties={{
                hintContent:
                    `<span class="text-uppercase">${vessel.name} (${vessel.callSign}) [${vessel.country}]</span>`,
                balloonContent:
                    `<div class="container-fluid pe-1 ps-4" style="width: 250px">
                        <div class="mb-2 text-center" >
                            <h6 class="fw-bold text-primary">
                                ${vessel.name} (${vessel.callSign}) [${vessel.country}]
                            </h6>
                        </div>
                        <div class="mb-2">
                            <ul class="list-group">
                                <li class="list-group-item"><b>Type</b>: ${vessel.type}</li>
                                <li class="list-group-item"><b>Speed</b>: ${vessel.sog}kn</li>
                                <li class="list-group-item"><b>Course</b>: ${vessel.cog}°</li>
                                <li class="list-group-item"><b>Draught</b>: ${vessel.draught}m</li>
                                <li class="list-group-item"><b>State</b>: ${vessel.navState}</li>
                            </ul>
                        </div>
                        <div class="pb-1 text-center">
                            <p class="mb-2 text-muted">Received: ${Intl.DateTimeFormat('ru-RU', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(vessel.msgTime*1000)}</p>
                            <a href="/vessels/${vessel.mmsi}" class="btn btn-primary btn-sm w-100">More Details</a>
                        </div>
                    </div>`
            }}
        />)
    )
}
