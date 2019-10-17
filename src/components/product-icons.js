import React from "react"

import CatchPhrase from "../components/svg/powers-through-grease"
import NoAminalTesting from "../components/svg/no-animal-testing"
import RecyclableBottle from "../components/svg/recyclable-bottle"
import GreyWaterSafe from "../components/svg/grey-water-safe"
import AustralianMade from "../components/svg/australian-made"

export default () => {
    return (
        <div
            id="productIcons"
            style={{
                display: "grid",
                gridTemplateColumns: "30% 13% 13% 14% 20.5%",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "80%",
                margin: "0 auto",
            }}
        >
            <CatchPhrase />
            <NoAminalTesting />
            <RecyclableBottle />
            <GreyWaterSafe />
            <AustralianMade />
        </div>
    )
}
