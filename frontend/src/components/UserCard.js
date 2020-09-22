import defaultPicture from "../assets/profile.png"
import React, { useEffect, useState } from 'react'
import AlertifyService from '../Services/AlertifyService';
import UserService from '../Services/UserService';
import ProfileImage from "./ProfileImage";
import { useTranslation } from "react-i18next";

const UserCard = (props) => {
    const [user, setUser] = useState({});
    const [notFound, setNotFound] = useState({});
    const [editable, setEditable] = useState(false);

    const {t}= useTranslation();
    
    useEffect(()=>{setNotFound(false);},[user])

    useEffect(() => {
        setUser(props.user);
        setNotFound(props.notFound);
        setEditable(props.editable);
    }, [props.user, props.notFound])

    const { username, name, surname, fullName, image, email, bornDate } = user;
    let imageSource = defaultPicture;

    if(image !== null) {
        imageSource = image;
    }

    if (notFound) {
        return (
            <div className="container">
                <div className="alert alert-danger">User not found !!</div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="card " >
                <div className="card-header text-center">    
                <ProfileImage 
                    width="200px" 
                    imageSource={imageSource} 
                    username={username} 
                /> 
                </div>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item"><b>username :</b> {username}</li>
                        <li className="list-group-item"><b>Full Name :</b> {fullName}</li>
                        <li className="list-group-item"><b>email : </b>{email}</li>
                        <li className="list-group-item"><b>bornDate :</b> {bornDate}</li>
                    </ul>
                    {
                        editable && 
                        <div className="card-body">
                            <button href="#" className="btn btn-sm btn-success">{t('Edit')} </button>
                            {/* <button href="#" className="card-link">{t('Delete')} </button> */}
                        </div>
                    }

                </div>


            </div>
        )
    }


};

export default UserCard;
