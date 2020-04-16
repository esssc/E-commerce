import React from "react";

import "./sign-in.styles.scss";

class SignIn extends React.Component {

    state = {
        email: "",
        password: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: "", password: ""});
    };

    onChangeHandler = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        required/>
                    <label htmlFor="email">Email</label>

                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        required/>
                    <label htmlFor="password">Password</label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SignIn;