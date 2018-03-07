import React, {Component} from "react";
import "./RemoveUser.css";
import { ToastContainer, toast } from "react-toastify";
import API from "../../utils/API";

class RemoveUser extends Component {
    removeUser = () => {
        // Ask for confirmation
        if (this.props.state.removeUserText === "Click to Remove User") {
            const obj = {
                removeUserText: "Click to Confirm!",
                removeUserColor: "removeUserRed"
            }
            this.props.objSetState(obj)
        // If confirmed
        } else if (this.props.state.removeUserText === "Click to Confirm!") {
            // Get rid of the user and any associated data
            API.removeUser(this.props.state.loginUserId)
                .then(res => {
                    this.props.userLogout(false)

                    toast.info("User Removed Successfully!", {
                        position: toast.POSITION.BOTTOM_CENTER
                    })
                })
                .catch(err => {
                    console.log(err)

                    toast.error("The User Was Not Removed!", {
                        position: toast.POSITION.BOTTOM_CENTER
                    })
                });
        }
    }

    render() {
        return (
            <div>
                <br />
                {(this.props.state.loginName)
                    ? <p className={this.props.state.removeUserColor} title="Click to Remove User"><span onClick={() => this.removeUser()}>{this.props.state.removeUserText}</span></p>
                    : <div></div>}
                <ToastContainer autoClose={2250} />
            </div>
        )
    }
}

export default RemoveUser;