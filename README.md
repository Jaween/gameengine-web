# Game Engine
An incomplete and extremely simple web game engine.
This engine is intended to be cloned and extended upon.
It is written in TypeScript (JavaScript with some extra features) in order to use classes and static typing.

## Requirements
* Node Package Manager

## Usage

1. Clone the repo by running the command:

 `git clone https://github.com/jaween/gameengine-web my-great-game`

2. Install the dependencies:

 `npm install`

3. Create your game by writing a class which implements GameLoop (see `demo_game.ts` for an example). You may want to create a git submodule to separate your game logic into a separate repository.

4. Pass an instance of your GameLoop to the Engine constructor in `run.ts`

5. Run the TypeScript compiler (to convert your code to plain JavaScript):

 `tsc` (or `tsc --watch` to monitor and recompile when the code changes)

6. Run your game by opening `index.htm` in a web browser
