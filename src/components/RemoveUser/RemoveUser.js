import React, {Component} from "react";
import "./RemoveUser.css";

class RemoveUser extends Component {
    render() {
        return (
            <div>
                <br />
                {(this.props.state.loginName)
                    ? <p className={this.props.state.removeUserColor} title="Click to Remove User"><span onClick={() => this.props.removeUser()}>{this.props.state.removeUserText}</span></p>
                    : <div></div>}
            </div>
        )
    }
}

export default RemoveUser;