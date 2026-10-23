class Obj {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

class Frog extends Obj {

}

class Mosca extends Obj {
    // constructor(speed, flyHigh, roleta){
    //     this.speed = speed;
    //     this.flyHigh = flyHigh;
    //     this.roleta = roleta;
    // }
    desenha() {
        pincel.fillStyle = this.color;
        pincel.fillRect(this.x, this.y, this.width, this.height);
        pincel.fillRect(this.x + 10, this.y + 10, this.width, this.height);
        pincel.fillRect(this.x + 20, this.y, this.width, this.height);
    }
    move(speed, flyHigh, roleta) {
        this.x += speed;

        this.roleta = Math.random();
        if (roleta) { this.y++; }
        else { this.y--; }
        if (this.y > flyHigh) { this.y = flyHigh; }
        if (this.y < -flyHigh) { this.y = -flyHigh; }

        if (this.x > 1200 || this.x < 0) {
            this.mudaPosicao(1);
        }
    }
    mudaPosicao(roleta) {
        roleta = Math.random()
        if (this.roleta) {
            this.speed = Math.abs(this.speed);
            this.x = -50;

        }
        else {
            this.speed = speed * -1;
            this.x = 1250;
        }
        this.y = Math.random() * (600);
    }
}
