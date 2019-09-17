import React, { Component, Fragment } from 'react'
import "../css/typingcombat.css";
import { withRouter } from "react-router-dom";
import { logo } from "../images"
import { Preloader } from "../components"


class TypingCombat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            typeText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla sequi quod saepe accusantium natus reiciendis enim quia nostrum, blanditiis dicta ratione labore facilis eos quo eaque modi, esse laudantium laboriosam aut harum iste vero ',
            alert: false,
            validText: '',
            percentage: 0,
            totalLen: 0
        }
    }


    componentDidMount() {
        let len = this.state.typeText.length
        this.setState({totalLen: len})
        this.setState({ isLoading: false })
    }

    exitGameHandler() {
        this.props.history.push("/");
    }

    handleTyping(e){
        let currText = e.target.value;
        let len = currText.length;
        this.setState({percentage: Math.floor((len/this.state.totalLen)*100)})
        if(currText === this.state.typeText.slice(0, len)){
            // proceed further
            return true
        } else {
            this.setState({alert: true})
            setTimeout(function() {
                this.setState({alert: false})
            }.bind(this), 1000)
            return false
        }
    }


    getTypingCombatBody() {
        return <div className="type-combat-container">
            <header className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center">
                    <img src={logo} className="type-logo" alt="" />
                    <div className="text-success font-weight-bolder mt-4 pl-4"><i class="far fa-keyboard text-success mr-2"></i>Typing Combat</div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="mr-4"><span className="text-success font-weight-bold">Percentage:</span><span className="text-danger font-weight-bold ml-2">{this.state.percentage} %</span></div>
                <button onClick={() => this.exitGameHandler()} className="font-weight-bold btn btn-link text-danger btn btn-link" title="If Quit the game you will lose the all the point that you have earned via this game....
                ">
                    Exit
                </button>
                </div>
            </header>
            <main className="type-main-holder">
                <div className="game-engine mt-2">
                </div>
                <div className="text-success h5 font-weight-bold">Type Space</div>
                <div className="type-engine rounded shadow bg-light">
                    <textarea readOnly className={`type-text-display ${this.state.alert ? "type-text-display-animation": ''}`} spellcheck="false" id="main-text-area">{this.state.typeText}</textarea>
                    <textarea value={this.state.validText} onChange={(e) => { this.setState({validText: this.handleTyping(e)? e.target.value : this.state.validText})}} className="type-text-recorder" spellcheck="false" autoFocus></textarea>
                </div>
            </main>
        </div>
    }


    render() {
        return (
            <Fragment>
                {this.state.isLoading ? <Preloader /> : this.getTypingCombatBody()}
            </Fragment>
        )
    }
}

export default withRouter(TypingCombat)