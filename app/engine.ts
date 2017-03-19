window.onload = function () {
  console.log("Hello World Wide Web");
  gameloop();
}

function gameloop() {
  var canvas: HTMLCanvasElement = 
    <HTMLCanvasElement> document.getElementById('main_canvas');
  var context: CanvasRenderingContext2D = canvas.getContext('2d');

  render(canvas, context);
}

function render(canvas, context) {
  context.fillStyle = '';
  context.fillRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(gameloop);
}
