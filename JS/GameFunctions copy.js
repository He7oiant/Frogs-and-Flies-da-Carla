var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var frog1 = new Player(200, 610, 10, 300);
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
    Sapinho(frog1.x, frog1.y, frog1.escala);
}

 window.addEventListener('keydown', (event) => {
        if (event.key === ' ' || event.code === 'Space') {
            console.log('A tecla de espaço foi pressionada!');
            frog1.Lingua(frog1.x, frog1.y, frog1.escala, lingua.x, lingua.y);
            setTimeout(()=>{ApagaLingua(frog1.x, frog1.y, frog1.escala, lingua.x, lingua.y)}, 2000);
    }
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === ' ' || event.code === 'ArrowUp') {
            frog1.move(frog1.x, frog1.y, frog1.speed, frog1.height);
    }
    });


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

    for (l = 0; l < mapaPlanta.length; l++) {
        for (c = 0; c < mapaPlanta[l].length; c++) {
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
