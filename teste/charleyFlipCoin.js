function flip(coisa){
    var valor = Math.floor(Math.random() * coisa.length);
    return coisa[valor]
}
var input1 = process.argv[2];
if (input1 == 'Hola') {
    console.log('Hola')
} else if (input1 == 'Bye') {
    console.log('Adios')
}  else if (input1 == 1, 2, 3, 4, 5, 6, 7, 8, 9){
    
} else {
    console.log('Nao entendi')
}
// let cuantasVeces = parseInt(process.argv[2])
var Coin = ['cara', 'coroa'];
for (var i = 1; i <=input1; i++) {
var flipCoin = flip(Coin)
console.log(`Tirada ${i}: ${flipCoin}`);
}