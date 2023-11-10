import React from 'react';
import { Canvas } from "./components/Canvas.js";
import Pillar from "./Pillar.js";
import { Block } from "./components/Block.js";
import { Container } from "./components/Container.js";

function FrontWall() {
    return (
        <>
            {[...Array(5)].map((x, i) =>
                <Pillar x={6 - i} y={1} z={2} name="birch_planks"></Pillar>
            )}
            <Block x={4} y={1} z={2} half="lower" open={false} name="spruce_door"></Block>
            <Block x={4} y={2} z={2} half="upper" open={false} name="spruce_door"></Block>
            <Block x={4} y={4} z={2} half="bottom" facing="south" name="birch_stairs"></Block>
            <Block x={4} y={3} z={2} half="top" facing="south" name="birch_stairs"></Block>
            <Block x={4} y={5} z={2} east={true} west={true} name="glass_pane"></Block>
            <Block x={3} y={6} z={2} name="birch_planks"></Block>
            <Block x={5} y={6} z={2} name="birch_planks"></Block>
            <Block x={3} y={4} z={1} name="spruce_fence" west={true} south={true}></Block>
            <Block x={2} y={4} z={1} name="spruce_fence" west={true} south={true} east={true}></Block>
            <Block x={5} y={4} z={1} name="spruce_fence" south={true} east={true}></Block>
            <Block x={6} y={4} z={1} name="spruce_fence" west={true} south={true} east={true}></Block>
            <Block x={4} y={6} z={2} half="top" facing="south" name="birch_stairs"></Block>
        </>
    )
}

function BackWall() {
    return (
        <>
            {[...Array(5)].map((x, i) =>
                <Pillar x={6 - i} y={1} z={7} name="birch_planks"></Pillar>
            )}
            <Block x={3} y={6} z={7} name="birch_planks"></Block>
            <Block x={4} y={6} z={7} name="birch_planks"></Block>
            <Block x={5} y={6} z={7} name="birch_planks"></Block>

        </>
    )
}

function SideWall({x, y, z}) {
    return (
        <Container x={x} y={y} z={z}>
            {[...Array(6)].map((x, i) =>
                <Pillar x={0} y={0} z={i} name="birch_planks"></Pillar>
            )}
        </Container>
    )
}

function Walls() {
    return (
        <>
            <FrontWall></FrontWall>
            <SideWall x={1} y={1} z={2}></SideWall>
            <SideWall x={7} y={1} z={2}></SideWall>
            <BackWall></BackWall>

            <Pillar x={7} y={1} z={1} name="stripped_dark_oak_wood"></Pillar>
            <Pillar x={1} y={1} z={1} name="stripped_dark_oak_wood"></Pillar>
            <Pillar x={1} y={1} z={7} name="stripped_dark_oak_wood"></Pillar>
            <Pillar x={7} y={1} z={7} name="stripped_dark_oak_wood"></Pillar>
        </>
    )
}

export default function House() {

    return (
        <>
            <Canvas x={1} y={4} z={1} xSpan={10} ySpan={10} zSpan={10}>
                <Floor></Floor>
                <Walls></Walls>
                <CornerFlowerBed facing="east" x={2} y={1} z={0}></CornerFlowerBed>
                <CornerFlowerBed x={6} y={1} z={0} facing="west"></CornerFlowerBed>
                <Roof></Roof>
                <LongFlowerBed x={0} y={1} z={2} facing="west"></LongFlowerBed>
                <LongFlowerBed x={8} y={1} z={2} facing="east"></LongFlowerBed>
            </Canvas>
        </>
    )
}

