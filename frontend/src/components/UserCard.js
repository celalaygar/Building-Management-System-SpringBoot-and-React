import defaultPicture from "../assets/profile.png"
import React, { useEffect, useState } from 'react'
import AlertifyService from '../Services/AlertifyService';
import UserService from '../Services/UserService';
import ProfileImage from "./ProfileImage";

const UserCard = (props) => {
    const [user, setUser] = useState({});
    const [notFound, setNotFound] = useState({});
    const [editable, setEditable] = useState(false);

    // useEffect(()=>{setNotFound(false);},[user])

    useEffect(() => {
        setUser(props.user);
        setNotFound(props.notFound);
        setEditable(props.editable);
        // const loadUser = async () => {

        //     try {
        //         const response = await UserService.getUserByUsername(props.username);
        //         setUser(response.data);

        //     } catch (error) {
        //         console.log(error)
        //         AlertifyService.alert("User not found !!");
        //         setNotFound(true);
        //     }
        // };
        // loadUser();
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
                <div class="card " >
                <div class="card-header text-center">    
                <ProfileImage 
                    width="200px" 
                    imageSource={imageSource} 
                    username={username} 
                />                
                    {/* <img
                        className="rounded-circle shadow"
                        width="200px"
                        src={imageSource}
                        alt={username + '-progile-icon'} /> */}
                </div>
                    <ul class="list-group list-group-flush ">
                        <li class="list-group-item"><b>username :</b> {username}</li>
                        <li class="list-group-item"><b>fullName :</b> {fullName}</li>
                        <li class="list-group-item"><b>email : </b>{email}</li>
                        <li class="list-group-item"><b>bornDate :</b> {bornDate}</li>
                    </ul>
                    {
                        editable && 
                        <div class="card-body">
                            <a href="#" class="card-link">Update</a>
                            <a href="#" class="card-link">Delete</a>
                        </div>
                    }

                </div>


            </div>
        )
    }


};

export default UserCard;
