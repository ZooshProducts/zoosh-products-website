import React from "react"
import Opening from "../components/opening"
import Banner from "../components/banner"
import Product from "../components/product"
import Footer from "../components/footer"

import "../styles/global.css"

import JSONData from "../data/products.json"

const HomePage = () => {
    return (
        <div>
            <div id="opening">
                <Opening />
            </div>
            <div id="statement">
                <div
                    style={{
                        textAlign: "center",
                        padding: "7rem 3rem 9rem 3rem",
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}
                >
                    <h1>Company & Environmental Statement</h1>
                    <p>
                        Zoosh has recognised the environmental evolution in home
                        care products.
                    </p>
                    <p>
                        Zoosh is our contribution to a sustainable cleaner
                        future. We design our products with the planet in mind
                        based on highly efficient renewable plant-based
                        ingredients, whilst constantly striving to source the
                        latest in eco-friendly packaging solutions for cleaner
                        future.
                    </p>
                </div>
            </div>
            <div id="banner">
                <Banner products={JSONData.products} />
            </div>
            <div id="products">
                <div
                    style={{
                        display: "flex",
                        maxWidth: "1400px",
                        margin: "0 auto",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        paddingTop: "4rem",
                    }}
                >
                    {JSONData.products.map((data, index) => {
                        return <Product key={`key_${index}`} data={data} />
                    })}
                </div>
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HomePage
