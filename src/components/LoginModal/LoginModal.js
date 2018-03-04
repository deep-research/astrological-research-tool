import React from "react";

const LoginModal = (props) =>
    <div>
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
                        <form className="form-signin" onSubmit={props.handleLoginFormSubmit}>
                            <br />
                            <label htmlFor="inputNameLogin" className="sr-only">Username</label>
                            <input
                                value={props.state.loginFormName}
                                onChange={props.loginFormInputChange.bind(this)}
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
                                onChange={props.loginFormInputChange.bind(this)}
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

export default LoginModal;