function Roof() {
    return (
        <>
            <WestRoofRow x={1} y={5} z={0} material="stone_brick_stairs" double={true}></WestRoofRow>
            <WestRoofRow x={1} y={5} z={8} material="stone_brick_stairs" double={true}></WestRoofRow>

            {[...Array(7)].map((x, i) =>
                <WestRoofRow x={1} y={5} z={1 + i} material="spruce_stairs"></WestRoofRow>
            )}
            {[...Array(9)].map((x, i) =>
                <Block x={0} y={4} z={i} name="stone_brick_stairs" facing="east"></Block>
            )}
            <Block x={0} y={3} z={0} name="lantern"></Block>
            <Block x={0} y={3} z={8} name="lantern"></Block>

            <Block x={1} y={4} z={0} name="stone_brick_stairs" facing="west" half="top"></Block>

            <EastRoofRow x={5} y={5} z={0} material="stone_brick_stairs" double={true}></EastRoofRow>
            <EastRoofRow x={5} y={5} z={8} material="stone_brick_stairs" double={true}></EastRoofRow>
            <Block x={4} y={7} z={8} name="stone_brick_stairs" half="top"></Block>

            {[...Array(7)].map((x, i) =>
                <EastRoofRow x={5} y={5} z={1 + i} material="spruce_stairs"></EastRoofRow>
            )}
            {[...Array(9)].map((x, i) =>
                <Block x={8} y={4} z={i} name="stone_brick_stairs" facing="west"></Block>
            )}

            <Block x={8} y={3} z={0} name="lantern"></Block>
            <Block x={8} y={3} z={8} name="lantern"></Block>

            <Block x={4} y={7} z={0} name="stone_brick_stairs" facing="south" half="top"></Block>
            {[...Array(9)].map((x, i) =>
                <Block x={4} y={8} z={i} name="stone_brick_slab" type="bottom"></Block>
            )}

            <Block x={7} y={4} z={0} name="stone_brick_stairs" facing="east" half="top"></Block>
            <Block x={3} y={6} z={1} name="lantern"></Block>
            <Block x={5} y={6} z={1} name="lantern"></Block>

            <Block x={4} y={7} z={1} name="spruce_planks"></Block>


        </>
    )
}


function EastRoofRow({x, y, z, material, double = false}) {
    return (
        <Container x={x} y={y} z={z}>
            <Block x={0} y={2} z={0} name={material} facing="west"></Block>

            <Block x={1} y={1} z={0} name={material} facing="west"></Block>
            {double === true ? <Block x={0} y={1} z={0} name={material} facing="east" half="top"></Block> : null}

            <Block x={2} y={0} z={0} name={material} facing="west"></Block>
            {double === true ? <Block x={1} y={0} z={0} name={material} facing="east" half="top"></Block> : null}
        </Container>
    )
}

function WestRoofRow({x, y, z, material, double = false}) {
    return (
        <Container x={x} y={y} z={z}>
            <Block x={2} y={2} z={0} name={material} facing="east"></Block>

            <Block x={1} y={1} z={0} name={material} facing="east"></Block>
            {double === true ?
                <Block x={2} y={1} z={0} name={material} facing="west" half="top"></Block> : null}

            <Block x={0} y={0} z={0} name={material} facing="east"></Block>
            {double === true ?
                <Block x={1} y={0} z={0} name={material} facing="west" half="top"></Block> : null}
        </Container>
    )
}

function CornerFlowerBed({x, y, z, facing}) {
    return (
        <Container x={x} y={y} z={z}>
            <Block name="birch_leaves" x={0} y={0} z={1}></Block>
            <Block name="rose_bush" half="lower" x={0} y={1} z={1}></Block>
            <Block name="rose_bush" half="upper" x={0} y={2} z={1}></Block>
            <Block name="spruce_trapdoor" open={true} x={0} y={0} z={0}></Block>
            <Block name="spruce_trapdoor" facing={facing} open={true} x={facing === 'east' ? 1 : -1} y={0} z={1}></Block>
        </Container>)
}

function LongFlowerBed({x, y, z, facing = 'west'}) {
    return (
        <Container x={x} y={y} z={z}>
            {[...Array(5)].map((x, i) =>
                <>
                    <Block name="birch_leaves" x={0} y={0} z={i}></Block>
                    <Block name={Math.random() > 0.5 ? 'cornflower' : 'dandelion'} x={0} y={1} z={i}></Block>
                    <Block name="spruce_trapdoor" facing={facing} open={true} x={facing === 'west' ? -1 : 1} y={0}
                           z={i}></Block>
                </>
            )}
            <Block name="spruce_trapdoor" facing="north" open={true} x={0} y={0} z={-1}></Block>
            <Block name="spruce_trapdoor" facing="south" open={true} x={0} y={0} z={5}></Block>
        </Container>)
}


function Floor() {
    return (
        <>
            {[...Array(10)].map((x, i) =>
                [...Array(10)].map((y, j) =>
                    <Block x={i} y={0} z={j} name="grass_block" snowy={false}></Block>
                )
            )
            }
        </>
    )

}