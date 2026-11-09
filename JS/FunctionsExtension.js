class Obj {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}
class Player{
    constructor(x,y,scale, speed, height, dir)
    {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.speed = speed
        this.height = height;
        this.dir = 1;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Frog extends Player {
    /*async move(x, y, speed, height)
    {
        let d = x+150;

        for(let i = x; i < d ; i++)
        {
            //for(let j = 0 ; j < d; j++)
            //{
            //    let progresso = (i - x) / 150;

            //    let altura = y - (height * 4 * progresso * (1 - progresso));

                this.Jump(i, y, 1);
            //}
            await delay(speed);
        }
        this.Sapinho(i,y,7);
    }*/
    async move(height)
    {
        if(this.x > 1000)
        {
            this.dir = -1*this.speed;
        }
        else if(this.x < 200)
        {
            this.dir = 1*this.speed;
        }

        this.x += this.dir;

        console.log("Funciona " + this.dir+ this.x);
    }
    Sapinho(x, y, scale)
    {
        if(this.dir > 0)
        {
            var sapo = [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,1,1],
            [1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0],
            [1,1,1,1,1,0,0]
            ];
        }
        else if(this.dir < 0)
        {
            var sapo = [
            [0,1,1,0,0,0,0],
            [1,1,0,1,1,0,0],
            [1,1,1,1,1,1,1],
            [0,0,0,1,1,1,1],
            [0,0,1,1,1,1,1]
            ];
        }
            for (let l = 0; l < sapo.length; l++) {
            for (let c = 0; c < sapo[l].length; c++) {
                const valor = sapo[l][c];
                const tamanhoPixel = 1 * scale;
                if (valor !== 0) {
                    // Define a cor: verde principal (#59A034) ou tom de detalhe/veia da folha (#4A802B)
                    pincel.fillStyle = valor === 1 ? '#d66113' :  pincel.fillStyle = '#284dc7';
                    pincel.fillRect(
                        this.x + (c * tamanhoPixel), 
                        this.y + (l * tamanhoPixel), 
                        tamanhoPixel, 
                        tamanhoPixel
                    );
                }
            }
        }
    }
    Jump(x,y, scale = 1)
    {
        if (this.dir > 0)
        {
            var sapopulando = [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,1,1],
            [1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0],
            [1,1,0,0,0,0,0],
            [1,0,0,0,0,0,0],
            [1,0,0,0,0,0,0],
            [1,0,0,0,0,0,0]
            ];
        }
        else if(this.dir < 0)
        {
            var sapopulando=[
            [0,1,1,0,0,0,0],
            [1,1,0,1,1,0,0],
            [1,1,1,1,1,1,1],
            [0,0,0,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,0,1],
            [0,0,0,0,0,0,1],
            [0,0,0,0,0,0,1]]
        }

            for (let l = 0; l < sapopulando.length; l++) {
            for (let c = 0; c < sapopulando[l].length; c++) {
                const valor = sapopulando[l][c];
                const tamanhoPixel = 1 * scale;
                if (valor !== 0) {
                    // Define a cor: verde principal (#59A034) ou tom de detalhe/veia da folha (#4A802B)
                    pincel.fillStyle = valor === 1 ? '#d66113' :  pincel.fillStyle = '#284dc7';
                    pincel.fillRect(
                        this.x + (c * tamanhoPixel), 
                        this.y + (l * tamanhoPixel), 
                        tamanhoPixel, 
                        tamanhoPixel
                    );
                }
            }
        }
    }
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
