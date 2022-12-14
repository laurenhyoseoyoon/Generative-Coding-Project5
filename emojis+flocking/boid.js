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
        this.allEmojis = ["๐","๐","๐","๐","๐","๐","๐","๐","๐","๐ฟ","๐","๐","โบ๏ธ",
        "๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐","๐",
        "๐","๐","๐","๐","๐ ","๐ก","๐ข","๐ฃ","๐ค","๐ฅ","๐ฆ","๐ง","๐จ","๐ฉ","๐ช","๐ซ","๐ฌ",
        "๐ญ","๐ฎ","๐ฏ","๐ฐ","๐ฑ","๐ฒ","๐ณ","๐ด","๐ต","๐ถ","๐ท","๐ธ","๐น","๐บ","๐ป","๐ผ","๐ฝ",
        "๐พ","๐ฟ","๐","๐ฃ","๐ค","๐ฅ","๐ถ","๐ถ๐ป","๐ถ๐ผ","๐ถ๐ฝ","๐ถ๐พ","๐ถ๐ฟ","๐ฆ","๐ฆ๐ป","๐ฆ๐ผ","๐ฆ๐ฝ","๐ฆ๐พ",
        "๐ฆ๐ฟ","๐ง","๐ง๐ป","๐ง๐ผ","๐ง๐ฝ","๐ง๐พ","๐ง๐ฟ","๐จ","๐จ๐ป","๐จ๐ผ","๐จ๐ฝ","๐จ๐พ","๐จ๐ฟ","๐ฉ","๐ฉ๐ป","๐ฉ๐ผ","๐ฉ๐ฝ",
        "๐ฉ๐พ","๐ฉ๐ฟ","๐ช","๐จโ๐ฉโ๐ง","๐จโ๐ฉโ๐งโ๐ฆ","๐จโ๐ฉโ๐ฆโ๐ฆ","๐จโ๐ฉโ๐งโ๐ง","๐ฉโ๐ฉโ๐ฆ","๐ฉโ๐ฉโ๐ง","๐ฉโ๐ฉโ๐งโ๐ฆ","๐ฉโ๐ฉโ๐ฆโ๐ฆ","๐ฉโ๐ฉโ๐งโ๐ง","๐จโ๐จโ๐ฆ","๐จโ๐จโ๐ง","๐จโ๐จโ๐งโ๐ฆ","๐จโ๐จโ๐ฆโ๐ฆ","๐จโ๐จโ๐งโ๐ง",
        "๐ซ","๐ฌ","๐ญ","๐ฏ","๐ฐ","๐ฐ๐ป","๐ฐ๐ผ","๐ฐ๐ฝ","๐ฐ๐พ","๐ฐ๐ฟ","๐ฑ","๐ฑ๐ป","๐ฑ๐ผ","๐ฑ๐ฝ","๐ฑ๐พ","๐ฑ๐ฟ","๐ฒ",
        "๐ฒ๐ป","๐ฒ๐ผ","๐ฒ๐ฝ","๐ฒ๐พ","๐ฒ๐ฟ","๐ณ","๐ณ๐ป","๐ณ๐ผ","๐ณ๐ฝ","๐ณ๐พ","๐ณ๐ฟ","๐ด","๐ด๐ป","๐ด๐ผ","๐ด๐ฝ","๐ด๐พ","๐ด๐ฟ",
        "๐ต","๐ต๐ป","๐ต๐ผ","๐ต๐ฝ","๐ต๐พ","๐ต๐ฟ","๐ฎ","๐ฎ๐ป","๐ฎ๐ผ","๐ฎ๐ฝ","๐ฎ๐พ","๐ฎ๐ฟ","๐ท","๐ท๐ป","๐ท๐ผ","๐ท๐ฝ","๐ท๐พ",
        "๐ท๐ฟ","๐ธ","๐ธ๐ป","๐ธ๐ผ","๐ธ๐ฝ","๐ธ๐พ","๐ธ๐ฟ","๐","๐๐ป","๐๐ผ","๐๐ฝ","๐๐พ","๐๐ฟ","๐ผ","๐ผ๐ป","๐ผ๐ผ","๐ผ๐ฝ",
        "๐ผ๐พ","๐ผ๐ฟ","๐","๐๐ป","๐๐ผ","๐๐ฝ","๐๐พ","๐๐ฟ","๐ป","๐น","๐บ","๐ฉ","๐","๐ฝ","๐พ","๐","๐ฑ",
        "๐ฒ","๐ณ","๐ด","๐ต","๐ท","๐ธ","๐น","๐บ","๐ป","๐ผ","๐","๐พ","๐ฟ","๐","๐","๐","๐",
        "๐","๐ฐ","๐","๐","๐ญ","๐น","๐","๐","๐","๐ฎ","๐","๐","๐ฏ","๐","๐ฐ","๐","๐ฑ",
        "๐","๐ด","๐","๐","๐","๐","๐","๐ค","๐ฃ","๐ฅ","๐ฆ","๐ง","๐","๐ช","๐ซ","๐","๐",
        "๐ท","๐ฝ","๐","๐ฉ","๐ถ","๐บ","๐ป","๐จ","๐ผ","๐ต","๐","๐","๐","๐","๐","๐ฒ","๐",
        "๐","๐ข","๐ธ","๐","๐ณ","๐ฌ","๐","๐","๐ ","๐ก","๐","๐","๐","๐","๐","๐","๐พ", "๐ฆ"];
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
