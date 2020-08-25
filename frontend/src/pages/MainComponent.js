import React, { Component } from 'react'

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: null,
            password: '' 
        };
        
    }
    componentDidMount() {
        if( localStorage.getItem('username') ||  localStorage.getItem('jwttoken')){
            console.log(localStorage.getItem('username')+" "+localStorage.getItem('jwttoken'))
            this.setState({
                username: localStorage.getItem('username'),
                jwttoken: localStorage.getItem('jwttoken'),
            });
        }

    }
    handleLogout() {
        localStorage.clear();
        window.location.href = "/";
      }
    render() {
        return (
            <div className="col-lg-12">
                <h5>Home Page</h5>
                <hr />
                <button 
                    onClick={this.handleLogout}
                    className="brn btn-sm btn-danger">
                    <i className="ti-power-off mR-10"></i>
                    <span>Logout</span>
                </button>
            </div>
        )
    }
}
