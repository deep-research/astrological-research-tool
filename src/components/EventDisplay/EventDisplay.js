import React, {Component} from "react";
import "./EventDisplay.css";
import moment from "moment";
import EventDetails from "../EventDetails/EventDetails";

class EventDisplay extends Component {
    // Convert dates to a human readable format
    dateConversion = (origionalDate) => {
        var convertedDate = moment(origionalDate, 'YYYY-MM-DD').format('MM-DD-YYYY');
        return convertedDate
    }

    render() {
        return (
            <div id="EventDisplay">
                {(this.props.state.savedEvents.length > 0) ? <div><br /><h3>Saved Events</h3></div> : <div></div>}
                <div id="accordion">
                    {this.props.state.savedEvents.map(event => (
                        /* Data is passed to every image with props */
                        <div key={event._id}>
                            <div className="card">
                            <div className="card-header" id={"heading" + event._id}>
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link"
                                            data-toggle="collapse"
                                            data-target={"#collapse" + event._id}
                                            aria-expanded="false"
                                            aria-controls={"collapse" + event._id}
                                        >
                                        {event.name}
                                        </button>
                                    </h5>
                                </div>
                            </div>
                            <div
                                id={"collapse" + event._id}
                                className="collapse hide"
                                aria-labelledby={"heading" + event._id}
                            >
                                <div className="card-body">
                                    <p> <button className="iconBtn" type="button" title="Remove" onClick={()=>this.props.removeSavedEvent(event._id)}>
                                            <i className="fas fa-trash-alt fa-2x" id="removeIcon"></i>
                                        </button>&nbsp;&nbsp;
                                        <b>City:</b> {event.city} ({event.lat}, {event.lng})</p>
                                    <EventDetails event={event} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {(this.props.state.events.length > 0) ? <div><br /><h3>New Events</h3></div> : <div></div>}
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
                                    <p> {(this.props.state.loginUserId)
                                            ?<span><button className="iconBtn" type="button" title="Save" onClick={()=>this.props.saveEvent(event.key)}>
                                                <i className="far fa-save fa-2x" id="saveIcon"></i>
                                            </button>&nbsp;&nbsp;</span>
                                            : <span></span>
                                        }
                                        <button className="iconBtn" type="button" title="Remove" onClick={()=>this.props.removeEvent(event.key)}>
                                            <i className="fas fa-trash-alt fa-2x" id="removeIcon"></i>
                                        </button>&nbsp;&nbsp;
                                        <b>City:</b> {event.city} ({event.lat}, {event.lng})</p>
                                    <EventDetails event={event} />
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