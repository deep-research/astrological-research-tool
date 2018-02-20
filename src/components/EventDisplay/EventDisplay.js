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