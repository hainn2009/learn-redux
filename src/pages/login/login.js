import React, { Component, Fragment } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { NavLink } from "react-router-dom";
import { LOGOUT, SET_USER_LOGIN, SET_LOGIN_AUTH_ERROR } from "../../../actions/auth";
import Auth from "../../../models/Auth";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./login.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { InputGroup } from "react-bootstrap";
import ValidationMessage from "../../Validation/ValidationMessage";
import queryString from "query-string";

class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      isTermsAndConditionsAccepted: false,
      username: "",
      password: "",
      isLoading: false,
      logInError: "",
      errMsg: {},
      errFlag: {},
    };
  }

  componentWillMount() {
    if (this.props.isUserAuthenticated) {
      this.props.history.push("/dashboard/basic");
    } else {
      this.props.LOGOUT();
    }
  }

  // componentWillUpdate() {

  // }

  onHandleValidation = (fieldName, fieldValue) => {
    const data = this.state;
    data[fieldName] = fieldValue;
    const { username, password, errMsg, errFlag } = data;

    if (!username) {
      errMsg["username"] = `Please provide username`;
      errFlag["username"] = false;
    } else if (username.length < 3) {
      errMsg["username"] = `Username should have minimum 3 characters `;
      errFlag["username"] = false;
    } else {
      errMsg["username"] = "";
      errFlag["username"] = true;
    }

    if (!password) {
      errMsg["password"] = `Password is required.`;
      errFlag["password"] = false;
    } else {
      errMsg["password"] = "";
      errFlag["password"] = true;
    }

    this.setState({
      errMsg: { ...errMsg },
      errFlag: { ...errFlag },
    });
  };

  /* On Input Changed */
  onInputChanged = (event) => {
    let { name, value } = event.target;
    if (this.props.authLoginError) {
      this.props.SET_LOGIN_AUTH_ERROR(null);
    }
    if (this.state.logInError) {
      this.setState({
        logInError: "",
      });
    }
    this.setState(
      {
        [name]: value,
      },
      this.onHandleValidation(name, value)
    );
  };

  onLogInUser = async (event) => {
    const { username, password, errFlag, isTermsAndConditionsAccepted } = this.state;

    this.onHandleValidation();
    if (Object.values(errFlag).indexOf(false) >= 0) {
      return;
    }

    if (!isTermsAndConditionsAccepted) {
      // console.log(`Please accept terms and conditions:`);
      this.setState({
        logInError: "Please Accept Terms and Conditions*",
      });
      return;
    }

    this.setState({
      isLoading: true,
    });

    let payload = {
      username,
      password,
    };

    await this.props.SET_USER_LOGIN(payload);

    this.setState({
      isLoading: false,
    });

    if (this.props.authLoginError) {
      this.setState({ logInError: this.props.authLoginError });
      this.props.SET_LOGIN_AUTH_ERROR(null);
      return;
    }

    if (this.props.isUserAuthenticated && Auth.data) {
      let queryParams = queryString.parse(this.props.location.search);
      var urlEncodedRedirectTo = queryParams.redirectURL;
      if (urlEncodedRedirectTo) {
        let redirectTo = decodeURIComponent(urlEncodedRedirectTo);
        this.props.history.push(redirectTo);
      } else {
        this.props.history.push("/dashboard/basic");
      }
    }
    let keysToRemove = [
      "selectedRequestType",
      "selectedStatus",
      "selectedCountry",
      "selectedProgram",
      "selectedClient",
    ];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  };

  navigateToForget = () => {
    this.props.history.push("/home/forgotpassword");
  };
  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div style={{ position: "relative" }}>
            <div className="signup__container">
              {/* <div className="container__child signup__thumbnail">
                          <div className="thumbnail__content text-center">
                            <h1 className="heading--primary">Welcome to TES.</h1>
                            <h2 className="heading--secondary">Are you ready to Login?</h2>
                          </div>
                          
                          <div className="signup__overlay"></div>
                        </div> */}
              <div className="container__child signup__form">
                <div className="login-card-header">
                  <div className="icon-xl-wrapper">
                    {/* <img
                      src={require("../../../assets/utils/images/teslogo.png")}
                      alt="Logo"
                      height="100px"
                      width="100px"
                    /> */}

                    {/* <i className="lnr-laptop-phone icon-gradient bg-mean-fruit"> </i> */}
                  </div>

                  <div>
                    <h2 className="text-center mt-2">SIGN IN</h2>
                  </div>
                  {/* <div className="mt-4">Enter your username and we will send you the OTP for reset your Password</div> */}
                </div>
                <FormGroup>
                  <Label for="usernameInput">Username</Label>
                  <InputGroup>
                    <Input
                      type="text"
                      id="usernameInput"
                      className="form-control"
                      placeholder="User Name"
                      name="username"
                      value={this.state.username}
                      required
                      onChange={this.onInputChanged}
                      autoFocus
                      style={{ maxWidth: "500px" }}
                    />
                  </InputGroup>
                  <ValidationMessage valid={this.state.errFlag.username} message={this.state.errMsg.username} />
                </FormGroup>

                <FormGroup>
                  <Label for="passwordInput">Password</Label>
                  <InputGroup>
                    <Input
                      type={this.state.isShowPwd ? "text" : "password"}
                      style={{ borderRight: "none", maxWidth: "500px" }}
                      name="password"
                      id="passwordInput"
                      placeholder="Password"
                      value={this.state.password}
                      required
                      onChange={this.onInputChanged}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text"
                        style={{ background: "none" }}
                        onMouseUp={() => {
                          this.setState({ isShowPwd: !this.state.isShowPwd });
                        }}
                        onMouseDown={() => {
                          this.setState({ isShowPwd: !this.state.isShowPwd });
                        }}
                      >
                        {this.state.isShowPwd ? (
                          <FontAwesomeIcon icon={faEye} />
                        ) : (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        )}
                      </span>
                    </div>
                  </InputGroup>

                  <ValidationMessage valid={this.state.errFlag.password} message={this.state.errMsg.password} />
                </FormGroup>

                <FormGroup check>
                  <Input
                    type="checkbox"
                    name="check"
                    id="exampleCheck"
                    checked={this.state.isTermsAndConditionsAccepted}
                    onChange={() => {
                      this.setState({ isTermsAndConditionsAccepted: !this.state.isTermsAndConditionsAccepted });
                    }}
                  />
                  <Label for="exampleCheck" check>
                    {" "}
                    I accept the Tes-amm <a href="/policy">Privacy Policy</a> and{" "}
                    <NavLink to="/terms">Terms of Use</NavLink>
                  </Label>
                </FormGroup>

                <div className="mt-4">
                  <ul className="list-inline text-right">
                    <li>
                      <Button className="float-left" color="link" onClick={this.navigateToForget}>
                        Forgot Password?
                      </Button>
                      <Button
                        color="primary"
                        className="btn btn--form"
                        type="button"
                        onClick={this.onLogInUser}
                        disabled={this.state.isLoading}
                      >
                        {this.state.isLoading ? (
                          <span style={{ marginRight: "5px" }}>
                            <FontAwesomeIcon icon={faSpinner} spin />{" "}
                          </span>
                        ) : null}
                        Sign in
                      </Button>
                    </li>
                  </ul>
                </div>
                {this.state.logInError ? (
                  <div className="alert alert-danger">
                    <span className="text-danger">*</span>
                    {` ` + this.state.logInError}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    isUserAuthenticated: state.auth.isUserAuthenticated,
    authLoginError: state.auth.authLoginError,
  };
};

const mapDispatchToProps = {
  SET_USER_LOGIN: (payload) => SET_USER_LOGIN(payload),
  SET_LOGIN_AUTH_ERROR: (message) => SET_LOGIN_AUTH_ERROR(message),
  LOGOUT: () => LOGOUT(),
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
