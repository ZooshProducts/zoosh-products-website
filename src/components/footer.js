import React from "react"
import ACleanerFuture from "../components/svg-text/a-cleaner-future"

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div>
            <div
                style={{
                    backgroundColor: "#0f2e93",
                }}
            >
                <div className="footer-wrap">
                    <img
                        style={{
                            maxWidth: "20rem",
                        }}
                        src="images/Zoosh logo.png"
                        alt=""
                    />
                    <div
                        style={{
                            width: "15rem",
                        }}
                    >
                        <ACleanerFuture />
                    </div>
                    <div className="footer-links-wrap">
                        <div>
                            <p
                                style={{
                                    fontWeight: "700",
                                }}
                            >
                                Useful Links
                            </p>
                            <p>Business Disclaimer</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div>
                            <p
                                style={{
                                    fontWeight: "700",
                                }}
                            >
                                Stay Connected
                            </p>
                            <p>
                                <i class="fas fa-fw fa-lg fa-map-marker-alt"></i>
                                &nbsp;&nbsp;&nbsp;
                                <span>
                                    124 Days Road, Ferryden Park SA 5010
                                </span>
                            </p>
                            <p>
                                <i class="fas fa-fw fa-lg fa-phone-alt"></i>
                                &nbsp;&nbsp;&nbsp;
                                <span>(08) 8406 0000</span>
                            </p>
                            <p>
                                <i class="fas fa-fw fa-lg fa-envelope"></i>
                                &nbsp;&nbsp;&nbsp;
                                <span>info@zoosh.com.au</span>
                            </p>
                        </div>
                    </div>

                    <img
                        style={{
                            maxWidth: "8rem",
                        }}
                        src="images/sa_logo.png"
                        alt=""
                    />
                </div>
            </div>
            <div
                style={{
                    backgroundColor: "#1e78c2",
                    textAlign: "center",
                    padding: ".75rem",
                }}
            >
                <p
                    style={{
                        margin: "0",
                        fontSize: "1rem",
                        fontWeight: "400",
                    }}
                >
                    Zoosh &copy; {year} - All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
