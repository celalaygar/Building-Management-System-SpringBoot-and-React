
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import BuildingCard from '../../components/BuildingCard';
import AlertifyService from '../../Services/AlertifyService';
import BuildingService from '../../Services/BuildingService';

class BuildingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {
                content: [],
                number: 0,
                size: 4,
            },
            jwttoken: props.jwttoken
        };
    }

    componentDidMount() {
        // const paramUserName = this.props.match.params.username;
        // const { username /*,jwttoken,isLoggedIn,email,image*/ } = this.props;
        // if (username === paramUserName)
        //     console.log("oke : " + username)
        this.loadBuilding(this.state.page.number, this.state.page.size);

    }
    loadBuilding = async (number, size) => {
        // const res = await UserService.getUsers('/users',this.state.jwttoken)
        // console.log(res.data)
        try {
            await BuildingService.getBuilding(number, size).then(res => {
                //console.log(res.data);
                this.setState({ page: res.data });

            });
        } catch (error) {
            if (error.response) {
                //console.log(error.response.data.message);
                console.log(error.response.data.message);
                AlertifyService.alert(error.response.data.message);
            }
            else if (error.request) {
                console.log(error.request);
                AlertifyService.alert(error.request);
            }
            else {
                console.log(error.message);
                AlertifyService.alert(error.message);
            }
        };
    }
    onClickNext = () => {
        const nextPage = this.state.page.number + 1;
        this.loadBuilding(nextPage, this.state.page.size);
    }
    onClickPrevios = () => {
        const nextPage = this.state.page.number - 1;
        this.loadBuilding(nextPage, this.state.page.size);
    }
    render() {

        const { username /*,jwttoken,isLoggedIn,email,image*/ } = this.props;
        const { t } = this.props;
        const { content: buildings, first, last, number, totalPages } = this.state.page;
        return (
            <div className="col-lg-12">
                <h5 className="card-header text-center">{username + " " + t("Buildings")} </h5>
                <div className="d-flex justify-content-end pr-5">
                        <h5>{t('Page')} {number !== undefined && number + 1}/{totalPages !== undefined && totalPages}</h5>
                    </div>
                <div className="card-header d-flex justify-content-between bd-highlight mb-3">
                    <div className="d-flex justify-content-start">
                        {first === false && <button onClick={this.onClickPrevios} className="btn btn-secondary btn-sm">{t('Previous')}</button>}
                    </div>

                    <div className="d-flex justify-content-end">
                        {last === false && <button onClick={this.onClickNext} className=" btn btn-secondary  btn-sm ">{t('Next')}</button>}
                    </div>
                </div>
                <div className="list-group-flush">
                    {buildings.map((building, index) =>
                        <BuildingCard  key={building.id} building={building} />
                    )  }
                </div>
                <div>
                    <hr />
                    <div className="d-flex justify-content-end pr-5">
                        <h5>{t('Page')} {number !== undefined && number + 1}/{totalPages !== undefined && totalPages}</h5>
                    </div>
                </div>

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

export default connect(mapStateToProps)(withTranslation()(BuildingComponent));