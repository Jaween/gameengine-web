export class Sprite {
  public width: number = 0;
  public height: number = 0;

  private image: HTMLImageElement = new Image(); 
  private imageReady: boolean = false;

  constructor(filename: string, onload: (width, height) => void) {
    this.image.src = filename;
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height;
      this.imageReady = true;
      onload(this.width, this.height);
    };
  }

  draw(context, x, y): void {
    if (this.imageReady) {
      context.drawImage(this.image, x, y);
    }
  }
}
