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
    async move()
    {
        if(this.x > 1000)
        {
            this.dir = -1*this.speed;
        }
        else if(this.x < 200)
        {
            this.dir = 1*this.speed;
        }
        this.y+=1;
        for(let i = 0; i < 15; i++)
        {
            this.y -=this.speed*2000-2*i;
            if(this.y>700)
            {
                this.y=700;
                break;
            }
            this.x += this.dir;
            console.log("Funciona " + this.y);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        //

        console.log("Funciona " + this.y);
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
    limit = true;
    flyHighRange = 30; // Quanto ela pode subir a partir do y inicial
    flyLowRange = 30;  // Quanto ela pode descer a partir do y inicial
    flyHigh = 0;
    flyLow = 0;
    flySpeed = 2; 
    speed = 3;
    speedHigh = 10;
    desenha() {
        pincel.fillStyle = this.color;
        pincel.fillRect(this.x, this.y, this.width - 3, this.height - 3);
        pincel.fillRect(this.x + 7, this.y + 7, this.width, this.height);
        pincel.fillRect(this.x + 14, this.y, this.width - 3, this.height - 3);
    }

    move() {
        this.x += this.speed;

        // Define os limites baseados na posição Y onde a mosca spawnou/mudou de posição
        if (this.limit) {
            this.flyHigh = this.y - this.flyHighRange; // Teto (valor menor)
            this.flyLow = this.y + this.flyLowRange;   // Chão (valor maior)
            this.limit = false;
            console.log('limite atualizado: teto=' + this.flyHigh + ', chão=' + this.flyLow);
        }

        // Move a mosca no eixo Y
        this.y += this.flySpeed;

        // Se passou do teto (ficou menor que o flyHigh), inverte para descer (positivo)
        if (this.y < this.flyHigh) { 
            this.flySpeed = Math.abs(this.flySpeed); 
            console.log('voa baixo (batendo no teto, voltando a descer)');
        }

        // Se passou do chão (ficou maior que o flyLow), inverte para subir (negativo)
        if (this.y > this.flyLow) { 
            this.flySpeed = -Math.abs(this.flySpeed);
            console.log('voa alto (batendo no chão, voltando a subir)');
        }

        if (this.x > 1250 || this.x < -50) {
            this.mudaPosicao();
        }
    }

    mudaPosicao() {
        this.limit = true; // Força recalcular os limites na nova posição Y
        this.speed = Math.random() * this.speedHigh;
        this.flySpeed = Math.random() * this.speedHigh-2;
        let roleta = Math.random() >= 0.5;
        if (roleta) {
            this.x = -20;
            this.speed = Math.abs(this.speed); 
            console.log('velocidade positiva');
        } else {
            this.x = 1220;
            this.speed = -Math.abs(this.speed); 
            console.log('velocidade negativa');
        }
        
        // Sorteia um Y que dê margem para respeitar os 30 pixels de teto e chão (ex: entre 50 e 550)
        this.y = Math.random() * 500 + 180;

        console.log('mudou posicao para y = ' + this.y);
    }
}
