import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { logo } from "../images"
import "../css/dash.css"


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            isLoading: true,
        }
    }

    componentWillMount() {
        if (!localStorage.getItem("token") || !localStorage.getItem("name")) {
            this.props.history.push("/auth")
        } else {
            this.setState({
                userName: localStorage.getItem("name")
            })
        }
    }

    componentDidMount() { }


    handleLogout() {
        localStorage.clear()
        this.props.history.push("/auth")
    }

    render() {
        return (
            <div className="dashboard-container">
                <header className="d-flex align-items-center justify-content-between dashboard-header">
                    <div>
                        <img className="dashboard-logo" src={logo} alt="" />
                    </div>
                    <div className="pt-4">
                        <Link className="btn btn-link-success text-success mr-4 font-weight-bold" to="/">Home</Link>
                        <Link className="btn btn-link-success text-success mr-4 font-weight-bold" to="/challenges">Challenges</Link>
                        <Link className="btn btn-link-success text-success mr-4 font-weight-bold" to="/leaderboard">Leaderboard</Link>
                        <Link className="btn btn-link-success text-success mr-4 font-weight-bold" to="/leaderboard">My Profile</Link>
                        <button onClick={() => this.handleLogout()} className="btn btn-link btn-link-success text-danger font-weight-bold">Logout</button>
                    </div>
                </header>
                <main className="dashboard-main-container">
                    <div className="mt-4 pt-4">
                        Hello <span className="font-weight-bold text-success">{this.state.userName} </span>Welcome Back !
                    </div>
                    <div className="mt-4">
                        <div className="font-weight-bold text-success f-size-20">
                            Challenges
                        </div>
                        <div className="pt-1">
                            Here are few challenges, We picked up for you!
                        </div>
                        <div className="mt-2 d-flex justify-content-start align-items-center">
                            <div className="challenge-box shadow rounded d-flex flex-column justify-content-center align-items-center ">
                                <div className="">
                                    <i class="far fa-keyboard text-success fa-3x"></i>
                                </div>
                                <div className="text-light1 font-weight-bold text-center pt-3">
                                    Typing Combat
                                </div>
                            </div>
                            <div className="challenge-box shadow rounded ml-3 d-flex flex-column justify-content-center align-items-center">
                                <div className="">
                                    <i class="fas fa-code text-success fa-3x"></i>
                                </div>
                                <div className="text-light1 font-weight-bold text-center pt-3">
                                    Code War
                                </div>
                            </div>
                            <div className="challenge-box shadow rounded ml-3 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-success font-weight-bold ">. . .</div>
                            </div>
                            <div className="challenge-box shadow rounded ml-3 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-success font-weight-bold ">. . .</div>
                            </div>
                            <div className="challenge-box shadow rounded ml-3 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-success font-weight-bold ">. . .</div>
                            </div>
                            <div className="challenge-box shadow rounded ml-3 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-success font-weight-bold ">. . .</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="font-weight-bold text-success f-size-20">
                            Live Matches
                        </div>
                        <div className="pt-1">
                            Join the Live Pools of your Favourite challenges , compete and win!
                        </div>
                        <div className="mt-3 d-flex justify-content-start align-items-center">
                            <div onClick={() => { this.props.history.push("/challenges/typingcombat") }} className="challenge-box shadow  rounded d-flex flex-column justify-content-center align-items-center ">
                                <div className="border-top-color"></div>
                                <div className="">
                                    <i class="far fa-keyboard text-success fa-2x mt-2"></i>
                                </div>
                                <div className="text-center pt-1">
                                    <div className="text-light1"> Typing Combat</div>
                                    <div className="font-weight-normal">
                                        <span className="text-light1"> Live Players:</span> <span className="text-success f-size-18 font-weight-bold"> 20</span>
                                    </div>
                                    <div className="text-success font-weight-bold">Play Now!</div>
                                </div>
                            </div>
                            <div className="challenge-box shadow rounded ml-3 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-success font-weight-bold ">. . .</div>
                            </div>
                            <div className="challenge-box shadow rounded ml-3 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-success font-weight-bold ">. . .</div>
                            </div>
                            <div className="challenge-box shadow rounded ml-3 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-success font-weight-bold ">. . .</div>
                            </div>

                        </div>
                    </div>
                </main>
                <footer className="footer-container">
                    © 2019 Copyrights: SkillVille.com
                </footer>
            </div>
        )
    }
}


export default withRouter(Dashboard);