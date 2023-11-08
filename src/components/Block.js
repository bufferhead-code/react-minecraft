import { useContext } from "react";
import { addPosition, PositionContext } from "../PositionContext.js";
import React from "react";
export function Block({children, x, y, z}) {

    const position = useContext(PositionContext)
    console.log('position in block', position)
    const absolutePosition = addPosition(position, x, y, z)
    console.log('absolute position in block', absolutePosition)

    return (<nativeminecraftblock x={absolutePosition.x} y={absolutePosition.y} z={absolutePosition.z} id={2}></nativeminecraftblock>)
}
