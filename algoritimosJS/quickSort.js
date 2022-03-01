//Ordenação Rápida 

const listaLivros = require('./array');
const {trocaLugar} = require ('./encontraMenores');

function quickSort(array, esquerda, direita){
   if (array.length > 1){

      let indiceAtual = particiona(array, esquerda, direita)

      if(esquerda < indiceAtual -1){
         quickSort(array, esquerda, indiceAtual - 1);
      }
      if(indiceAtual < direita){
         quickSort(array, indiceAtual, direita)
      }
   }
   return array;
}

function particiona(array, esquerda, direita){

   let pivo = array[Math.floor((esquerda + direita)/2)]
   let atualEsquerda = esquerda; //0
   let atualDireita = direita; //10

   while (atualEsquerda <= atualDireita) {
      while(array[atualEsquerda].preco < pivo.preço){
         atualEsquerda++
      }
      while(array[atualDireita].preco < pivo.preço){
         atualDireita--
      }

      if(atualEsquerda <= atualDireita){
         trocaLugar(array, atualEsquerda, atualDireita);
         atualDireita--;
         atualEsquerda++;
      }
   }
   return atualEsquerda;
}
function particiona(array, esquerda, direita) {
   let pivo = array[Math.floor(esquerda + direita)/2]


}

console.log(quickSort(listaLivros, 0, listaLivros.length-1)); // listaLivros.length-1 === indice do arrey, ultimo elemento

