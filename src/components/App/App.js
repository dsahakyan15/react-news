import { Component } from "react";
import './App.css'
import RegisterPage from "../RegisterPage/RegisterPage";
import UserPage from "../UserPage/UserPage"


class App extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        regStatus: false
    }

    isRegistered = (username, email, password) => {
        this.setState(() => {
            return {
                username: username,
                email: email,
                password: password,
                regStatus: true
            }
        })
        console.log(username, email, password)
        console.log(this.state)

    }

    render() {
        console.log("app")
        return (
            <div>
                {this.state.regStatus ?
                    <UserPage 
                    date={this.state}/>
                    :
                    <RegisterPage
                        isRegistered={this.isRegistered}
                        stateNow={this.state} />
                }
            </div>)
    }
}

export default App