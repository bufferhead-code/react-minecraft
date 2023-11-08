import { Block } from "./Block.js";
import React from "react";

export function Blocks() {
    return (<>
        <Block x={2} y={6} z={21} id={1}></Block>
        <Block x={1} y={7} z={22} id={1}></Block>
    </>)
}