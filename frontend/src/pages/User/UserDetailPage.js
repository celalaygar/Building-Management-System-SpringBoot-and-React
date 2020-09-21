import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import ProfileCard from '../../components/ProfileCard'
import UserCard from '../../components/UserCard'

class UserDetailPage extends Component {
    render() {
        //console.log(this.props.match.params.username)
        let message ="we can not edit";
        let editable = false;
        if(this.props.username === this.props.match.params.username){
            message = 'we can edit';
            editable= true;
        }
        return (
            <div>
                <div className="col-lg-12">
                    <h5>User Detail ({message})</h5>
                    <hr />
                </div>
                <div className="col-lg-12">
                    <UserCard username={this.props.match.params.username} editable={editable}/>
                    {/* <ProfileCard currentUser={this.props.match.params.username} /> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn,
        username: store.username,
        email: store.email,
        jwttoken: store.jwttoken,
        password: store.password,
        image: store.image
    };
};
// export default connect(mapStateToProps)(withRouter(ProfileCard)) ;
export default connect(mapStateToProps)(withTranslation()(UserDetailPage));