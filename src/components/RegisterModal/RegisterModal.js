import React from "react";

const RegisterModal = (props) =>
    <div>
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
                        <form className="form-signin" onSubmit={props.handleRegisterFormSubmit.bind(this)}>
                            <br />
                            <label htmlFor="inputNameRegister" className="sr-only">Username</label>
                            <input
                                value={props.state.registerFormName}
                                onChange={props.registerFormInputChange.bind(this)}
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
                                onChange={props.registerFormInputChange.bind(this)}
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
                                onChange={props.registerFormInputChange.bind(this)}
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

export default RegisterModal;