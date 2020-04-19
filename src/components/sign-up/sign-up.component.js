import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttton.component";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";


import "./sign-up.styles.scss";


class SignUp extends React.Component {

    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    onChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState( { [name]: value })
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, password, email, confirmPassword } = this.state;

        if (!password === confirmPassword) {
            alert("Passwords dont match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState( {
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

        } catch (error) {
            console.log(error)
        }
    };

    render() {
        const {displayName, password, email, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Your name"
                        value={displayName}
                        required
                        onChange={this.onChangeHandler}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label="Your email"
                        value={email}
                        required
                        onChange={this.onChangeHandler}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Your password"
                        value={password}
                        required
                        onChange={this.onChangeHandler}
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm password"
                        value={confirmPassword}
                        required
                        onChange={this.onChangeHandler}
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );


    }
}

export default SignUp;
