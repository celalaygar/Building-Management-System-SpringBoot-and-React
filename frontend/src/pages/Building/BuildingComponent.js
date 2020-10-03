
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class BuildingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: null,
          isLoggedIn: null,
          jwttoken: null,
          email: null,
          image: null
        };
      }
    render() {
        const {username /*,jwttoken,isLoggedIn,email,image*/} = this.props;
        const { t } = this.props;
        return (
            <div className="col-lg-12">
                <h5 className="card-header text-center">{username+" "+t("Building for")} </h5>
                <div className="card-body">
                </div>

            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn,
        username: store.username,
        jwttoken: store.jwttoken
    };
};

export default connect(mapStateToProps)(withTranslation()(BuildingComponent));