import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import ProfileCard from '../../components/ProfileCard'
import UserCard from '../../components/UserCard'
import AlertifyService from '../../Services/AlertifyService';
import UserService from '../../Services/UserService';

class UserDetailPage extends Component {

    state = {
        user: {},
        notFound:false,
        editable:false
    };
    componentDidMount(){
        let editable = false;
        if(this.props.username === this.props.match.params.username){
            editable= true;
        }
        this.setState({editable})
        this.loadUser();
    }

    loadUser = async () => {
            
        try {
            const response = await UserService.getUserByUsername(this.props.match.params.username);
            this.setState({user:response.data});
            // setUser(response.data);
            
        } catch (error) {
            console.log(error)
            this.setState({notFound:true});
            AlertifyService.alert("User not found !!");
            // setNotFound(true);
        }
    }
    render() {
        //console.log(this.props.match.params.username)
        const {t} = this.props;
        const {user,notFound,editable}= this.state;

        return (

                <div className="col-lg-12">
                    <h5>{t('User Detail')}</h5>
                    <hr />
                    <UserCard 
                        {...this.state}
                        // user={user} 
                        // notFound={notFound} 
                        // editable={editable}
                        image={this.props.image} 
                        username={this.props.match.params.username} 
                        />
                    {/* <ProfileCard currentUser={this.props.match.params.username} /> */}
                    <hr /> <hr /> <hr /> <hr />
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