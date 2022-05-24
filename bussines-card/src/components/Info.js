import React from "react"

export default function Info() {
    return (
        <div className="info-container">
            <img src="../test.png" className="info--img" alt="" />
            <h1 className="info--title">Beka Magnaradze</h1>
            <h4 className="info-txt">Frontend Developer</h4>
            <a className="info--subtxt">beka's.website</a>
            <a className="info--subtxt" href="https://mail.google.com/" target="_blank"> <button className="info--btn">
                <img src="../email-icon.png" alt=""/>
                <span>Email</span>
            </button>
            </a>
        </div>
    )
}