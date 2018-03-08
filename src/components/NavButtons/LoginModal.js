import React from "react";
import bcrypt from "bcryptjs";
import API from "../../utils/API";

const LoginModal = (props) => {
    const handleLoginFormSubmit = event => {
        event.preventDefault()

        const username = props.state.loginFormName;
        const password = props.state.loginFormPassword;

        API.findUser({
            username: username
        })
        .then(res => {
            // If a user was found
            if (res.data) {
                const dbUser = res.data.username;
                const dbHash = res.data.password;
                const dbUserId = res.data._id;
                const bcryptCheck = bcrypt.compareSync(password, dbHash);

                // If the password is correct, log in
                if (bcryptCheck) {
                    props.objSetState({
                        loginName: dbUser,
                        loginUserId: dbUserId,
                        loginFormName: "",
                        loginFormPassword: ""
                    })
                    .then(() => {
                        document.getElementById("loginModal").click();

                        // Display the users events
                        props.displaySavedEvents(props.state.loginUserId)

                        props.toastFunction("info", "Login Submitted Successfully!")
                    });
                // If the password doesn't match, don't log in
                } else {
                    props.toastFunction("error", "Invalid Password!")

                    props.objSetState({
                        loginFormPassword: ""
                    })
                }
            // If no user was found
            } else {
                props.toastFunction("error", "Invalid Username!")
            }
        })
        // If the database query fails
        .catch(err => {
            console.log(err)

            props.toastFunction("error", "Invalid Username or Password!")

            props.objSetState({
                loginFormPassword: "",
                loginFormName: ""
            })
        });
    }
    
    const loginFormInputChange = event => {
        const { name, value } = event.target;

        props.objSetState({
            [name]: value
        })
    };

    return <div>
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="loginModalLabel">Please sign in</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form-signin" onSubmit={handleLoginFormSubmit}>
                            <br />
                            <label htmlFor="inputNameLogin" className="sr-only">Username</label>
                            <input
                                value={props.state.loginFormName}
                                onChange={loginFormInputChange.bind(this)}
                                name="loginFormName"
                                pattern="[a-zA-Z0-9]+"
                                title="Username should only contain letters or numbers with no spaces"
                                minLength="5"
                                maxLength="25"
                                type="text"
                                id="inputNameLogin"
                                className="form-control"
                                placeholder="Username"
                                required autoFocus />
                            <br />
                            <label htmlFor="inputPasswordLogin" className="sr-only">Password</label>
                            <input
                                value={props.state.loginFormPassword}
                                onChange={loginFormInputChange.bind(this)}
                                name="loginFormPassword"
                                pattern="[a-zA-Z0-9]+"
                                title="Password should only contain letters or numbers with no spaces"
                                minLength="5"
                                maxLength="25"
                                type="password"
                                id="inputPasswordLogin"
                                className="form-control"
                                placeholder="Password"
                                required />
                            <br />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LoginModal;