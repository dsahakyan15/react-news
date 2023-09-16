import { Component } from "react";
import './registerPage.css'

class RegisterPage extends Component {
    state = {
        userDate: {},
        username: '',
        pass: '',
        email: ''
    }

    onInpuChange = (event) => {
        console.log(event.target.id)
        this.setState({[event.target.id]:event.target.value})
    }
    onBtnClick = (event) =>{
        this.setState(()=>{
            const userDate = {
                username:this.state.username,
                password:this.state.pass,
                email:this.state.email
            }

            return {userDate}
        })
        console.log(this.state.userDate)
    }

    render() {
        return (<div>
            <div className="form">
                <div className="form-username">
                    <span >Username</span>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        onChange={this.onInpuChange}
                    />
                </div>
                <div className="form-email">
                    <span >Email</span>
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        onChange={this.onInpuChange} />
                </div>
                <div className="form-password">
                    <span>Password</span>
                    <input
                        type="text"
                        id="pass"
                        placeholder="Password"
                        onChange={this.onInpuChange} />
                </div>
                <button onClick={this.onBtnClick} className="form-btn">Submit</button>
            </div>
        </div>)
    }

}

export default RegisterPage