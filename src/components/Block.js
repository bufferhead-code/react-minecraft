import React, { useContext } from "react";
import { addPosition, PositionContext } from "../PositionContext.js";
import minecraftData from "minecraft-data";
import prismarineRegistry from 'prismarine-registry'
import prismarineBlock from 'prismarine-block'

export function Block({
                          children,
                          x,
                          y,
                          z,
                          id,
                          name,
                          facing = 'north',
                          waterlogged = false,
                          half = 'bottom',
                          axis = 'x',
                          east = false,
                          west = false,
                          north = false,
                          south = false,
                        type = 'top',
                          snowy = false,
                          open = true
                      }) {
    const mcData = minecraftData('1.16.1')

    const registry = prismarineRegistry('1.16.1')
    const Block = prismarineBlock(registry)
    const properties = {};
    const currentBlock = Block.fromString(name, registry.biomesByName.plains.id);
    console.log(currentBlock);
    const avaliableProperties = currentBlock.getProperties();
    // TODO: Refactor to be more generic, this is a lot of repeated code
    if (avaliableProperties.hasOwnProperty('facing')) {
        properties.facing = facing;
    }
    if (avaliableProperties.hasOwnProperty('waterlogged')) {
        properties.waterlogged = waterlogged;
    }
    if (avaliableProperties.hasOwnProperty('half')) {
        // TODO: the default for doors is not working here because they use "upper" and "lower",
        //  so for now it needs to be manually overridden, otherwise weird stuff happens with doors
        properties.half = half;
    }
    if (avaliableProperties.hasOwnProperty('axis')) {
        properties.axis = axis;
    }
    if (avaliableProperties.hasOwnProperty('east')) {
        properties.east = east;
    }
    if (avaliableProperties.hasOwnProperty('west')) {
        properties.west = west;
    }
    if (avaliableProperties.hasOwnProperty('north')) {
        properties.north = north;
    }
    if (avaliableProperties.hasOwnProperty('south')) {
        properties.south = south;
    }
    if (avaliableProperties.hasOwnProperty('type')) {
        properties.type = type;
    }
    if (avaliableProperties.hasOwnProperty('snowy')) {
        properties.snowy = snowy;
    }
    if (avaliableProperties.hasOwnProperty('open')) {
        properties.open = open;
    }





    const newblock = Block.fromProperties(name, properties, registry.biomesByName.plains.id);
    const state = newblock.stateId;

    const position = useContext(PositionContext)
    const absolutePosition = addPosition(position, x, y, z)

    return (<nativeminecraftblock x={absolutePosition.x} y={absolutePosition.y} z={absolutePosition.z}
                                  id={state}></nativeminecraftblock>)
}
