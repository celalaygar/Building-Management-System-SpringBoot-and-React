
import React, { useEffect, useState } from 'react'
import AlertifyService from '../Services/AlertifyService';
import UserService from '../Services/UserService';

const UserCard = (props) => {
    const [user, setUser] = useState();
    const [notFound, setNotFound] = useState({});

    // useEffect(()=>{setNotFound(false);},[user])

    useEffect(() => {
        setUser(props.user);
        setNotFound(props.notFound);
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

    const {username, name, surname, fullName,image, email,bornDate}= props.user;
    
    if (notFound) {
        return (
            <div className="container">
                <div className="alert alert-danger">User not found !!</div>
            </div>
        )
    } else {
        return (
            <div className="container">
            <div className="card" style={{height:"150px", width: "300px" }}>
                <img className="card-img-top" alt="data"  src={props.image}  />
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">{fullName}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Username: {props.username}</li>
                    <li className="list-group-item">Full Name: {fullName}</li>
                    <li className="list-group-item">email: {email}</li>
                    <li className="list-group-item">bornDate: {bornDate}</li>
                </ul>
                <div className="card-body">
                    Hi everybody...
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
            </div>
        )
    }


};

export default UserCard;
