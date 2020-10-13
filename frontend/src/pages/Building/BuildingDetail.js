
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import BuildingCard from '../../components/BuildingCard';
import BuildingService from '../../Services/BuildingService';

  class BuildingDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.buildingid,
            buildingName:'',
            buildingAdress:'',
            createdUser: {
            },
            adress: {
            },
            createdAt: undefined,
            errors: {
            }
        };
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
        //let {adress,createdUser} = response.data;
        this.setState({
            buildingName :response.data.buildingName,
            buildingAdress :response.data.buildingAdress,
            createdUser: response.data.createdUser,
            adress: response.data.adress,
            errors: {
            }
        });
    }


    render() {
        const  {id,buildingName,buildingAdress,createdUser,adress}=this.state;
        return (
            <div className="col-lg-12">
                <BuildingCard  
                    id={id}
                    buildingName={buildingName} 
                    buildingName={buildingAdress} 
                    createdUser={createdUser}  
                    adress={adress} />
            </div>
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

export default connect(mapStateToProps)(withTranslation()(BuildingDetail));
