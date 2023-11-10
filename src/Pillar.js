import { Block } from "./components/Block.js";
import React from "react";
import { Container } from "./components/Container.js";

export default function Pillar({name, x, y, z, height = 5}) {
    let content = [];
    for (let i = 0; i < height; i++) {
        content.push(<Block x={0} y={i} z={0} name={name} axis="y"></Block>);
    }
    return (<Container x={x} y={y} z={z}>{content}</Container>);
}