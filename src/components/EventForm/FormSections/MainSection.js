import React, {Component} from "react";

class MainSection extends Component {
    render() {
        return (
            <div>
                <label htmlFor="eventFormName">Event Name <span className="star">*</span></label>
                <input required
                    type="text"
                    maxLength="40"
                    value={this.props.state.name}
                    onChange={this.props.eventFormInputChange}
                    name="name"
                    className="form-control"
                    id="eventFormName"
                    placeholder="Name"
                />
                <div className="formSpacer"></div>
                
                <label htmlFor="eventFormCity">Event City <span className="star">*</span></label>
                <input required
                    type="text"
                    maxLength="40"
                    value={this.props.state.cityInput}
                    onChange={this.props.eventFormInputChange}
                    name="cityInput"
                    className={"form-control " + this.props.cityValidation()}
                    id="eventFormCity"
                    placeholder="City"
                />
                <div className="formSpacer"></div>

                <label htmlFor="eventFormDate">Local Time and Date <span className="star">*</span></label>
                <input required
                    type="time"
                    value={this.props.state.time}
                    onChange={this.props.eventFormInputChange}
                    name="time"
                    className="form-control"
                    id="eventFormTime"
                    placeholder="Time"
                />                     
                <input required
                    type="date"
                    min="0001-01-01"
                    max="3999-12-31"
                    value={this.props.state.date}
                    onChange={this.props.eventFormInputChange}
                    name="date"
                    className="form-control"
                    id="eventFormDate"
                    placeholder="Date"
                />
                <div className="formSpacer"></div>
            </div>
        )
    }
}

export default MainSection;