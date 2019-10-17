import React from "react"
import ACleanerFuture from "../components/svg-text/a-cleaner-future"
import About from "../components/svg-text/about"

const Opening = () => {
    return (
        <div>
            <div
                style={{
                    minHeight: "100vh",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                }}
            >
                <div
                    style={{
                        backgroundColor: "black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10%",
                    }}
                >
                    <img src="images/Zoosh logo.png" alt="" />
                </div>
                <div
                    style={{
                        backgroundColor: "grey",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20%",
                    }}
                >
                    <ACleanerFuture />
                    <About />
                </div>
            </div>
        </div>
    )
}

export default Opening
