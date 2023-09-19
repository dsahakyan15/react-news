import { Component } from "react";
import './App.css'
import RegisterPage from "../RegisterPage/RegisterPage";
import UserPage from "../UserPage/UserPage"


class App extends Component {
    state = {
        userData: {},
        isRegistered: false
    }

    handleRegistration = (userData) => {
        this.setState({
            userData,
            isRegistered: true
        })

    }

    render() {
        const { userData, isRegistered } = this.state

        return (
            <div className="app">
                {
                    isRegistered ?
                        <UserPage
                            userData={userData} />
                        :
                        <RegisterPage
                            handleRegistration={this.handleRegistration}
                        />
                }
            </div>)
    }
}

export default App