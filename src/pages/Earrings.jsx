import React from "react";
import Cards from "../components/Cards";


export default function Earrings(){
    return(
        <>
            <main>
                <div className="container">
                    <section className="pagesCategory">
                    <h1>Earrings</h1>
                    <Cards typeJewelry={"Earrings"} />
                    </section>
                </div>
            </main>
        </>
    )
}