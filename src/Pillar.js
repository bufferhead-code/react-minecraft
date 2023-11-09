import { Block } from "./components/Block.js";
import React from "react";
import { Container } from "./components/Container.js";

export default function Pillar({name, x, y, z}) {
    let content = [];
    for (let i = 0; i < 5; i++) {
        content.push(<Block x={0} y={i} z={0} name={name}></Block>);
    }
    return (<Container x={x} y={y} z={z}>{content}</Container>);
}