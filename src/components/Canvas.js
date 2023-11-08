import { addPosition, PositionContext } from "../PositionContext.js";
import React from "react";

export function Canvas({ children, x, y, z, xSpan, ySpan, zSpan }) {
    const position = React.useContext(PositionContext)
    const absolutePosition = addPosition(position, x, y, z)
    return (
        <>
            <nativeminecraftcanvas x={x} y={y} z={z} xSpan={xSpan} ySpan={ySpan} zSpan={zSpan}></nativeminecraftcanvas>
            <PositionContext.Provider value={absolutePosition}>
                {children}
            </PositionContext.Provider>
        </>
    )
}
