import React from 'react'
import { logo } from '../images';
import ReactLoading from "react-loading";
import "../css/preloader.css"

export default function Preloader() {
    return (
        <div className="preloader-wrapper">
            <img className="master-logo" src={logo} alt="" />
            <ReactLoading type={"spin"} color={"#37B424"} height={50} width={50} />
        </div>
    )
}
