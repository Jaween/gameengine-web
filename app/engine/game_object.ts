import { Sprite } from "./sprite";

export class GameObject {
  public x: number = 0;
  public y: number = 0;
  public width: number;
  public height: number;
  public visible: boolean = true;

  private sprite: Sprite;

  constructor(filename: string) {
    this.sprite = new Sprite(filename, (width, height) => {
      this.width = this.sprite.width;
      this.height = this.sprite.height;
    });
  }

  draw(context): void {
    if (this.visible) {
      this.sprite.draw(context, this.x, this.y);
    }
  }
}
