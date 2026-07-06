import React from "react";
import Heart from "../assets/images/heart.webp"
import Round from "../assets/images/Round.webp"
import Emerald from "../assets/images/Emerald.webp"
import Pear from "../assets/images/Pear.webp"
import Oval from "../assets/images/Oval.webp"
import Princess from "../assets/images/Princess.webp"
import Cushion from "../assets/images/Cushion.webp"

export default function Shape() {
    return (
        <ul className="shape-wrapper">
            <li className="shape-card">
                <div>
                    <img src={Round} alt="Round" loading="lazy"/>
                    <p>Round</p>
                </div>

            </li>
            <li className="shape-card">
                <div>
                <img src={Cushion} alt="Cushion" loading="lazy"/>
                <p>Cushion</p>
                </div>
            </li>
            <li className="shape-card">
                <div>
                <img src={Emerald} alt="Emerald" loading="lazy"/>
                <p>Emerald</p>
                </div>
            </li>
            <li className="shape-card">
                <div>
                <img src={Pear} alt="Pear" loading="lazy"/>
                <p>Pear</p>
                </div>
            </li>
            <li className="shape-card">
                <div>
                <img src={Oval} alt="Oval" loading="lazy"/>
                <p>Oval</p>
                </div>
            </li>
            <li className="shape-card">
                <div>
                <img src={Princess} alt="Princess" loading="lazy" />
                <p>Princess</p>
                </div>
            </li>
            <li className="shape-card">
                <div>
                <img src={Heart} alt="Heart" loading="lazy" />
                <p>Heart</p>
                </div>
            </li>
        </ul>
    )
}