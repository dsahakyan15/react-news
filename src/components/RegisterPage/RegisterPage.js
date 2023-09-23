import { Component } from "react";
import './registerPage.css'
export default class RergisterPage extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        image: '',
        validationErrors: {}
    }
    validateEmail = (email) => {
        const regexE = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (regexE.test(email)) {
            console.log('tested')
            return true
        }
        console.log('dfdgaad')
        return false
    }
    validatePassword = (password) => {
        return false
    }
    handleChange = (event) => {       
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleRegister = () => {
        const { username, email, password } = this.state;
        const validationErrors = {}
        console.log(this.state)
        if (!email.trim() && !this.validateEmail(email)) {
            {debugger}
            validationErrors.email = 'Please enter a valid email.'
        }
        if (!password.trim() && !this.validatePassword(password)) {
            validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
        }
        if (username.trim().length < 3) {
            validationErrors.username = 'Username is required.'
        }
        if (Object.keys(validationErrors).length === 0) {
            this.props.handleRegistration({ username, email, password })
            localStorage.setItem('userData', JSON.stringify({ username, email, password }));
            this.setState({
                username: '',
                email: '',
                password: '',
                validationErrors: {}
            })
        } else {
            this.setState({ validationErrors })
        }
    }
    handleLocalCheck = (key) => {
        if (localStorage.getItem(key) != null) {
            return JSON.parse(localStorage.getItem(key))
        } else {
            localStorage.setItem(key, JSON.stringify({
                username: '',
                email: '',
                password: ''
            }))

            return JSON.parse(localStorage.getItem(key))
        }
    }
    render() {
        // const { } = this.handleLocalCheck('userData')
        const { username, email, password, validationErrors } = this.state;
        return (
            <div className="register-page-wrapper">
                <h1>Register page</h1>
                <div className="register-form">
                    <div className="register-input">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            id="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="register-input">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="register-input">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="register-input">
                        <label htmlFor="image">Image:</label>

                        {this.state.image ?
                            <img alt="" src={this.state.image} /> : <input
                                type="file"
                                name="image"

                                id="image"
                                onChange={this.handleChange}
                            />
                        }
                    </div>
                    {
                        Object.keys(validationErrors).length ? (
                            <div className="error-alert">
                                <span>{validationErrors.email}</span>
                                <span>{validationErrors.password}</span>
                                <span>{validationErrors.username}</span>
                            </div>
                        ) : null
                    }
                    <button
                        className="register-btn"
                        onClick={this.handleRegister}
                    >
                        Register
                    </button>
                </div>
            </div>
        )
    }
}