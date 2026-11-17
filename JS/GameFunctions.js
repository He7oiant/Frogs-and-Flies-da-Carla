var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//entidades do jogo
var frog1 = new Frog(200, 700, 4, 10, 5, 0, 2, 'orange');
var frog2 = new Frog(1000, 700, 4, 10, 5, 0, 2, 'black');
var lingua1 = new Lingua();
var lingua2 = new Lingua();
var mosca = new Mosca(0, 300, 10, 10, 'black');
var mosca2 = new Mosca(1220, 500, 10, 10, 'black');

//para o timer
let tempoInicial = 180;
let tempoRestante = tempoInicial;
let inicioJogo = Date.now();
let jogoAtivo = true;
let minhacor= '#0bb7e2';

//placar
var pontos1 = 0; 
var pontos2 = 0;


Draw();

function Timer()
{
    if(!jogoAtivo)
    {
        return;
    }

    let tempoDecorrido = (Date.now() - inicioJogo) / 1000;

    tempoRestante = Math.max(0, tempoInicial - Math.floor(tempoDecorrido));
    if(tempoRestante<= 120)
    {
        if(tempoRestante<=60)
        {
            minhacor= '#14044b';
        }
        else{
            minhacor= '#111dbe';
        }
    }
    if(tempoRestante <= 0)
    {
        jogoAtivo = false;
        console.log("Fim de jogo!");
    }
}

function Draw() {

    Timer();
    if(!jogoAtivo)
    {
        pincel.clearRect(0,0,1200,1200);
        return;
    }
    pincel.fillStyle = minhacor;
    pincel.fillRect(0, 0, 1200, 900);
    pincel.fillStyle = '#284dc7';
    pincel.fillRect(0, 600, 1200, 300);
    BgGrass(110, 610, 7);
    mosca.desenha();
    mosca.move(3, 30, 1);
    if (!frog1.sapopula) {
        frog1.Sapinho(frog1.x, frog1.y, frog1.scale);
    }
    frog1.Jumpdraw(frog1.x, frog1.y, frog1.scale);
    if (!frog2.sapopula) {
        frog2.Sapinho(frog2.x, frog2.y, frog2.scale);
    }
    frog2.Jumpdraw(frog2.x, frog2.y, frog2.scale);
    mosca.move();
    mosca2.desenha();
    mosca2.move();

    frog1.move();
    frog1.Jump();
    lingua1.atualiza(frog1.dir); // Atualiza a língua com a direção do sapo
    lingua1.desenha(frog1.x, frog1.y, frog1.dir);
    pontos1 = verificarColisoes(frog1, mosca, lingua1, pontos1);
    pontos1 = verificarColisoes(frog1, mosca2, lingua1, pontos1);


    frog2.move();
    frog2.Jump();
    lingua2.atualiza(frog2.dir); // Atualiza a língua com a direção do sapo
    lingua2.desenha(frog2.x, frog2.y, frog2.dir);
    pontos2 = verificarColisoes(frog2, mosca, lingua2, pontos2);
    pontos2 = verificarColisoes(frog2, mosca2, lingua2, pontos2);

    Placar();
}
setInterval(Draw, 10);

window.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.code === 'KeyW') {
        frog1.sapoandando = true;
        frog1.sapopula = true;
    }
});

window.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
        event.preventDefault();
        frog2.sapoandando = true;
        frog2.sapopula = true;
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'e' || event.code === 'KeyE') {
        lingua1.dispara();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        lingua2.dispara();
    }
});

function verificarColisoes(frog, mosca, lingua, pontos) {
    const hitboxLingua = lingua.getHitbox(
        frog.x,
        frog.y,
        frog.dir
    );

    // Se não existe hitbox, não há colisão
    if (!hitboxLingua) {
        return pontos;
    }

    // Verifica a colisão
    if (colidiu(hitboxLingua, mosca)) {

        // Remove a mosca do array
        mosca.mudaPosicao();

        // Adiciona pontuação
        pontos += 1;
    }
    return pontos; // Retorna a pontuação atualizada

}

function colidiu(a, b) {

    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );

}
function Placar() {
    pincel.font = '90px Arial';
    pincel.fillStyle = frog1.color;
    pincel.fillText(pontos1, 300, 300);
    pincel.fillStyle = frog2.color;
    pincel.fillText(pontos2, 850, 300);
}

function BgGrass(x, y, escala = 1) {
    // Grade de pixels original da vitória-régia dupla com as marcas d'água internas (1 = folha verde, 2 = detalhe interno)
    const mapaPlanta = [
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ];

    const tamanhoPixel = 4 * escala; // Ajusta o tamanho de cada pixel retrô

    for (l = 0; l < mapaPlanta.length; l++) {
        for (c = 0; c < mapaPlanta[l].length; c++) {
            const valor = mapaPlanta[l][c];

            if (valor !== 0) {
                // Define a cor: verde principal (#59A034) ou tom de detalhe/veia da folha (#4A802B)
                pincel.fillStyle = valor === 1 ? '#59A034' : pincel.fillStyle = '#284dc7';
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

