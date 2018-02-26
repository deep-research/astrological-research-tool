import React, {Component} from "react";
import "./EventDisplay.css";
import moment from "moment";
import PlanetDisplay from "../PlanetDisplay";

class EventDisplay extends Component {
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

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="mercury"
                                        adjective="Mercurial"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="venus"
                                        adjective="Venusian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="mars"
                                        adjective="Martian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="jupiter"
                                        adjective="Jovian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="saturn"
                                        adjective="Saturnian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="uranus"
                                        adjective="Uranian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="neptune"
                                        adjective="Neptunian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="pluto"
                                        adjective="Plutonian"
                                    />
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

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="mercury"
                                        adjective="Mercurial"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="venus"
                                        adjective="Venusian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="mars"
                                        adjective="Martian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="jupiter"
                                        adjective="Jovian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="saturn"
                                        adjective="Saturnian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="uranus"
                                        adjective="Uranian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="neptune"
                                        adjective="Neptunian"
                                    />

                                    <PlanetDisplay
                                        state={this.props.state}
                                        event={event}
                                        planet="pluto"
                                        adjective="Plutonian"
                                    />
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