export class Sprite {
  public width: number = 0;
  public height: number = 0;

  private image: HTMLImageElement = new Image(); 
  private imageReady: boolean = false;

  constructor(filename: string)
  {
    this.image.src = filename;
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height;
      this.imageReady = true;
    };
  }

  draw(context, x, y): void {
    if (this.imageReady) {
      context.drawImage(this.image, x, y);
    }
  }
}
