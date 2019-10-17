import React from "react"
import ACleanerFuture from "../components/svg-text/a-cleaner-future"
import About from "../components/svg-text/about"

const Opening = () => {
    return (
        <div>
            <div className="opening-wrap">
                <div
                    style={{
                        backgroundColor: "#1e78c2",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "15%",
                    }}
                >
                    <img src="images/Zoosh logo.png" alt="" />
                </div>
                <div className="opening-text-wrap">
                    <div
                        style={{
                            marginBottom: "3rem",
                        }}
                    >
                        <ACleanerFuture />
                    </div>
                    <About />
                </div>
            </div>
        </div>
    )
}

export default Opening
