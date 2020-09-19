
import React from 'react'
import { Link } from 'react-router-dom';
import defaultPicture from "../assets/profile.png"


const UserListItem = (props) => {

    const {user, index} = props;
    let imageSource = defaultPicture;
    if(user.image)
        imageSource=user.image;
    return (
        <Link to={'/user/'+user.username} className="list-group-item list-group-item-action" >
            <img 
                className="rounded-circle" 
                width="32" 
                height="32" 
                src={imageSource}   
                alt={user.username+'-progile-icon'} />
                <span className="pl-3">{index} : {user.username} </span>
        </Link>
    )
}

export default UserListItem
