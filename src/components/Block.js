import { useContext } from "react";
import { addPosition, PositionContext } from "../PositionContext.js";
import React from "react";
import minecraftData from "minecraft-data";
import prismarineRegistry from 'prismarine-registry'
import prismarineBlock from 'prismarine-block'

export function Block({children, x, y, z, id, name, facing = 'north', waterlogged = false, half = 'bottom'}) {
    const mcData = minecraftData('1.16.1')

    const registry = prismarineRegistry('1.16.1')
    const Block = prismarineBlock(registry)
    const newblock = Block.fromProperties(name, {waterlogged, facing, half}, registry.biomesByName.plains.id);
    const state = newblock.stateId;

    const position = useContext(PositionContext)
    const absolutePosition = addPosition(position, x, y, z)

    return (<nativeminecraftblock x={absolutePosition.x} y={absolutePosition.y} z={absolutePosition.z} id={state}></nativeminecraftblock>)
}
