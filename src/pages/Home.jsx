import React from "react";
import Category from "../components/Categories"
import Banner from "../components/SliderBanner"
import Shape from "../components/Shape"
import PromoPhoto1 from '../assets/images/promo_photo1.webp'
import PromoPhoto2 from '../assets/images/promo_photo2.webp'
import Cards from "../components/Cards";

export default function Home() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="banner-wrapper">
                        <div className="banner-text">
                            <h1>Unveiling the Beauty of Fine Jewelry</h1>
                            <p>Handpicked gemstones and intricate designs for a lifetime of luxury.</p>
                        </div>
                        <Banner />
                    </section>
                    <section>
                        <h2 className="title-section">View categories</h2>
                        <Category />
                    </section>
                    <section>
                        <h2 className="title-section">Shape</h2>
                        <Shape />
                    </section>
                    <section>
                       <h2 className="title-section">Bestseller</h2>
                       <Cards typeJewelry= {true} />
                    </section>
                    <section className="promo-section">
                        <div className="promo-wrapper">
                            <div className="promo-text">
                                <h3>Jewelry That Tells Your Story in Sparkling Detail</h3>
                                <p>Celebrate life’s special moments with exquisite pieces designed for love, beauty, and elegance. Find the perfect treasure that speaks to your heart.</p>
                            </div>
                            <div className="promo-photo">
                                <img src={PromoPhoto1} alt="promo photo" />
                            </div>
                        </div >
                        <div className="promo-wrapper">
                            <div className="promo-text">
                                <h3>Adorn Yourself with Jewelry That Captures Your Essence</h3>
                                <p>Each piece is carefully designed to celebrate your individuality. From delicate details to bold statements, find your perfect match today.</p>
                            </div>
                            <div className="promo-photo">
                                <img src={PromoPhoto2} alt="promo photo" />
                            </div>
                        </div>
                    </section>


                </div>
            </main>
        </>
    )
}