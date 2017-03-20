import { GameLoop } from "./game_loop";

export class Engine {
  then: number = Date.now();
  game: GameLoop;

  constructor(game: GameLoop) {
    this.game = game;
  }

  start(): void {
    let canvas: HTMLCanvasElement =
      <HTMLCanvasElement> document.getElementById('main_canvas');
    let context: CanvasRenderingContext2D = canvas.getContext('2d');

    let fps = 60;
    let fpsInterval = 1000 / fps;
    this.game.init(canvas, context);
    this.render(canvas, context);
    setInterval((): void => {
      this.gameLoop(canvas, context);
    }, fpsInterval);
  }

  gameLoop(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    let now = Date.now();
    let elapsed = now - this.then;
    let elapsedSeconds = elapsed / 1000;
    this.then = now;

    this.game.update(elapsedSeconds);
  }

  render(canvas, context) {
    requestAnimationFrame(() => {
      this.render(canvas, context);
    });

    this.game.render(canvas, context);
  }
}
