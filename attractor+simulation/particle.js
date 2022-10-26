const componentFX = (t, x, y, z) => 0.5 * parDef.Speed * (attractor.p * (-x + y)); //Change this function

const componentFY = (t, x, y, z) => 0.5 * parDef.Speed * (-x * z + attractor.r * x - y); //Change this function

const componentFZ = (t, x, y, z) => 0.5 * parDef.Speed * (x * y - attractor.b * z); //Change this function

//Particle definition and motion
class Particle {

  constructor(_x, _y, _z, _t, _h) {
    this.x = _x;
    this.y = _y;
    this.z = _z;
    this.time = _t;
    this.radius = 0.25;
    this.h = _h;
    this.op = random(210, 250);
    this.r = random(80, 224);
    this.g = random(10, 252);
    this.b = random(200, 255);
  }
  
  updateEuler(){
    let nx = componentFX(this.time, this.x, this.y, this.z);
    let ny = componentFY(this.time, this.x, this.y, this.z);
    let nz = componentFZ(this.time, this.x, this.y, this.z);

    this.x += this.h * nx;
    this.y += this.h * ny;
    this.z += this.h * nz;
  }

  update() {
    this.k1 = componentFX(this.time, this.x, this.y, this.z);
    this.j1 = componentFY(this.time, this.x, this.y, this.z);
    this.i1 = componentFZ(this.time, this.x, this.y, this.z);
    this.k2 = componentFX(this.time + 1 / 2 * this.h, this.x + 1 / 2 * this.h * this.k1, this.y + 1 / 2 * this.h * this.j1, this.z + 1 / 2 * this.h * this.i1);
    this.j2 = componentFY(this.time + 1 / 2 * this.h, this.x + 1 / 2 * this.h * this.k1, this.y + 1 / 2 * this.h * this.j1, this.z + 1 / 2 * this.h * this.i1);
    this.i2 = componentFZ(this.time + 1 / 2 * this.h, this.x + 1 / 2 * this.h * this.k1, this.y + 1 / 2 * this.h * this.j1, this.z + 1 / 2 * this.h * this.i1);
    this.k3 = componentFX(this.time + 1 / 2 * this.h, this.x + 1 / 2 * this.h * this.k2, this.y + 1 / 2 * this.h * this.j2, this.z + 1 / 2 * this.h * this.i2);
    this.j3 = componentFY(this.time + 1 / 2 * this.h, this.x + 1 / 2 * this.h * this.k2, this.y + 1 / 2 * this.h * this.j2, this.z + 1 / 2 * this.h * this.i2);
    this.i3 = componentFZ(this.time + 1 / 2 * this.h, this.x + 1 / 2 * this.h * this.k2, this.y + 1 / 2 * this.h * this.j2, this.z + 1 / 2 * this.h * this.i2);
    this.k4 = componentFX(this.time + this.h, this.x + this.h * this.k3, this.y + this.h * this.j3, this.z + this.h * this.i3);
    this.j4 = componentFY(this.time + this.h, this.x + this.h * this.k3, this.y + this.h * this.j3, this.z + this.h * this.i3);
    this.i4 = componentFZ(this.time + this.h, this.x + this.h * this.k3, this.y + this.h * this.j3, this.z + this.h * this.i3);
    this.x = this.x + this.h / 6 * (this.k1 + 2 * this.k2 + 2 * this.k3 + this.k4);
    this.y = this.y + this.h / 6 * (this.j1 + 2 * this.j2 + 2 * this.j3 + this.j4);
    this.z = this.z + this.h / 6 * (this.i1 + 2 * this.i2 + 2 * this.i3 + this.i4);
    this.time += this.h;
  }

  display() {
    push();
    ambientMaterial(this.r, this.b, this.g);
    translate(this.x, this.y, this.z);
    noStroke();
    sphere(this.radius, 7,7);
    pop();
  }

}