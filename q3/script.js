function Quadrilatero() {}

Quadrilatero.prototype.calcularArea = function() {
  throw new Error("Método calcularArea deve ser implementado nas subclasses");
};

Quadrilatero.prototype.calcularPerimetro = function() {
  throw new Error("Método calcularPerimetro deve ser implementado nas subclasses");
};

function Retangulo(lado, altura) {
  this.lado = lado;
  this.altura = altura;
}


Retangulo.prototype = Object.create(Quadrilatero.prototype);
Retangulo.prototype.constructor = Retangulo;


Retangulo.prototype.calcularArea = function() {
  return this.lado * this.altura;
};

Retangulo.prototype.calcularPerimetro = function() {
  return 2 * (this.lado + this.altura);
};


function Circulo(raio) {
  this.raio = raio;
}


Circulo.prototype = Object.create(Quadrilatero.prototype);
Circulo.prototype.constructor = Circulo;


Circulo.prototype.calcularArea = function() {
  return Math.PI * Math.pow(this.raio, 2);
};

Circulo.prototype.calcularPerimetro = function() {
  return 2 * Math.PI * this.raio;
};


function Quadrado(lado) {
  Retangulo.call(this, lado, lado); 
}


Quadrado.prototype = Object.create(Retangulo.prototype);
Quadrado.prototype.constructor = Quadrado;


const arrayQuadrilateros = [
  new Retangulo(5, 10),
  new Circulo(7),
  new Quadrado(4),
  new Circulo(5),
  new Retangulo(3, 8)
];


arrayQuadrilateros.forEach(quadrilatero => {
  console.log("Área:", quadrilatero.calcularArea());
  console.log("Perímetro:", quadrilatero.calcularPerimetro());
  console.log("===========================");
});