const lista = ['arroz', "feijao"] //elementos cujo eu quero imprimir
let contador = 0 //variavel igual a 0
function imprimir() {
  console.log(lista) 
    contador++; 
  if (contador < 5){
    setTimeout(imprimir, 3000); 
  }
} // função que imprime 'lista' 5 vezes a cada 3 segundos
imprimir()


