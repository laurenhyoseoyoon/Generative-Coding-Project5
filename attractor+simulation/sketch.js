
let easycam;

//Curves
let attractor, addPoints;
let NUM_POINTS = 3300; 
let points = [];
let points2 = [];

//Particles
let particles = [];
let numMax = 550;
let t = 0;
let h = 0.009;
let currentParticle = 0;

// settings and presets for dat gui
let parDef = {
  Attractor: 'Lorenz',
  Speed: 1.0,
  Particles: true,
  Animate: false,
  Preset: function() {
    removeElements();
    this.Speed = 1.0;
    this.Particles = true;
    attractor.p = 10.0;
    attractor.r = 28.0;
    attractor.b = 8.0 / 3.0;
    attractor.x = 1.1;
    attractor.y = 2;
    attractor.z = 7;
    attractor.x2 = 1.1;
    attractor.y2 = 2.05;
    attractor.z2 = 7;
    for (let i = points.length - 1; i >= 0; i -= 1) {
      points.splice(i, 1);
      points2.splice(i, 1);
    }
    initSketch();
  },
  Randomize: randomCurve,
};

function setup() {
  
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
  
  pixelDensity(2);

  attractor = new LorenzAttractor();
  // create gui (dat.gui)
  let gui = new dat.GUI();
  gui.add(parDef, 'Attractor');
  gui.add(parDef, 'Speed', 0, 3, 0.01).listen();
  gui.add(parDef, 'Particles');
  gui.add(parDef, 'Animate').name("Compare");
  gui.add(parDef, 'Randomize');
  gui.add(parDef, 'Preset');
  gui.add(this, 'backAttractors').name("Go Back");

  console.log(Dw.EasyCam.INFO);

  easycam = new Dw.EasyCam(this._renderer, {
    distance: 60
  });

  // place initial samples
  initSketch();
}

function draw() {

  // projection
  perspective(60 * PI / 180, width / height, 1, 5000);

  // BG
  background(0);
  ambientLight(255);

  translate(0, 0, -23);
  
  push();
  noFill();
  beginShape();
  for (let k = 0; k < addPoints; k++) {
    stroke(128, 200, 255);
    strokeWeight(4);
    vertex(points[k].x, points[k].y, points[k].z);

  }
  endShape();
  pop();

  push();
  noFill();
  beginShape();
  for (let l = 0; l < addPoints; l++) {
    stroke(255, 102, 163);
    strokeWeight(4);
    vertex(points2[l].x, points2[l].y, points2[l].z);
  }
  endShape();
  pop();

  if (parDef.Particles == true) {
    //updating and displaying the particles
    for (let i = particles.length - 1; i >= 0; i -= 1) {
      let p = particles[i];
      p.updateEuler();
      p.display();
      if (p.x > 100 || p.y > 100 || p.z > 100 || p.x < -100 || p.y < -100 || p.z < -100) {
        particles.splice(i, 1);
        currentParticle--;
        particles.push(new Particle(random(-5, 5), random(-5, 5), random(-5, 5), t, h));
      }
    }
  }

  // gizmo
  //strokeWeight(0.1);
  //stroke(255, 32,  0); line(0,0,0,2,0,0);
  //stroke( 32,255, 32); line(0,0,0,0,2,0);
  //stroke(  0, 32,255); line(0,0,0,0,0,2);
  
  
  //Draw two curves from initial conditions
  if (parDef.Animate === false) {
    addPoints += 0;
    addPoints = NUM_POINTS;
  } else {
    addPoints += 2;
    if (addPoints > points.length - 2) {
      addPoints = 2;
    }
  }

}

// Auxiliary functions

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  easycam.setViewport([0, 0, windowWidth, windowHeight]);

}

function randomCurve() {
  removeElements();
  for (var i = points.length - 1; i >= 0; i -= 1) {
    points.splice(i, 1);
    points2.splice(i, 1);
  }
  attractor.randomize();
  initSketch();

}

function backAttractors() {
  window.location.href = "https://jcponce.github.io/strange-attractors/#lorenz";
}

