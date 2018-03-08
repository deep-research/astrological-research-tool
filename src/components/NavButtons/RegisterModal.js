import React from "react";
import bcrypt from "bcryptjs";
import API from "../../utils/API";

const RegisterModal = (props) => {
    const handleRegisterFormSubmit = event => {
        event.preventDefault()

        const username = props.state.registerFormName;
        const password = props.state.registerFormPassword;
        const passwordConfirm = props.state.registerFormPasswordConfirm;

        // If the password confirmation doesn't match
        if (password !== passwordConfirm) {
            props.toastFunction("error", "Password Confirmation Failed!")

            props.objSetState({
                registerFormPassword: "",
                registerFormPasswordConfirm: ""
            })
        // If the password confirmation matches
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            // Add the user into the database
            API.saveUser({
                username: username,
                password: hash
            })
            .then(res => {
                const dbUserId = res.data._id;
                document.getElementById("registerModal").click();

                props.toastFunction("info", "Registration Submitted Successfully!")

                // Store info for the user in state
                props.objSetState({
                    loginName: username,
                    loginUserId: dbUserId,
                    loginFormName: "",
                    loginFormPassword: ""
                });
            })
            // If the username is already in the database
            .catch(err => {
                console.log(err)

                props.toastFunction("error", "Invalid Username!")

                props.objSetState({
                    registerFormName: ""
                })
            });
        }
    };

    const registerFormInputChange = event => {
        const { name, value } = event.target;

        props.objSetState({
            [name]: value
        })
    };

    return <div>
        <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title" id="loginModalLabel">Create a new account</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form-signin" onSubmit={handleRegisterFormSubmit.bind(this)}>
                            <br />
                            <label htmlFor="inputNameRegister" className="sr-only">Username</label>
                            <input
                                value={props.state.registerFormName}
                                onChange={registerFormInputChange.bind(this)}
                                name="registerFormName"
                                pattern="[a-zA-Z0-9]+"
                                title="Username should only contain letters or numbers with no spaces"
                                minLength="5"
                                maxLength="25"
                                type="text"
                                id="inputNameRegister"
                                className="form-control"
                                placeholder="Username"
                                required
                                autoFocus />
                            <br />
                            {/* <label htmlFor="inputEmailRegister" className="sr-only">Email Address</label>
                            <input type="email" id="inputEmailRegister" className="form-control" placeholder="Email Address" required autoFocus />
                            <br /> */}
                            <label htmlFor="inputPasswordRegister" className="sr-only">Password</label>
                            <input
                                value={props.state.registerFormPassword}
                                onChange={registerFormInputChange.bind(this)}
                                name="registerFormPassword"
                                pattern="[a-zA-Z0-9]+"
                                title="Password should only contain letters or numbers with no spaces"
                                minLength="5"
                                maxLength="25"
                                type="password"
                                id="inputPasswordRegister"
                                className="form-control"
                                placeholder="Password"
                                required />
                            <br />
                            <label htmlFor="inputPasswordRegisterConfirm" className="sr-only">Password</label>
                            <input
                                value={props.state.registerFormPasswordConfirm}
                                onChange={registerFormInputChange.bind(this)}
                                name="registerFormPasswordConfirm"
                                pattern="[a-zA-Z0-9]+"
                                title="Password should only contain letters or numbers with no spaces"
                                minLength="5"
                                maxLength="25"
                                type="password"
                                id="inputPasswordRegisterConfirm"
                                className="form-control"
                                placeholder="Confirm Password"
                                required />
                            <br />
                            <div className="modal-footer">
                                <button
                                    type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default RegisterModal;