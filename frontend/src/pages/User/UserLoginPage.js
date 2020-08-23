
import React, { Component } from 'react'
import Input from '../../components/input';
import { withTranslation } from 'react-i18next';
import ApiService from '../../Services/ApiService';
import AlertifyService from '../../Services/AlertifyService';

class UserLoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {
            }
        };
        this.onChangeData = this.onChangeData.bind(this);
    }
    onChangeData(type, event) {

        const stateData = this.state;
        stateData[type] = event

        this.setState({ stateData});
    }
    // onchangeLanguage = lg => {
    //     const { i18n } = this.props;
    //     i18n.changeLanguage(lg);
    //     ApiService.changeLanguage(lg);

    // }
    render() {       
         const { username,  password } = this.state.errors;

        const { t } = this.props;
        return (
            <div className="col-lg-12">
                <h3>{t('Sign Up')}</h3>
                <hr />
                <p className="description-p" style={{ color: "red" }}>  ( * ) Zorunlu alanlar</p>
                <form >
                    <Input
                        label={t("Username *")}
                        error={username}
                        type="text"
                        name="username"
                        placeholder={t("Username *")}
                        valueName={this.state.username}
                        onChangeData={this.onChangeData}
                    />
                    <Input
                        label={t("Password *")}
                        error={password}
                        type="password"
                        name="password"
                        placeholder={t("Password *")}
                        valueName={this.state.password}
                        onChangeData={this.onChangeData}
                    />
                    <button 
                        className="btn btn-primary " 
                        type="button" 
                        onClick={this.onClickSignUp}>{t('Login')}</button>
                </form>

                {/* <img src="https://www.countryflags.io/tr/flat/32.png" style={{ "cursor": "pointer" }} onClick={() => this.onchangeLanguage("tr")} alt="Turkısh Flag" />
                <img src="https://www.countryflags.io/gb/flat/32.png" style={{ "cursor": "pointer" }} onClick={() => this.onchangeLanguage("en")} alt="England Flag" /> */}

            </div>
        )
    }
}
export default withTranslation()(UserLoginPage);