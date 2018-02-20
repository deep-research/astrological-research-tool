import React, {Component} from "react";
import "./EventDisplay.css";
import moment from "moment"

class EventDisplay extends Component {
    dateConversion = (origionalDate) => {
        var convertedDate = moment(origionalDate, 'YYYY-MM-DD').format('MM-DD-YYYY');
        return convertedDate
    }
    render() {
        return (
            <div id="EventDisplay">
                <br />
                <div id="accordion">
                {this.props.state.events.map(event => (
                    /* Data is passed to every image with props */
                    <div key={event.key}>
                        <div className="card">
                        <div className="card-header" id={"heading" + event.key}>
                                <h5 className="mb-0">
                                    <button
                                        className="btn btn-link"
                                        data-toggle="collapse"
                                        data-target={"#collapse" + event.key}
                                        aria-expanded="false"
                                        aria-controls={"collapse" + event.key}
                                    >
                                    {event.name}
                                    </button>
                                </h5>
                            </div>
                        </div>
                        <div
                            id={"collapse" + event.key}
                            className="collapse hide"
                            aria-labelledby={"heading" + event.key}
                        >
                            <div className="card-body">
                                <p><b>City:</b> {event.city} ({event.lat}, {event.lng})</p>
                                <p><b>Local Time & Date:</b> {event.localTime} ({event.timeZoneName})</p>
                                <p><b>UTC Time & Date:</b> {event.utcTime} (Greenwich Mean Time)</p>

                                {(event.weather)
                                    ? <div><p><b>Weather:</b> {event.weather}</p></div>
                                    : <div></div>}
                                {(event.news)
                                    ? <div><p><b>News:</b> {event.news}</p></div>
                                    : <div></div>}

                                {(event.sun)
                                    ? <div><p><b>Solar Position:</b> {event.sun}</p></div>
                                    : <div></div>}
                                {(event.season)
                                    ? <div><p><b>Solar Season:</b> {event.season}</p></div>
                                    : <div></div>}

                                {(event.moon)
                                    ? <div><p><b>Lunar Position:</b> {event.moon}</p></div>
                                    : <div></div>}
                                {(event.phase)
                                    ? <div><p><b>Lunar Phase:</b> {event.phase}</p></div>
                                    : <div></div>}

                                {(event.mercuryPosition)
                                    ? <div><p><b>Mercurial Position:</b> {event.mercuryPosition}</p></div>
                                    : <div></div>}
                                {(event.mercurySector)
                                    ? <div><p><b>Mercurial Sector:</b> {event.mercurySector}</p></div>
                                    : <div></div>}
                                {(event.mercuryMotion)
                                    ? <div><p><b>Mercurial Motion:</b> {event.mercuryMotion}</p></div>
                                    : <div></div>}

                                {(event.venusPosition)
                                    ? <div><p><b>Venusian Position:</b> {event.venusPosition}</p></div>
                                    : <div></div>}
                                {(event.venusSector)
                                    ? <div><p><b>Venusian Sector:</b> {event.venusSector}</p></div>
                                    : <div></div>}
                                {(event.venusMotion)
                                    ? <div><p><b>Venusian Motion:</b> {event.venusMotion}</p></div>
                                    : <div></div>}

                                {(event.marsPosition)
                                    ? <div><p><b>Martian Position:</b> {event.marsPosition}</p></div>
                                    : <div></div>}
                                {(event.marsSector)
                                    ? <div><p><b>Martian Sector:</b> {event.marsSector}</p></div>
                                    : <div></div>}
                                {(event.marsMotion)
                                    ? <div><p><b>Martian Motion:</b> {event.marsMotion}</p></div>
                                    : <div></div>}

                                {(event.jupiterPosition)
                                    ? <div><p><b>Jovian Position:</b> {event.jupiterPosition}</p></div>
                                    : <div></div>}
                                {(event.jupiterSector)
                                    ? <div><p><b>Jovian Sector:</b> {event.jupiterSector}</p></div>
                                    : <div></div>}
                                {(event.jupiterMotion)
                                    ? <div><p><b>Jovian Motion:</b> {event.jupiterMotion}</p></div>
                                    : <div></div>}

                                {(event.saturnPosition)
                                    ? <div><p><b>Saturnian Position:</b> {event.saturnPosition}</p></div>
                                    : <div></div>}
                                {(event.saturnSector)
                                    ? <div><p><b>Saturnian Sector:</b> {event.saturnSector}</p></div>
                                    : <div></div>}
                                {(event.saturnMotion)
                                    ? <div><p><b>Saturnian Motion:</b> {event.saturnMotion}</p></div>
                                    : <div></div>}

                                {(event.uranusPosition)
                                    ? <div><p><b>Uranian Position:</b> {event.uranusPosition}</p></div>
                                    : <div></div>}
                                {(event.uranusSector)
                                    ? <div><p><b>Uranian Sector:</b> {event.uranusSector}</p></div>
                                    : <div></div>}
                                {(event.uranusMotion)
                                    ? <div><p><b>Uranian Motion:</b> {event.uranusMotion}</p></div>
                                    : <div></div>}

                                {(event.neptunePosition)
                                    ? <div><p><b>Neptunian Position:</b> {event.neptunePosition}</p></div>
                                    : <div></div>}
                                {(event.neptuneSector)
                                    ? <div><p><b>Neptunian Sector:</b> {event.neptuneSector}</p></div>
                                    : <div></div>}
                                {(event.neptuneMotion)
                                    ? <div><p><b>Neptunian Motion:</b> {event.neptuneMotion}</p></div>
                                    : <div></div>}

                                {(event.plutoPosition)
                                    ? <div><p><b>Plutonian Position:</b> {event.plutoPosition}</p></div>
                                    : <div></div>}
                                {(event.plutoSector)
                                    ? <div><p><b>Plutonian Sector:</b> {event.plutoSector}</p></div>
                                    : <div></div>}
                                {(event.plutoMotion)
                                    ? <div><p><b>Plutonian Motion:</b> {event.plutoMotion}</p></div>
                                    : <div></div>}
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default EventDisplay;