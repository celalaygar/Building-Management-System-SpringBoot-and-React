import React, { Component } from 'react'
import UserService from '../../Services/UserService';
import * as alertify from 'alertifyjs';
import "alertifyjs/build/css/alertify.css";
import AlertifyService from '../AlertifyService';

export default class UserSignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            username: '',
            email:'',
            password: '',
            repeatPassword: "",
            name: '',
            surname: '',
            errors:{
            }
        };
        this.onChangeData = this.onChangeData.bind(this);
    }

    onChangeData(type, event) {
        const stateData = this.state;
        const errors = {...this.state.errors}
        errors[type] = undefined;
        stateData[type] = event
        this.setState({ stateData,errors:errors });
    }
    onClickSignUp = async (e) => {
        // browser form içeriğini bir yere göndermesini engeller.
        // browserin bizim yerimize bir şey yapmasını engellemiş oluyoruz.
        e.preventDefault(); 
        this.setState({errors:{} })
        let data = this.state;
        console.log(data)
        try {
            const response = await UserService.post(this.state);
            if(response.data.body.validationErrors){ 
                this.setState({errors:response.data.body.validationErrors})
            }else{
                console.log(response)
                this.setState({ 
                    username: '',
                    email:'',
                    password: '',
                    repeatPassword: "",
                    name: '',
                    surname: ''
                });
                this.setState({errors:{} })
                AlertifyService.successMessage("Kayıt işlemi başarılı")
            }
        } catch (error) {
            if(error.response)
                this.setState({errors:error.response})
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
        const {username,email,password} = this.state.errors;
        //const {errorUsername, errorEmail, errorPassword} = errors;
        return (
            <div className="col-lg-12">
                <h5>User Sign Up</h5>
                
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input
                            type="text" className={username ?  "form-control is-invalid" : "form-control"} 
                            name="username"
                            onChange={e => this.onChangeData("username", e.target.value)}
                            value={this.state.username}
                            placeholder="Enter Username"  required/>
                            <div className="invalid-feedback">{username}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                            type="text" className={email ?  "form-control is-invalid" : "form-control"} 
                            name="email"
                            onChange={e => this.onChangeData("email", e.target.value)}
                            value={this.state.email}
                            placeholder="Enter Email" required/>
                            <div className="invalid-feedback">{email}</div>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input
                            type="password" className={password ?  "form-control is-invalid" : "form-control"} 
                            name="password"
                            onChange={e => this.onChangeData("password", e.target.value)}
                            value={this.state.password}
                            placeholder="Enter Password" required />
                            <div className="invalid-feedback">{password}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Repeat Password</label>
                        <input
                            type="password" className="form-control"
                            name="repeatPassword"
                            onChange={e => this.onChangeData("repeatPassword", e.target.value)}
                            value={this.state.repeatPassword}
                            placeholder="Enter Username" required/>
                    </div>
                    <div className="invalid-feedback"></div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                            type="text" className="form-control"
                            name="name"
                            onChange={e => this.onChangeData("name", e.target.value)}
                            value={this.state.name}
                            placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Surname</label>
                        <input
                            type="text" className="form-control"
                            name="surname"
                            onChange={e => this.onChangeData("surname", e.target.value)}
                            value={this.state.surname}
                            placeholder="Enter Username" />
                    </div>
                     <button className="btn btn-success" type="button" onClick={this.onClickSignUp}>   Save   </button>
                </form>
            </div>
        )
    }
}
