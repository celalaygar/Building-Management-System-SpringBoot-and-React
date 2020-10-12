
import React from 'react'
import { useTranslation } from 'react-i18next'
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BuildingCard = (props) => {

    const { t } = useTranslation();
    
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
    return (
        <div className="card mt-1" >

            <div className="card-body flex-row">
                <h5 className="card-title">{building.buildingName}</h5>
                <p className="card-text">{building.buildingAdress}</p>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h5 className="card-header">{t("Registered by")}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{t("Name")} : {building.createdUser.name} </li>
                        <li className="list-group-item">{t("Surname")} : {building.createdUser.surname} </li>
                        <li className="list-group-item">{t("Email")} : {building.createdUser.email} </li>
                        <li className="list-group-item">
                            {t("Born Date")} : <Moment format="YYYY / MM / DD  HH:mm">{building.createdUser.bornDate}</Moment>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h5 className="card-header">{t("Address")}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{t("city")} : {building.adress.city} </li>
                        <li className="list-group-item">{t("district")} : {building.adress.district} </li>
                        <li className="list-group-item">{t("quarter")} : {building.adress.quarter} </li>
                        <li className="list-group-item">{t("street")} : {building.adress.street} </li>
                        <li className="list-group-item">{t("buildingNo")} : {building.adress.buildingNo} </li>
                    </ul>
                </div>
            </div>

            <div className="card-body">
                <a className="btn btn-sm btn-secondary" >{t("insert Flat")}</a>
                <a className="btn btn-sm btn-success" >{t("show")}</a>
                <Link  to={'/update-building/'+building.id} className="btn btn-sm btn-info" >{t("update")}</Link>
            </div>
        </div>
    )
}

export default BuildingCard
