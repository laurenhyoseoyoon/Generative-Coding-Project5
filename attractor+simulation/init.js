function initSketch() {

    var hleft = select('#hud-left');
    var hright = select('#hud-right');
  
    createElement('li', '&sigma; = ' + nfc(attractor.p, 2)).parent(hleft);
    createElement('li', '&rho; = ' + nfc(attractor.r, 2)).parent(hleft);
    createElement('li', '&beta; = ' + nfc(attractor.b, 2)).parent(hleft);
  
    createElement('li', '----------').parent(hleft);
    createElement('h3', 'Init. Cond.').parent(hleft);
  
    createElement('li', 'x<sub>1</sub> = ' + nfc(attractor.x, 2)).parent(hleft);
    createElement('li', 'y<sub>1</sub> = ' + nfc(attractor.y, 2)).parent(hleft);
    createElement('li', 'z<sub>1</sub> = ' + nfc(attractor.z, 2)).parent(hleft);
  
    createElement('li', '----------').parent(hleft);
  
    createElement('li', 'x<sub>2</sub> = ' + nfc(attractor.x2, 2)).parent(hleft);
    createElement('li', 'y<sub>2</sub> = ' + nfc(attractor.y2, 2)).parent(hleft);
    createElement('li', 'z<sub>2</sub> = ' + nfc(attractor.z2, 2)).parent(hleft);
  
    let p = {
      x: attractor.x,
      y: attractor.y,
      z: attractor.z
    }
  
    for (var i = 0; i < NUM_POINTS; i++) {
  
      p = attractor.generatePoint(p.x, p.y, p.z);
  
      if (isNaN(p.x) || isNaN(p.y) || isNaN(p.z)) {
        console.log('Failed, retry');
        randomCurve();
        return;
      }
  
      points.push(new p5.Vector(attractor.scale * p.x, attractor.scale * p.y, attractor.scale * p.z));
  
    }
  
    let q = {
      x: attractor.x2,
      y: attractor.y2,
      z: attractor.z2
    }
    for (var j = 0; j < NUM_POINTS; j++) {
  
      q = attractor.generatePoint(q.x, q.y, q.z);
  
      if (isNaN(q.x) || isNaN(q.y) || isNaN(q.z)) {
        console.log('Failed, retry');
        randomCurve();
        return;
      }
  
      points2.push(new p5.Vector(attractor.scale * q.x, attractor.scale * q.y, attractor.scale * q.z));
  
    }
  
    let m = 30;
    for (var k = 0; k < numMax; k++) {
      particles[k] = new Particle(random(-m, m), random(-m, m), random(-m, m), t, h);
    }
  
  }