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
                    <div className="col">
                        <label for="eventFormDescription">Example label</label>
                        <input type="text" class="form-control" id="eventFormDescription" placeholder="Description" />
                        {/* <br /> */}
                        <div class="formSpacer"></div>
                        <label for="eventFormDate">Example label</label>
                        <input type="text" class="form-control" id="eventFormDate" placeholder="Date" />
                        {/* <br /> */}
                        <div id="formButtonSpacer"></div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <div className="col">
                        <label for="eventFormLocation">Example label</label>
                        <input type="text" class="form-control" id="eventFormLocation" placeholder="Location" />
                        <div class="formSpacer"></div>
                        {/* <br /> */}
                        <label for="eventFormTime">Example label</label>
                        <input type="text" class="form-control" id="eventFormTime" placeholder="Time" />
                    </div>
                </div>
            </form>
        </div>
        );
    }
}

export default EventForm;