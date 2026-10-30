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
    constructor(x,y,scale, speed, height)
    {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.speed = speed
        this.height = height;
    }
}

class Frog extends Player {
    async move(x, y, speed, height)
    {
        dlim = x+150;

        for(i = x; i > d ; i++)
        {
            for(j = 0 ; j> d; j++)
            {
                y = (height/2)*j*j;
                Jump(i,y,1);
            }
            await delay(speed);
        }
    }
    Sapinho(x,y, escala = 1)
{
    var sapo = [
        [0,0,0,0,1,1,0],
        [0,0,1,1,0,1,1],
        [1,1,1,1,1,1,1],
        [1,1,1,1,0,0,0],
        [1,1,1,1,1,0,0]
    ];
        for (let l = 0; l < sapo.length; l++) {
        for (let c = 0; c < sapo[l].length; c++) {
            const valor = sapo[l][c];
            const tamanhoPixel = 1 * escala;
            if (valor !== 0) {
                // Define a cor: verde principal (#59A034) ou tom de detalhe/veia da folha (#4A802B)
                pincel.fillStyle = valor === 1 ? '#d66113' :  pincel.fillStyle = '#284dc7';
                pincel.fillRect(
                    x + (c * tamanhoPixel), 
                    y + (l * tamanhoPixel), 
                    tamanhoPixel, 
                    tamanhoPixel
                );
            }
        }
    }
}
    Jump(x,y, escala = 1)
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
            for (let l = 0; l < sapopulando.length; l++) {
            for (let c = 0; c < sapopulando[l].length; c++) {
                const valor = sapopulando[l][c];
                const tamanhoPixel = 1 * escala;
                if (valor !== 0) {
                    // Define a cor: verde principal (#59A034) ou tom de detalhe/veia da folha (#4A802B)
                    pincel.fillStyle = valor === 1 ? '#d66113' :  pincel.fillStyle = '#284dc7';
                    pincel.fillRect(
                        x + (c * tamanhoPixel), 
                        y + (l * tamanhoPixel), 
                        tamanhoPixel, 
                        tamanhoPixel
                    );
                }
            }
        }
    }
}

class Tongue extends Frog{
    Lingua(x,y, escala, x2, y2)
    {    
        var lingua = [
            [1,1,1,1,1,1]
        ];
            for (let l = 0; l < lingua.length; l++) {
            for (let c = 0; c < lingua[l].length; c++) {
                const valor = lingua[l][c];
                const tamanhoPixel = 1 * escala;
                if (valor !== 0) {
                    // Define a cor: verde principal (#59A034) ou tom de detalhe/veia da folha (#4A802B)
                    pincel.fillStyle = valor === 1 ? '#ad7854' :  pincel.fillStyle = '#0004ff00';
                    pincel.fillRect(
                        x2 + x + (c * tamanhoPixel), 
                        y2 + y + (l * tamanhoPixel), 
                        tamanhoPixel, 
                        tamanhoPixel
                    );
                }
            }
        }
    }

    ApagaLingua(x,y, escala, x2, y2)
    {
        var zero=[
            [1,1,1,1,1,1]
        ];
            for (let l = 0; l < zero.length; l++) {
                        console.log ("estou aqui");
            for (let c = 0; c < zero[l].length; c++) {
                const valor = zero[l][c];
                const tamanhoPixel = 1 * escala;
                if (valor !== 0) {
                    // Define a cor: verde principal (#59A034) ou tom de detalhe/veia da folha (#4A802B)
                    pincel.clearRect(
                        x2 + x + (c * tamanhoPixel), 
                        y2 + y + (l * tamanhoPixel), 
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
