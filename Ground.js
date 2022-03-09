class Ground
{

    constructor(x, y, w, h) {
        let options = {
            isStatic:true
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);

        
    }

    Show() {
        var ground = this.body.position
        var parede1 = this.body.position
        var parede2 = this.body.position

        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(ground.x, ground.y, this.w, this.h);
        rect(parede1.x, parede1.y, this.w, this.h);
        rect(parede2.x, parede2.y, this.w, this.h);
        pop();
        display();
   }

   
}