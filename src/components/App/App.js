import { Component } from "react";
import './App.css'
import RegisterPage from "../RegisterPage/RegisterPage";


class App extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        regStatus:false
    }

    isRegistered = (username, email, password) => {
        this.setState(() => {
            return { 
                username:username,
                email:email, 
                password:password,
                regStatus:true
            }
        })
        console.log(username,email,password)
        console.log(this.state)

        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        console.log("app")
        return (
            <div>
                <RegisterPage
                    isRegistered={this.isRegistered}
                    stateNow={this.state} />
            </div>)
    }
}

export default App