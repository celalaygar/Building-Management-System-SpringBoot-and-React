
import React, { Component } from 'react'

export default class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: undefined,
            id: undefined,
            username: undefined,
            email: undefined,
            name: undefined,
            surname: undefined,
            fullName: undefined,
            image: undefined,
            bornDate: undefined,
        };
    }
    componentDidMount(){
        this.setState({
            index: this.state.index
        });
    }
    render() {
        const{index,user} = this.props;
        const {username,/* id,name,surname,fullname,image,bornDate */email} = user;
        return (
            <div>
                {index} : {username} / {email} | 
                <button className="btn btn-sm btn-danger" onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}
