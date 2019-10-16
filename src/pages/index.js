import React from "react"
import "../styles/global.css"
import JSONData from "../data/products.json"

function Product({ data }) {
    return (
        <div
            style={{
                textAlign: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: data.image.color,
                    padding: "50px",
                    width: "400px",
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
            <div
                style={{
                    display: "flex",
                }}
            >
                <img src={`images/Powers Through Grease logo.svg`} alt="" />
                <img
                    className="no-yes-logos"
                    src={`images/Grey Water Safe logo.svg`}
                    alt=""
                />
                <img
                    className="no-yes-logos"
                    src={`images/No Animal Testing logo.svg`}
                    alt=""
                />
                <img
                    className="no-yes-logos"
                    src={`images/Recyclable Bottle logo.svg`}
                    alt=""
                />
                <img src={`images/Australian Made Logo.svg`} alt="" />
            </div>
        </div>
    )
}

const homePage = () => (
    <div id="products">
        <div
            style={{
                display: "flex",
            }}
        >
            {JSONData.products.map((data, index) => {
                return <Product key={`key_${index}`} data={data} />
            })}
        </div>
    </div>
)
export default homePage
