import React from "react"

import ProductIcons from "../components/product-icons"

const Product = ({ data }) => {
    return (
        <div
            style={{
                textAlign: "center",
                width: "40%",
                marginBottom: "4rem",
            }}
        >
            <div
                style={{
                    backgroundColor: data.image.color,
                    padding: "3rem",
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(images/products/compressed/${data.image.src})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: 0,
                        width: "100%",
                        paddingBottom: "100%",
                    }}
                ></div>
            </div>

            <h2>{data.name}</h2>
            <h3>{data.category}</h3>
            <div>
                <p>{data.description}</p>
            </div>
            <div>
                <h4>HOW TO USE</h4>
                <p>{data.how_to_use}</p>
            </div>
            <ProductIcons />
        </div>
    )
}

export default Product
