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
                        <label htmlFor="eventFormDescription">Example label</label>
                        <input type="text" className="form-control" id="eventFormDescription" placeholder="Description" />
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormDate">Example label</label>
                        <input type="text" className="form-control" id="eventFormDate" placeholder="Date" />
                        <div className="formSpacer"></div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <label htmlFor="eventFormLocation">Example label</label>
                        <input type="text" className="form-control" id="eventFormLocation" placeholder="Location" />
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormTime">Example label</label>
                        <input type="text" className="form-control" id="eventFormTime" placeholder="Time" />
                        <div className="formSpacer"></div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        );
    }
}

export default EventForm;