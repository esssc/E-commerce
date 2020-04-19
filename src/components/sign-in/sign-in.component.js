import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttton.component";


import { auth, signWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";


class SignIn extends React.Component {

    state = {
        email: "",
        password: ""
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword( email, password );
            this.setState({email: "", password: ""});

        } catch (error) {
            console.log(error)
        }


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

                        <div className="buttons">
                            <CustomButton type="submit">Sign in</CustomButton>
                            <CustomButton onClick={signWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                        </div>
                </form>
            </div>
        );
    }
}

export default SignIn;