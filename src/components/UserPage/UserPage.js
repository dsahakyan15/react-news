import { Component } from "react";
import './UserPage.css'


export default class UserPage extends Component {
    render() {

        const { username, email, password } = this.props.date
        
        return (<div className="user-page-wrapper">
            <h1>User page</h1>
            <div className="username">
                <h3>Username:</h3><span>{username}</span>
            </div>
            <div className="email">
                <h3>Email:</h3><span>{email}</span>
            </div>
            <div className="password">
                <h3>Password</h3><span>{password}</span>
            </div>
        </div>)
    }
}