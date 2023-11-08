import House from "./House.js";

import * as mcServer from 'flying-squid'
import ReactMinecraft from './ReactMinecraft.js'

const server = mcServer.createMCServer({
    'motd': 'A Minecraft Server \nRunning flying-squid',
    'port': 25565,
    'max-players': 10,
    'online-mode': true,
    'logging': true,
    'gameMode': 1,
    'difficulty': 1,
    'worldFolder': 'world',
    'generation': {
        'name': 'superflat',
        'options': {
            'worldHeight': 80
        }
    },
    'kickTimeout': 10000,
    'plugins': {},
    'modpe': false,
    'view-distance': 10,
    'player-list-text': {
        'header': 'Flying squid',
        'footer': 'Test server'
    },
    'everybody-op': true,
    'max-entities': 100,
    'version': '1.16.1'
})

server.addPlugin('random', {
        server: function (serv) {
            serv.commands.add({
                base: 'reload', // This is what the user starts with, so in this case: /random
                info: 'Reloads the current React Structure', // Description of the command
                usage: '/reload', // Usage displayed if parse() returns false (which means they used it incorrectly)
                // parse(str) { // str contains everything after "/random "
                //     const match = str.match(/^\d+$/); // Check to see if they put numbers in a row
                //     if (!match) return false; // Anything else, show them the usage
                //     else return parseInt(match[0]); // Otherwise, pass our number as an int to action()
                // },
                action(maxNumber, ctx) { // ctx - context who is using it
                    ReactMinecraft.render(House(), {server: serv, world: ctx.player.world}, () => {console.log('done')});
                }
            })
        }
    }
)

export default {};