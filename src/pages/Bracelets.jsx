import React from "react";
import Cards from "../components/Cards";


export default function Bracelets() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="pagesCategory">
                    <h1>Bracelets</h1>
                    <Cards product={"Bracelets"} />
                    </section>
                </div>
            </main>
        </>
    )
}