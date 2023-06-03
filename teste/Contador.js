function contagem() {
    var contador = 0;
     function incrementar() {
      contador+=1;
      console.log(contador);
    }
    return incrementar;
  }
  var entrada1 = process.argv[2];
  var meuContador = contagem();
 for (let i = 0; i < entrada1; i++) {
   meuContador(i)
 }
