import React from "react"
import Product from "../components/product"

import "../styles/global.css"

import JSONData from "../data/products.json"

const homePage = () => (
    <div id="products">
        <div
            style={{
                display: "flex",
                maxWidth: "1200px",
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
            }}
        >
            {JSONData.products.map((data, index) => {
                return <Product key={`key_${index}`} data={data} />
            })}
        </div>
    </div>
)
export default homePage
