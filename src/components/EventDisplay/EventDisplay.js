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
                                    ? <div><p><b>Solar Quadrant:</b> {event.sun}</p></div>
                                    : <div></div>}
                                {(event.season)
                                    ? <div><p><b>Solar Season:</b> {event.season}</p></div>
                                    : <div></div>}
                                {(event.moon)
                                    ? <div><p><b>Lunar Quadrant:</b> {event.moon}</p></div>
                                    : <div></div>}
                                {(event.phase)
                                    ? <div><p><b>Lunar Phase:</b> {event.phase}</p></div>
                                    : <div></div>}
                                {(event.mercury)
                                    ? <div><p><b>Mercurial Quadrant:</b> {event.mercury}</p></div>
                                    : <div></div>}
                                {(event.venus)
                                    ? <div><p><b>Venusian Quadrant:</b> {event.venus}</p></div>
                                    : <div></div>}
                                {(event.mars)
                                    ? <div><p><b>Martian Quadrant:</b> {event.mars}</p></div>
                                    : <div></div>}
                                {(event.jupiter)
                                    ? <div><p><b>Jovian Quadrant:</b> {event.jupiter}</p></div>
                                    : <div></div>}
                                {(event.saturn)
                                    ? <div><p><b>Saturnian Quadrant:</b> {event.saturn}</p></div>
                                    : <div></div>}
                                {(event.uranus)
                                    ? <div><p><b>Uranian Quadrant:</b> {event.uranus}</p></div>
                                    : <div></div>}
                                {(event.neptune)
                                    ? <div><p><b>Neptunian Quadrant:</b> {event.neptune}</p></div>
                                    : <div></div>}
                                {(event.pluto)
                                    ? <div><p><b>Plutonian Quadrant:</b> {event.pluto}</p></div>
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