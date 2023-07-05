function setup() {
  createCanvas(512, 512);
  background(0);
}
function draw() {
  let radius = 50;
  let gray = 0; // Valor de gris inicial

  let a = width / 2;
  let b = height / 2;

  noFill();
  stroke(noise(frameCount * 0.01) * 145);
  ellipse(250, 250, 100);

  noFill();
  stroke(noise(frameCount * 0.01) * 255);
  noFill();
  let x = 250;
  let y = 250;
  let diametro = (10, 270);

  for (let angulo = 0; angulo < 360; angulo += 10) {
    let inicioX = x + cos(radians(angulo)) * diametro + 2;
    let inicioY = y + sin(radians(angulo)) * diametro * 2;
    let finX = x + cos(radians(angulo + 180)) * diametro * 2;
    let finY = y + sin(radians(angulo + 180)) * diametro + 2;

    line(inicioX, inicioY, finX, finY);
  }
}
