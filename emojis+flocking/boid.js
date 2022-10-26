class Boid {
    constructor() {
        this.position = createVector(random(2*width/5, 3*width/5), random(2*height/5, 3*height/5));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(1, 2.5));
        this.acceleration = createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 2;
        this.sz = random(5, 12);
        this.a = Math.round(random(1, 11));
        this.b = Math.round(random(1, 11));
        this.red = random(150, 255)
        this.green = random(80, 255);
        this.blue = random(290,255);
        this.alpha = random(240,255);
        this.allEmojis = ["😀","😁","😂","😃","😄","😅","😆","😇","😈","👿","😉","😊","☺️",
        "😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘","😙","😚","😛",
        "😜","😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬",
        "😭","😮","😯","😰","😱","😲","😳","😴","😵","😶","😷","😸","😹","😺","😻","😼","😽",
        "😾","😿","🙀","👣","👤","👥","👶","👶🏻","👶🏼","👶🏽","👶🏾","👶🏿","👦","👦🏻","👦🏼","👦🏽","👦🏾",
        "👦🏿","👧","👧🏻","👧🏼","👧🏽","👧🏾","👧🏿","👨","👨🏻","👨🏼","👨🏽","👨🏾","👨🏿","👩","👩🏻","👩🏼","👩🏽",
        "👩🏾","👩🏿","👪","👨‍👩‍👧","👨‍👩‍👧‍👦","👨‍👩‍👦‍👦","👨‍👩‍👧‍👧","👩‍👩‍👦","👩‍👩‍👧","👩‍👩‍👧‍👦","👩‍👩‍👦‍👦","👩‍👩‍👧‍👧","👨‍👨‍👦","👨‍👨‍👧","👨‍👨‍👧‍👦","👨‍👨‍👦‍👦","👨‍👨‍👧‍👧",
        "👫","👬","👭","👯","👰","👰🏻","👰🏼","👰🏽","👰🏾","👰🏿","👱","👱🏻","👱🏼","👱🏽","👱🏾","👱🏿","👲",
        "👲🏻","👲🏼","👲🏽","👲🏾","👲🏿","👳","👳🏻","👳🏼","👳🏽","👳🏾","👳🏿","👴","👴🏻","👴🏼","👴🏽","👴🏾","👴🏿",
        "👵","👵🏻","👵🏼","👵🏽","👵🏾","👵🏿","👮","👮🏻","👮🏼","👮🏽","👮🏾","👮🏿","👷","👷🏻","👷🏼","👷🏽","👷🏾",
        "👷🏿","👸","👸🏻","👸🏼","👸🏽","👸🏾","👸🏿","💂","💂🏻","💂🏼","💂🏽","💂🏾","💂🏿","👼","👼🏻","👼🏼","👼🏽",
        "👼🏾","👼🏿","🎅","🎅🏻","🎅🏼","🎅🏽","🎅🏾","🎅🏿","👻","👹","👺","💩","💀","👽","👾","👀","🌱",
        "🌲","🌳","🌴","🌵","🌷","🌸","🌹","🌺","🌻","🌼","💐","🌾","🌿","🍀","🍁","🍂","🍃",
        "🍄","🌰","🐀","🐁","🐭","🐹","🐂","🐃","🐄","🐮","🐅","🐆","🐯","🐇","🐰","🐈","🐱",
        "🐎","🐴","🐏","🐑","🐐","🐓","🐔","🐤","🐣","🐥","🐦","🐧","🐘","🐪","🐫","🐗","🐖",
        "🐷","🐽","🐕","🐩","🐶","🐺","🐻","🐨","🐼","🐵","🙈","🙉","🙊","🐒","🐉","🐲","🐊",
        "🐍","🐢","🐸","🐋","🐳","🐬","🐙","🐟","🐠","🐡","🐚","🐌","🐛","🐜","🐝","🐞","🐾", "🦖"];
        this.select = Math.round(random(0, 285));
    }
    
    edges() {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }
        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }
    
    align(boids) {
        let perceptionRadius = 50;
        let perceptionCount = 5;
        let steering = createVector();
        let total = 0;
        for (const other of quadTree.getItemsInRadius(this.position.x, this.position.y, perceptionRadius, perceptionCount)) {
            steering.add(other.velocity);
            total++;
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }
    
    separation(boids) {
        let perceptionRadius = 50;
        let perceptionCount = 5;
        let steering = createVector();
        let total = 0;
        for (const other of quadTree.getItemsInRadius(this.position.x, this.position.y, perceptionRadius, perceptionCount)) {
            const diff = p5.Vector.sub(this.position, other.position);
            const d = diff.mag();
            if (d === 0) continue;
            diff.div(d * d);
            steering.add(diff);
            total++;
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }
    
    cohesion(boids) {
        let perceptionRadius = 80;
        let perceptionCount = 5;
        let steering = createVector();
        let total = 0;
        for (const other of quadTree.getItemsInRadius(this.position.x, this.position.y, perceptionRadius, perceptionCount)) {
            steering.add(other.position);
            total++;
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }
    
    flock(boids) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);
        
        alignment.mult(controls.align);
        cohesion.mult(controls.cohesion);
        separation.mult(controls.separation);
        
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }
    
    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }
    
    show() {
        let theta = this.velocity.heading() + PI / 2;
        let size =  width * 0.35 / 10;
        stroke(this.red, this.green , 166, 255);
        strokeWeight(1.5);
        noFill();
        
        push();
        
        translate(this.position.x, this.position.y)
       
        textSize(size);
       
        text(this.allEmojis[this.select], 0, 0);
        pop();
    }
}
