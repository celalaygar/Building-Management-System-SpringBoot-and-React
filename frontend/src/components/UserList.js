import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import UserService from '../Services/UserService';
import UserListItem from './UserListItem';

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: {
                content:[],
                number:0,
                size:3,
            },
            jwttoken: props.jwttoken
        };
    }

    componentDidMount() {
        this.getUsers(this.state.page.number,this.state.page.size);
        
    }
    getUsers  =(number,size) =>{
        // const res = await UserService.getUsers('/users',this.state.jwttoken)
        // console.log(res.data)
        UserService.getUsers(number,size ).then(res => {
            console.log(res.data);
            this.setState({ page: res.data });
        });
    }
    onClickNext = ()=>{
        const nextPage = this.state.page.number+1;
        this.getUsers(nextPage,this.state.page.size);
    }
    onClickPrevios = ()=>{
        const nextPage = this.state.page.number-1;
        this.getUsers(nextPage,this.state.page.size);
    }
    // onDeleteUser = (index)=>{
    //     console.log("Delete button clicked: "+index)
    //     const users = [...this.state.users];
    //     users.splice(index,1);
    //     this.setState({users})
    // }
    render() {
        const {content:users, first, last} = this.state.page;
        console.log(first)
        console.log(last)
        const {t} = this.props;
        return (
                <div className="card">
                <h5 className="card-header">{t('Users')}</h5>
                <div className="list-group-flush">
                    {users.map((user,index) => 
                        <UserListItem
                            key={user.username} 
                            user={user} 
                            index={index} 
                        />
                        )
                    }
                </div>
                <div>
                    <hr/>
                    {first === false && <button onClick={this.onClickPrevios} className="btn btn-light btn-sm">{t('Previous')}</button>}
                    {last === false && <button onClick={this.onClickNext} className=" btn btn-light btn-sm float-right">{t('Next')}</button>}
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