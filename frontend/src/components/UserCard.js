
import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService';

const UserCard = (props) => {
    const [user, setUser] = useState();
    const [notFound, setNotFound] = useState();

    useEffect(()=>{setNotFound(false);},[user])

    useEffect(() => {
        const loadUser = async () => {
            
            try {
                const response = await UserService.getUserByUsername(props.username);
                setUser(response.data);
            } catch (error) {
                console.log(error)
                setNotFound(true);
            }
        };
        loadUser();
    }, [props.username])

    if (notFound) {
        return (
            <div className="container">
                <div className="alert alert-danger">User not found !!</div>
            </div>
        )
    } else {
        return (
            <div className="container">
            <div className="card" style={{ width: "300px" }}>
                {/* <img className="card-img-top" alt="data"  src={user.image}  /> */}
                <div className="card-body">
                    {/* <h5 className="card-title">{user.username}</h5> */}
                    <p className="card-text">Hello</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">username: {props.username}</li>
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
