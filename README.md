# React Minecraft

React Minecraft is a project that allows you to create Minecraft worlds using React components.
Just like React-DOM and React-Native, React Minecraft uses the React.js Framework and JSX to craft custom builds in Minecraft. With Minecraft Blocks.

## Run the project

To run the project type `npm run start`. 
This will start a local minecraft server on port 25565.
You can connect to this server using the Minecraft Java Edition via localhost:25565.

Currently only Minecraft Version **v1.16.1** is supported.  

## How to use

After logging in you can type `/reload` to reload the component.

## State of this project

This is a very early release of this project (you could call it a prototype), the API is still subject to change. 
Depending on the Feedback this project will be further developed to provide a stable API.

## Minecraft Block Index + Block States

For documentation of blocks and available states

https://minecraftitemids.com/

## Roadmap / Ideas: 

 * Add better component reloading (after file updates) without server restart
 * Add rotation and mirror possibility for blocks/sections
 * Probably make it faster, not really sure how well it performs on larger structures yet
 * Check if we can make events (f.e. button press) work
 * If events work, add reactivity
 * If reactivity works see if functions can work

## Contributing

If you are interested in contributing feel free to either contact me or open tickets for what you would like to contribute. 
Please don't open PRs for new features without prior discussion. Bugfixes and small changes are of course welcome without prior ticket.