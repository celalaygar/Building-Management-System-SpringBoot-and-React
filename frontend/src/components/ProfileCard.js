import React from 'react'
import { withRouter } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const ProfileCard = props =>  {
    const {isLoggedIn,username ,email,password ,image } = useSelector(store =>{
        return {
            isLoggedIn: store.isLoggedIn,
            username: store.username,
            email: store.email,
            jwttoken: store.jwttoken,
            password: store.password,
            image: store.image
        };
    });
    console.log(props.currentUser)
    return (
        <div>
            <div className="card"   
                style={{width:"300px"}}>
                <img className="card-img-top" alt="data"  src={image}  />
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">{isLoggedIn}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">username: {props.currentUser}</li>
                    <li className="list-group-item">email: {email}</li>
                    <li className="list-group-item">password: {password}</li>
                    <li className="list-group-item">isLoggedIn: {isLoggedIn ? "true": "false"}</li>
                    <li className="list-group-item">My Target are </li>
                    <li className="list-group-item">My Target</li>
                </ul>
                <div className="card-body">
                    Hi everybody...
                    {/* <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    );
    // render() {
    // }
}
export default withRouter(ProfileCard);
// const mapStateToProps = (store) => {
//     return {
//         isLoggedIn: store.isLoggedIn,
//         username: store.username,
//         email: store.email,
//         jwttoken: store.jwttoken,
//         password: store.password,
//         image: store.image
//     };
//   };
// export default connect(mapStateToProps)(withRouter(ProfileCard)) ;