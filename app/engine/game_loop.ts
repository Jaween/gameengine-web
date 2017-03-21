export interface GameLoop {
  init(canvas, context);
  update(deltaSeconds: number);
  render(canvas, context);
}
