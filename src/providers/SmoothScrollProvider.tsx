import {ReactLenis} from "lenis/react"
import React from "react"

export default function SmoothScrollProvider({children} : {children: React.ReactElement})  {

    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}