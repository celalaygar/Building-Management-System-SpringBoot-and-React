import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import UserService from '../Services/UserService';

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            jwttoken: props.jwttoken
        };
    }

    componentDidMount() {
        this.getUsers();
        
    }
    getUsers  =() =>{
        // const res = await UserService.getUsers('/users',this.state.jwttoken)
        // console.log(res.data)
        UserService.getUsers('/users' ).then(res => {
            console.log(res.data);
            this.setState({ users: res.data });
        });
    }
    onDeleteUser = (index)=>{
        console.log("Delete button clicked: "+index)
        const users = [...this.state.users];
        users.splice(index,1);
        this.setState({users})
    }
    render() {
        const {users} = this.state;
        const {t} = this.props;
        return (
                <div className="card">
                <h5 className="card-header">{t('Users')}</h5>
                <div className="list-group-flush">
                    {users.map((user,index) => 
                        <div 
                        className="list-group-item list-group-item-action"
                            key={user.username} 
                        >{index} : {user.username} </div>
                                )

                    }
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
export default connect(mapStateToProps)(withTranslation()(UserList));