import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import ProfileCard from '../../components/ProfileCard'
import UserCard from '../../components/UserCard'
import AlertifyService from '../../Services/AlertifyService';
import UserService from '../../Services/UserService';

class UserDetailPage extends Component {

    state = {
        user: {}
    };
    componentDidMount(){
        this.loadUser();
    }

    loadUser = async () => {
            
        try {
            const response = await UserService.getUserByUsername(this.props.match.params.username);
            this.setState({user:response.data});
            // setUser(response.data);
            
        } catch (error) {
            console.log(error)
            AlertifyService.alert("User not found !!");
            // setNotFound(true);
        }
    }
    render() {
        //console.log(this.props.match.params.username)
        const {t} = this.props;
        let message ="we can not edit";
        let editable = false;
        if(this.props.username === this.props.match.params.username){
            message = 'we can edit';
            editable= true;
        }
        return (
            <div>
                <div className="col-lg-12">
                    <h5>{t('User Detail')} ({message})</h5>
                    <hr />
                </div>
                <div className="col-lg-12">
                    <UserCard user={this.state.user} image={this.props.image} username={this.props.match.params.username} editable={editable}/>
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