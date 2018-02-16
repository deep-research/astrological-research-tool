import React, {Component} from "react";
import "./EventForm.css";

class EventForm extends Component {
    render() {
        return (
        <div id="EventForm">
            <br />
            <h3>Add an Event</h3>
            <form>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <label htmlFor="eventFormName">Event Name</label>
                        <input  required type="text" className="form-control" id="eventFormName" placeholder="Name" />
                        <div required className="formSpacer"></div>
                        <label htmlFor="eventFormCity">Event City</label>
                        <input required type="text" className="form-control" id="eventFormCity" placeholder="City" />
                        <div className="formSpacer"></div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <label htmlFor="eventFormDate">Event Date</label>
                        <input  required type="date" className="form-control" id="eventFormDate" placeholder="Date" />
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormTime">Event Time</label>
                        <input required type="time" className="form-control" id="eventFormTime" placeholder="Time" />
                        <div className="formSpacer"></div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" id="eventFormBtn">Submit</button>
                </div>
            </form>
        </div>
        );
    }
}

export default EventForm;