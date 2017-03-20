import { Engine } from "./engine";
import { DemoGame } from "./demo_game";

window.onload = () => {
  let game = new DemoGame();
  let engine = new Engine(game);
  engine.start();
}
