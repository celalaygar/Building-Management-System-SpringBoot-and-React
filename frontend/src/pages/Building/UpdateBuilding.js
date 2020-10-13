
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Input from '../../components/input';
import ProfileImage from '../../components/ProfileImage';
import AlertifyService from '../../Services/AlertifyService';
import BuildingService from '../../Services/BuildingService';
import defaultPicture from './../../assets/profile.png';

 class UpdateBuilding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.buildingid,
            buildingName: '',
            buildingAdress: '',
            city: '',
            district: "",
            quarter: '',
            street: '',
            buildingNo: '',
            createdUser: {
            },
            createdAt: undefined,
            errors: {
            }
        };
        this.onChangeData = this.onChangeData.bind(this);
    }

    componentDidMount(){
        this.loadBuilding(this.props.match.params.buildingid);
    }
    loadBuilding = async (buildingid)=>{
        try {
            const response = await BuildingService.get(buildingid);
           
            this.fillInState(response);
            //AlertifyService.alert("Kayıt işlemi Başarılı");

        } catch (error) {
            if (error.response) {
                console.log(error.response)
                if (error.response.data.validationErrors) {
                    console.log(error.response.data.validationErrors);
                    this.setState({ errors: error.response.data.validationErrors })
                }
            }
            else if (error.request)
                console.log(error.request);
            else
                console.log(error.message);
        }
    }
    fillInState = (response) =>{
        let {adress,createdUser} = response.data;
        this.setState({       
            id : response.data.id, 
            buildingName: response.data.buildingName,
            buildingAdress:  response.data.buildingAdress,
            createdAt:response.data.createdAt,
            ...adress,
            createdUser,
            errors: {
            }
        });
    }
    onChangeData = (type, event) => {
        const stateData = this.state;
        stateData[type] = event

        const errors = { ...this.state.errors }
        errors[type] = undefined;

        this.setState({ stateData, errors: errors });
    }
    saveBuilding = async (e) => {
        // browser form içeriğini bir yere göndermesini engeller.
        // browserin bizim yerimize bir şey yapmasını engellemiş oluyoruz.
        e.preventDefault();
        this.setState({ errors: {} })
        let {id,buildingName,buildingAdress,createdAt} = this.state;
        let {city,district,quarter, street,buildingNo} = this.state;
        let body = {
            id,
            buildingName, 
            buildingAdress, 
            createdAt,
            adress:{ city, district,quarter, street,buildingNo }
            };
        //const { dispatch, history } = this.props;
        console.log(body)
        try {
            const response = await BuildingService.update(this.state.id,body);
            console.log(response)
            this.loadBuilding(this.props.match.params.buildingid);

            AlertifyService.alert("Kayıt işlemi Başarılı");
            this.props.history.push("/building-card/"+this.props.match.params.buildingid);

        } catch (error) {
            if (error.response) {
                console.log(error.response)
                if (error.response.data.validationErrors) {
                    console.log(error.response.data.validationErrors);
                    this.setState({ errors: error.response.data.validationErrors })
                }
            }
            else if (error.request)
                console.log(error.request);
            else
                console.log(error.message);
        }
 
    }
    render() {
        let imageSource = defaultPicture;
    
        if(this.props.image){
            imageSource= this.props.image;
        }
        
        const { buildingName, buildingAdress, city,district,quarter,street,buildingNo } = this.state.errors;
        const { t } = this.props;
        // const isWeekday = date => {
        //     const day = date.getDay(date);
        //     return day !== 0 && day !== 6;
        // };
        return (
            <div className="row"> 
            <div className="col-lg-9 card p-1">
                <h3 className="card-header">{t('Building Create Form')}</h3>
                <hr />
                <div className="flex-row">
                <ProfileImage
                    width="32" 
                    height="32" 
                    imageSource={imageSource} 
                    username={this.props.username} 
                />
                <span className="flex-fill" style={{ color: "red" }}>  ( * ) Zorunlu alanlar</span>
                </div>
                <hr />
                <form >
                    <Input
                        label={t("buildingName *")}
                        error={buildingName}
                        type="text"
                        name="buildingName"
                        placeholder={t("buildingName *")}
                        valueName={this.state.buildingName}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label={t("buildingAdress *")}
                        error={buildingAdress}
                        type="text"
                        name="buildingAdress"
                        placeholder={t("buildingAdress *")}
                        valueName={this.state.buildingAdress}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label={t("city")}
                        error={city}
                        type="text"
                        name="city"
                        placeholder={t("city ")}
                        valueName={this.state.city}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label={t("district")}
                        error={district}
                        type="text"
                        name="district"
                        placeholder={t("district")}
                        valueName={this.state.district}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label={t("quarter")}
                        error={quarter}
                        type="text"
                        name="quarter"
                        placeholder={t("quarter")}
                        valueName={this.state.quarter}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label={t("street")} 
                        error={street}
                        type="text"
                        name="street"
                        placeholder={t("street")} 
                        valueName={this.state.street}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label={t("buildingNo")} 
                        error={buildingNo}
                        type="text"
                        name="buildingNo"
                        placeholder={t("buildingNo")}
                        valueName={this.state.buildingNo}
                        onChangeData={this.onChangeData}
                    />

                    <div className="float-right">

                    <button
                        className="btn btn-primary "
                        type="button"
                        onClick={this.saveBuilding}>{t('Update')}</button>
                    </div>
                </form>
            </div>
            <div className="col-lg-3"></div></div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn,
        username: store.username,
        jwttoken: store.jwttoken
    };
};

export default connect(mapStateToProps)(withTranslation()(UpdateBuilding));