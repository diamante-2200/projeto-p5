function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("white");
    fill("black");
    textSize(64)
    textAlign(CENTER);
    
    let maximo = width;
    let minimo = 0;
    
  textFont("Helvetica");
  
    let palavra = "mirrorball"
    
    let quantidade = map(mouseX, 0, width, 0, 9)
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 200, 200)
  }