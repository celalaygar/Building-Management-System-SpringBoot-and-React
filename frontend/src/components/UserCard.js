import defaultPicture from "../assets/profile.png"
import React, { useEffect, useState } from 'react'
import ProfileImage from "./ProfileImage";
import { useTranslation } from "react-i18next";

const UserCard = (props) => {
    // const [changeUsername, setChangeUsername] = useState();
    const [user, setUser] = useState({});
    // const [editable, setEditable] = useState(false);
    // const [inEditMode, setInEditMode] = useState(false);


    const {  username,  fullName, image, email, bornDate } = user;
    let imageSource = defaultPicture;
    const { t } = useTranslation();

    useEffect(() => {
        setUser(props.user);
        // setEditable(props.editable);
    }, [props.user])

    // const onChangeInputStatus = (data) => {
    //     setInEditMode(data)
    //     !data ? setChangeUsername(undefined) : setChangeUsername(username);
    // }
    // const onChangeData = (type, event) => {
    //     //if(type==='changeUsername')
    //     setChangeUsername(event)
    //     //console.log("there no suitable parameter to change")
    // }
    const onClickSave = async () => {
        // console.log("saved username : " + changeUsername)
        // const body = {
        //     id: id,
        //     username: changeUsername,
        //     name: name,
        //     surname: surname,
        //     email: email,
        //     bornDate: bornDate
        // }
        // try {
        //     const response = await UserService.update(username, body);
        //     console.log(response.data)
        //     onChangeInputStatus(false)
        // } catch (error) {
        //     console.log(error)
        // }
    }

    if (image !== null) {
        imageSource = image;
    }

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
                    // editable &&
                    // <div className="card-body">
                    //     <button onClick={e => onChangeInputStatus(true)} className="btn btn-sm btn-success">{t('Edit')} </button>
                    //     {/* <button href="#" className="card-link">{t('Delete')} </button> */}
                    // </div>
                }
                {
                    // inEditMode &&
                    // <div>
                    //     <h5 className="card-header text-center">{t("Change User Name")}</h5>
                    //     <Input
                    //         label={t("Change User Name")}
                    //         //error={username}
                    //         type="text"
                    //         name="changeUsername"
                    //         placeholder={t("Username *")}
                    //         defaultValue={changeUsername}
                    //         onChangeData={onChangeData}
                    //     />
                    //     <button onClick={onClickSave} className="btn btn-sm btn-info ">{t('Save')} </button>
                    //     <button onClick={e => onChangeInputStatus(false)} className="btn btn-sm btn-danger float-right">{t('Cancel')} </button>
                    // </div>
                } 


            </div>
            <hr />

        </div>
    )


};

export default UserCard;
