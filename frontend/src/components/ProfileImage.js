
import React from 'react'

const ProfileImage = (props) => {


    return (
            <img 
                className="rounded-circle shadow" 
                width={props.width} 
                height={props.height}
                src={props.imageSource}   
                alt={props.username+'-progile-icon'} />
    )
}

export default ProfileImage
