import { GameLoop } from "./engine/game_loop";
import { Sprite } from "./engine/sprite";

export class DemoGame implements GameLoop {
  readonly speed = 20;
  x: number = 0;
  ball: Sprite;

  constructor() {
    this.ball = new Sprite("app/green.png", () => { });
  }

  init(canvas, context): void {
  }

  update(deltaSeconds: number) {
    this.x += this.speed * deltaSeconds;
  }

  render(canvas, context) {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    this.ball.draw(context, this.x, 20);
  }
}
