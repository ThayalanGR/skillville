import React, { Component } from 'react';
import "../css/auth.css";
import { Preloader } from "../components";
import { logo } from '../images';
import axios from 'axios';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom'

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            loginEmail: "",
            loginPassword: "",
            registerEmail: "",
            registerPassword: "",
            registerUser: ""
        }
    }

    componentWillMount() {
        if (localStorage.getItem("token") && localStorage.getItem("name")) {
            this.props.history.push("/")
        }
    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({ isLoading: false })
        }.bind(this), 2000)
    }

    handleLogin() {
        let data = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }
        axios
            .post("http://localhost:8000/api/auth/login", data)
            .then(res => {
                console.log(res)
                if (res.data.status) {
                    // login action
                    this.setState({ loginEmail: '', loginPassword: '' })
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("name", res.data.name)
                    this.props.history.push("/")
                } else {
                    // username or password wrong seciton
                    toast.error("Something went wrong try again! ", {
                        position: "bottom-right",
                        hideProgressBar: true
                    });
                }
            })
            .catch(err => {
                toast.error("Something went wrong try again! ", {
                    position: "bottom-right",
                    hideProgressBar: true
                })
                console.error(err)
            });
    }

    handleRegistration() {
        let data = {
            email: this.state.registerEmail,
            name: this.state.registerUser,
            password: this.state.registerPassword
        }
        axios
            .post("http://localhost:8000/api/auth/register", data)
            .then(res => {
                if (res.data.status) {
                    toast.success("Registration Success! login with your credentials..", {
                        position: "bottom-right",
                        hideProgressBar: true,
                    })
                } else {
                    toast.error("Something went wrong try again! ", {
                        position: "bottom-right",
                        hideProgressBar: true
                    })
                }
            })
            .catch(err => {
                toast.error("Something went wrong try again! ", {
                    position: "bottom-right",
                    hideProgressBar: true
                })
            });
        this.setState({
            registerEmail: "",
            registerPassword: "",
            registerUser: ""
        })
    }

    getAuthBody() {
        return <div className="auth-wrapper">
            <div>
                <img src={logo} className="auth-logo" alt="" />
            </div>
            <div className="auth-container">
                <div className="login-container">
                    <div className="login-container-text text-center">
                        Login
                    </div>
                    <form className="text-center" onSubmit={(e) => { e.preventDefault(); this.handleLogin() }}>
                        <div>
                            <input value={this.state.loginEmail} onChange={(e) => { this.setState({ loginEmail: e.target.value }) }} required type="email" className="custom-text-box form-control-sm" placeholder="emailID" />
                        </div>
                        <div>
                            <input value={this.state.loginPassword} onChange={(e) => { this.setState({ loginPassword: e.target.value }) }} required type="password" className="custom-text-box form-control-sm" placeholder="password" />
                        </div>
                        <div>
                            <button type="submit" className="btn login-button shadow mt-3 text-green">Login</button>
                        </div>
                    </form>
                </div>
                <div className="or-seperator text-center">
                    <span className="text-light1">|</span>
                    <br />
                    <span className="text-green">or</span>
                    <br />
                    <span className="text-light1">|</span>
                </div>
                <div className="register-container">
                    <div className="login-container-text text-center">
                        Register
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); this.handleRegistration() }} className="text-center">
                        <div >
                            <input value={this.state.registerEmail} onChange={(e) => { this.setState({ registerEmail: e.target.value }) }} required type="email" className="custom-text-box form-control-sm" placeholder="emailID" />
                        </div>
                        <div>
                            <input value={this.state.registerUser} onChange={(e) => { this.setState({ registerUser: e.target.value }) }} required type="text" className="custom-text-box form-control-sm" placeholder="user-name" />
                        </div>
                        <div>
                            <input value={this.state.registerPassword} onChange={(e) => { this.setState({ registerPassword: e.target.value }) }} required type="password" className="custom-text-box form-control-sm" placeholder="password" />
                        </div>
                        <div>
                            <button type="submit" className="btn login-button shadow mt-3 text-green">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <Preloader /> : this.getAuthBody()}
            </div>
        )
    }
}


export default withRouter(Authentication);