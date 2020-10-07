import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import BuildingSubmit from '../components/BuildingSubmit';
import UserList from '../components/UserList';


class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: null,
            password: ''
        };

    }
    render() {

        return (
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <h3>Home Page</h3>
                        <hr />
                    </div>

                    <div className="col-lg-7">
                        
                        <BuildingSubmit />
                    </div>
                    <div className="col-lg-5">
                        <UserList />
                    </div>
                    <div className="col-lg-12">
                    <hr/><hr/><hr/><hr/><hr/><hr/><hr/>
                    </div>
                   
                </div>
            </div>

        )
    }
}
const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn,
        username: store.username,
        jwttoken: store.jwttoken,
        image: store.image,
    };
};
export default connect(mapStateToProps)(withTranslation()(HomeComponent));