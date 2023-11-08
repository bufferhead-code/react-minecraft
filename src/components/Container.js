import { addPosition, PositionContext } from "../PositionContext.js";
import React from "react";

export function Container({ children, x, y, z }) {
    const position = React.useContext(PositionContext)
    console.log('context position in container', position);
    const absolutePosition = addPosition(position, x, y, z)

    return (
        <PositionContext.Provider value={absolutePosition}>
            {children}
        </PositionContext.Provider>
    )
}
