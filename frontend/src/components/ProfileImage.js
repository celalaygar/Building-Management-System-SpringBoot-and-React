import React from 'react'
import defaultPicture from "../assets/profile.png"
import { BACKEND_IMAGE_URL } from '../Shared/config';

const ProfileImage = (props) => {

    const {width, height, imageSource, newimage,username} = props;
    let source = defaultPicture ;
    if(imageSource !== defaultPicture)
        source = BACKEND_IMAGE_URL + imageSource;
    
    return (
            <img 
                className="rounded-circle shadow" 
                width={width} 
                height={height}
                src={newimage || source }  
                onError={event => event.target.src = defaultPicture } 
                alt={username+'-progile-icon'} />
    )
}

export default ProfileImage
