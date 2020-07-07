import React, { Component } from 'react'

export default class UserSignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatPassword: "",
            name: '',
            surname: ''
        };
        this.onChangeData = this.onChangeData.bind(this);
    }

    onChangeData(type, event) {
        const stateData = this.state;
        stateData[type] = event
        this.setState({ stateData });
    }
    saveUser = (e) => {
        console.log(this.state);
    }
    render() {
        return (
            <div className="col-lg-12">
                <h5>Sign Up</h5>
                
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input
                            type="text" className="form-control"
                            name="username"
                            onChange={e => this.onChangeData("username", e.target.value)}
                            value={this.state.username}
                            placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input
                            type="password" className="form-control"
                            name="password"
                            onChange={e => this.onChangeData("password", e.target.value)}
                            value={this.state.password}
                            placeholder="Enter Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Repeat Password</label>
                        <input
                            type="text" className="form-control"
                            name="repeatPassword"
                            onChange={e => this.onChangeData("repeatPassword", e.target.value)}
                            value={this.state.repeatPassword}
                            placeholder="Enter Username" />
                    </div>
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
                     <button className="btn btn-success" type="button" onClick={this.saveUser}>   Save   </button>
                </form>
            </div>
        )
    }
}
