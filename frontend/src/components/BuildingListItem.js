

import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BuildingListItem = (props) => {
    const { t } = useTranslation
        ();

    const reduxStore = useSelector((store) => {
        return {
            isLoggedIn: store.isLoggedIn,
            username: store.username,
            email: store.email,
            jwttoken: store.jwttoken,
            password: store.password,
            image: store.image
        };
    })

    const { building } = props;
    const { id: buildingId, buildingName, buildingAdress, createdUser, adress } = building;
    const { username, fullName, email } = createdUser;
    const { city, district } = adress;
    return (
        <div className="card mt-2" >
            <div className="card ">
                <h5 className="card-header">{t("Building Name")} : {buildingName}</h5>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{t("Building Adress")} : {buildingAdress}</li>
                </ul>
                <div className="card-body">
                    <a className="btn btn-sm btn-secondary" >{t("insert Flat")}</a>
                    <Link to={'/building-card/' + buildingId} className="btn btn-sm btn-success" >{t("show")}</Link>
                    <Link to={'/update-building/' + buildingId} className="btn btn-sm btn-info" >{t("update")}</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h6 className="card-header">{t("Registered by")}</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{t("Username")} : {username} </li>
                        <li className="list-group-item">{t("Full Name")} : {fullName} </li>
                        <li className="list-group-item">{t("Email")} : {email} </li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h6 className="card-header">{t("Address")}</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{t("city")} : {city} </li>
                        <li className="list-group-item">{t("district")} : {district} </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default BuildingListItem
