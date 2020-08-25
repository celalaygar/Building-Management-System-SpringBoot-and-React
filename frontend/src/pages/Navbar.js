
import React, { Component } from 'react'

export default class NavbarComponent extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/index">Home Page <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Signup Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Login Page</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
