import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UpdateUserForm from '../../components/UpdateUserForm';
import UserCard from '../../components/UserCard'
import AlertifyService from '../../Services/AlertifyService';
import UserService from '../../Services/UserService';

const UserDetailPage = (props) => {
    const [user, setUser] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [editable, setEditable] = useState(false);
    const [inEditMode, setInEditMode] = useState(false);
    const { username } = useParams(); // this.props.match.params.username
    const { t } = useTranslation();
    const reduxStore = useSelector((store) => {
        return {
            isLoggedIn: store.isLoggedIn,
            username: store.username,
            email: store.email,
            jwttoken: store.jwttoken,
            password: store.password,
            image: store.image
        };
    })
    //console.log(reduxStore)
    useEffect(() => {
        loadUser()
    }, [username,inEditMode])

    const loadUser = async () => {
        setNotFound(false)
        setEditable(false);
        if (reduxStore.username === username) {
            setEditable(true);
        }

        try {
            const response = await UserService.getUserByUsername(username);
            setUser(response.data)

        } catch (error) {
            console.log(error)
            AlertifyService.alert("User not found !!");
            setNotFound(true);
        }
    }
    const showUpdateForm = (control) =>{
        setInEditMode(control);
    }
    
    if (notFound) {
        return (
            <div className="container">
                <div className="alert alert-danger">User not found !!</div>
            </div>
        )
    } else if(!notFound) {
        return (
            <div className="col-lg-12">
                <h5>{t('User Detail')} </h5>
                <hr />
                <UserCard
                    user={user} 
                    editable={editable}
                    username={username}
                />
                {
                    editable &&
                    <div className="card-body">
                        { !inEditMode ?
                            <button 
                                onClick={e => showUpdateForm(true)} 
                                className="btn btn-sm btn-success">{t('Edit')}</button> 
                                :
                            <button 
                                onClick={e => showUpdateForm(false)} 
                                className="btn btn-sm btn-danger">{t('Cancel')} </button>

                        }
                        
                    </div>
                }
                { inEditMode &&
                    <UpdateUserForm 
                        user = {user}
                        inEditMode = {inEditMode}
                        showUpdateForm={showUpdateForm}
                    />
                }
            </div>
        )
    }
};
// const mapStateToProps = (store) => {
//     return {
//         isLoggedIn: store.isLoggedIn,
//         username: store.username,
//         email: store.email,
//         jwttoken: store.jwttoken,
//         password: store.password,
//         image: store.image
//     };
// };
// export default connect(mapStateToProps)(withRouter(ProfileCard)) ;
//export default connect(mapStateToProps)(serDetailPage);
export default UserDetailPage;