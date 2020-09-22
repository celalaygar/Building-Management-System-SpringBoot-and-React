import React, { Component, useEffect, useState } from 'react'
import { useTranslation, withTranslation } from 'react-i18next';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileCard from '../../components/ProfileCard'
import UserCard from '../../components/UserCard'
import AlertifyService from '../../Services/AlertifyService';
import UserService from '../../Services/UserService';

const UserDetailPage = (props) => {
    const [user, setUser] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [editable, setEditable] = useState(false);
    const { username } = useParams();
    const { t } = useTranslation();
    const reduxStore = useSelector((store) =>{
        return {
            isLoggedIn: store.isLoggedIn,
            username: store.username,
            email: store.email,
            jwttoken: store.jwttoken,
            password: store.password,
            image: store.image
        };
    })
    console.log(reduxStore)
    useEffect(() => {
        loadUser()
    }, [username])
    const loadUser = async () => {
        let editable = false;
        if(reduxStore.username === username){
            editable= true;
        }
        setEditable(editable);
        try {
            const response = await UserService.getUserByUsername(username);
            setUser(response.data)
            
        } catch (error) {
            console.log(error)
            AlertifyService.alert("User not found !!");
            setNotFound(true);
        }
    }

    return (
            <div className="col-lg-12">
                <h5>{t('User Detail')} </h5>
                <hr />
                <UserCard 
                    user={user} 
                    notFound={notFound} 
                    editable={editable}
                    username={username} 
                    /> 
            </div>
    )
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