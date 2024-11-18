function setup() {
  // Membuat canvas 3D
  createCanvas(400, 400, WEBGL);
}

function draw() {
  // Mengatur background
  background(200);

  // Menambahkan pencahayaan
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(100);

  // Menambahkan rotasi berdasarkan waktu
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // Membuat kerucut
  push();
  fill(255, 100, 0); // Warna oranye
  translate(-100, 0, 0); // Menggeser posisi kerucut ke kiri
  rotateZ(frameCount * 0.02); // Rotasi kerucut pada sumbu Z
  cone(50, 100); // Membuat kerucut dengan radius 50 dan tinggi 100
  pop();

  // Membuat torus
  push();
  fill(0, 100, 255); // Warna biru
  translate(100, 0, 0); // Menggeser posisi torus ke kanan
  rotateX(frameCount * 0.02); // Rotasi torus pada sumbu X
  torus(50, 20); // Membuat torus dengan radius 50 dan ketebalan 20
  pop();
}
