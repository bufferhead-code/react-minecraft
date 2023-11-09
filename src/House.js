import React from 'react';
import { Canvas } from "./components/Canvas.js";
import Pillar from "./Pillar.js";

export default function House() {
    console.log("in the house");


    return (
        <>
            <Canvas x={1} y={4} z={1} xSpan={10} ySpan={10} zSpan={10}>
                <Pillar x={1} y={1} z={1} name="stripped_spruce_wood"></Pillar>
                <Pillar x={2} y={1} z={1} name="birch_planks"></Pillar>
                <Pillar x={1} y={1} z={2} name="birch_planks"></Pillar>

                <Pillar x={7} y={1} z={7} name="stripped_spruce_wood"></Pillar>
                <Pillar x={6} y={1} z={7} name="acacia_stairs"></Pillar>
                <Pillar x={7} y={1} z={6} name="birch_planks"></Pillar>

            </Canvas>
        </>
    )
}
