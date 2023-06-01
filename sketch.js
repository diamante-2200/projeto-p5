//variaveis bolinha
//dimensões bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//velocidade bolinha
let velXBolinha = 3;
let velYBolinha = 3;

//variaveis raquete
//dimensoes raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

let chanceDeErrar = 0;

let colidiu = false;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  moveBolinha();
  verificaColisao();
  raquete();
  movimentaRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
}

function mostraBolinha() {
  fill("teal");
  circle(xBolinha, yBolinha, diametro);
}

function verificaColisao() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velXBolinha *= -1;
    raquetada.play();
    if(xBolinha + raio > 500){
      meusPontos ++;
      ponto.play();
    }
    else{
      {
     pontosDoOponente ++
        ponto.play();
      }
    }
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velYBolinha *= -1;
  }
}

function moveBolinha() {
  xBolinha += velXBolinha;
  yBolinha += velYBolinha;
}

function raquete() {
  fill("crimson");
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function colisaoRaqueteBiblioteca(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio
  );
  if (colidiu) {
    velXBolinha *= -1;
    raquetada.play();
  }
}


function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function incluiPlacar() {
  textAlign(CENTER);
  fill("orange")
  stroke("rgb(0,190,255)")
    rect(150, 10, 40, 20);
  rect(450, 10, 40, 20);
    fill("yellow");
  textSize(20);
  noStroke();
    text(meusPontos, 170, 26);
    text(pontosDoOponente, 470, 26);
}
