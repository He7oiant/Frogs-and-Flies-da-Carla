var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var jogador = { 
  x: 200, 
  y: 610,
  escala: 10
};
var lingua={
    x: 70,
    y: 20,
    escala: 0
};
Draw();

function Draw() {
    pincel.fillStyle = '#0bb7e2';
    pincel.fillRect(0, 0, 1200, 900);
    pincel.fillStyle = '#284dc7';
    pincel.fillRect(0,600,1200,300);
    BgGrass(110,610,7);
    Frog(jogador.x, jogador.y, jogador.escala);
    Lingua(jogador.x, jogador.y, jogador.escala, lingua.x, lingua.y);
}
function Frog(x,y, escala = 1)
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
function FrogJump(x,y, escala = 1)
{
    var sapo = [
        [0,0,0,0,1,1,0],
        [0,0,1,1,0,1,1],
        [1,1,1,1,1,1,1],
        [1,1,1,1,0,0,0],
        [1,1,0,0,0,0,0],
        [1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0]
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

function Lingua(x,y, escala, x2, y2)
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

function BgGrass(x, y, escala = 1) {
    // Grade de pixels original da vitória-régia dupla com as marcas d'água internas (1 = folha verde, 2 = detalhe interno)
    const mapaPlanta = [
        [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,0,0],
        [0,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1],
        [1,1,1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,1],
        [1,1,1,1,2,1,1,1,2,2,2,1,1,1,2,1,1,1,1,1,1,2,1,1,1,2,2,2,1,1,1,2,1,1,1,1],
        [0,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0]
    ];


    const tamanhoPixel = 4 * escala; // Ajusta o tamanho de cada pixel retrô

    for (let l = 0; l < mapaPlanta.length; l++) {
        for (let c = 0; c < mapaPlanta[l].length; c++) {
            const valor = mapaPlanta[l][c];
            
            if (valor !== 0) {
                // Define a cor: verde principal (#59A034) ou tom de detalhe/veia da folha (#4A802B)
                pincel.fillStyle = valor === 1 ? '#59A034' :  pincel.fillStyle = '#284dc7';
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