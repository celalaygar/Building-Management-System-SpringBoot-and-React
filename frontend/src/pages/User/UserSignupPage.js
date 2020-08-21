import React, { Component } from 'react'
import UserService from '../../Services/UserService';
import * as alertify from 'alertifyjs';
import "alertifyjs/build/css/alertify.css";
import AlertifyService from '../../Services/AlertifyService';
import Input from '../../components/input';

export default class UserSignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            username: '',
            email: '',
            password: '',
            repeatPassword: "",
            name: '',
            surname: '',
            errors: {
            }
        };
        this.onChangeData = this.onChangeData.bind(this);
    }

    onChangeData(type, event) {
        const stateData = this.state;
        stateData[type] = event

        const errors = { ...this.state.errors }
        errors[type] = undefined;

        if (type === 'password' || type === "repeatPassword") {
            if (type === 'password' && event !== this.state.repeatPassword) {
                errors.repeatPassword = "Password mismatch"
            } else if (type === 'repeatPassword' && event !== this.state.password) {
                errors.repeatPassword = "Repeat password mismatch"
            } else {
                errors.repeatPassword = undefined;
            }
        }




        this.setState({ stateData, errors: errors });
    }
    onClickSignUp = async (e) => {
        // browser form içeriğini bir yere göndermesini engeller.
        // browserin bizim yerimize bir şey yapmasını engellemiş oluyoruz.
        e.preventDefault();
        this.setState({ errors: {} })
        let data = this.state;
        console.log(data)
        try {
            const response = await UserService.post(this.state);

            //to control that password and repeatPassword must be same
            if (response.data.body.validationErrors) {
                this.setState({ errors: response.data.body.validationErrors })
            } else {
                console.log(response)
                this.setState({
                    username: '',
                    email: '',
                    password: '',
                    repeatPassword: "",
                    name: '',
                    surname: ''
                });
                this.setState({ errors: {} })
                AlertifyService.successMessage("Kayıt işlemi başarılı")
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response)
                if (error.response.data.validationErrors) {
                    console.log(error.response.data.validationErrors);
                    this.setState({ errors: error.response.data.validationErrors })
                }
            }
            else if (error.request)
                console.log(error.request);
            else
                console.log(error.message);

        }
        // .then(res=>{
        //      console.log(res.data);
        // })
        // .catch(error=> {
        //     if (error.response) {
        //         //console.log(error.response.data.message);
        //         console.log(error.response.data.message.body);
        //         AlertifyService.alert(error.response.data.message);
        //         this.setState({errors:error.response.data.message.headers.body.validationErrors})
        //     }
        //     else if (error.request) 
        //         console.log(error.request);
        //     else 
        //         console.log(error.message);
        // });
    }
    render() {
        const { username, email, password, repeatPassword } = this.state.errors;
        //const {errorUsername, errorEmail, errorPassword} = errors;
        return (
            <div className="col-lg-12">
                <h3>User Sign Up</h3>
                <hr />
                <p className="description-p" style={{ color: "red" }}>( * ) Zorunlu alanlar</p>
                <form >
                    <Input
                        label="Username *"
                        error={username}
                        type="text"
                        name="username"
                        valueName={this.state.username}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label="Email *"
                        type="email"
                        error={email}
                        name="email"
                        valueName={this.state.email}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label="Password *"
                        error={password}
                        type="password"
                        name="password"
                        valueName={this.state.password}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label="Repeat Password *"
                        error={repeatPassword}
                        type="password"
                        name="repeatPassword"
                        valueName={this.state.repeatPassword}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label="Name"
                        //error={name}
                        type="text"
                        name="name"
                        valueName={this.state.name}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label="Surname"
                        //error={name}
                        type="text"
                        name="surname"
                        valueName={this.state.surname}
                        onChangeData={this.onChangeData}
                    />
                    <button className="btn btn-primary btn-lg" type="button" disabled={repeatPassword !== undefined} onClick={this.onClickSignUp}>   Save   </button>
                </form>
            </div>
        )
    }
}
