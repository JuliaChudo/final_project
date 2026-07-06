import React, { useState } from "react";
import Rings from "../assets/images/rings.webp"
import Earrings from "../assets/images/Earrings.webp"
import Bracelets from "../assets/images/bracelets.webp"
import Pendents from "../assets/images/pendents.webp"
import Necklaces from "../assets/images/necklaces.webp"


export default function Category() {
    const imagesMap = {
        rings: Rings,
        earrings: Earrings,
        bracelets: Bracelets,
        pendents: Pendents,
        necklaces: Necklaces
    };
    const [showMore, setShowMore] = useState('rings');

    function handleNextClick(name) {
        setShowMore(name);
    }
    return (

        <>
            <div className="category-wrapper">
                <ul className="category-list">
                    <li onMouseEnter={() => handleNextClick('rings')} className="category-text">Rings</li>
                    <li onMouseEnter={() => handleNextClick('earrings')} className="category-text">Earrings</li>
                    <li onMouseEnter={() => handleNextClick('bracelets')} className="category-text">Bracelets</li>
                    <li onMouseEnter={() => handleNextClick('pendents')} className="category-text">Pendents</li>
                    <li onMouseEnter={() => handleNextClick('necklaces')} className="category-text">Necklaces</li>
                </ul>

                <div className="photo-categoty">
                    <img src={imagesMap[showMore]} alt="{imagesMap[showMore]}" loading="lazy"/>
                </div>


            </div>
        </>

    )
}