import { createContext } from "react";

export const PositionContext = createContext(null);

export const addPosition = (position, x, y, z) => {
    if(position === null){
        return {
            x: x,
            y: y,
            z: z
        }
    }
    return {
        x: position.x + x,
        y: position.y + y,
        z: position.z + z
    }
}