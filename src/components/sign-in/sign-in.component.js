import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttton.component";


import { singInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";


class SignIn extends React.Component {

    state = {
        email: "",
        password: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email, this.state.password);
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
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChangeHandler={this.onChangeHandler}
                        label="Email"
                        required/>

                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        onChangeHandler={this.onChangeHandler}
                        required/>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={singInWithGoogle} >Sign in with Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;