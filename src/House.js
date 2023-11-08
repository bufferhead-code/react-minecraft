import { Block } from "./components/Block.js";
import React from 'react';
import { Container } from "./components/Container.js";
import { Blocks } from "./components/Blocks.js";
import { Canvas } from "./components/Canvas.js";

export default function House() {
    console.log("in the house");

    return (
        <>
            <Canvas x={1} y={4} z={1} xSpan={10} ySpan={10} zSpan={10}>
                <Container x={1} y={1} z={1}>
                    <Block x={2} y={0} z={0} id={1}></Block>
                    <Block x={1} y={0} z={0} id={2}></Block>
                </Container>
            </Canvas>
        </>
    )
}
