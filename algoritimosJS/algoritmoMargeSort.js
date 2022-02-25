// dividir para conquistar!!!!!!!

const listaLivros = require('./array');

function mergeSort(array) {

   if(array.length > 1) {

      const meio = Math.floor(array.length / 2);
      const part1 = mergeSort(array.slice(0, meio));
      const part2 = mergeSort(array.slice(meio, array.length));
      array = ordena(part1, part2);


   }

   return array;
}

function ordena(part1, part2){

   let posicaoAtualParte1 = 0
   let posicaoAtualParte2 = 0
   const resultado = []

   while (posicaoAtualParte1 < part1.length && posicaoAtualParte2 < part2.length) {

      let prudutoAtualParte1 = part1[posicaoAtualParte1];
      let produtoAtualParte2 = part2[posicaoAtualParte2];

      if (produtoAtualParte1.preco < produtoAtualParte2.preco) {

         resultado.push(prudutoAtualParte1)
         produtoAtualParte1++;

      } else {

         resultado.push(produtoAtualParte2)
         posicaoAtualParte2++;

      }
   }

   return resultado.concat(posicaoAtualParte1 < part1.length
      ? part1.slice(posicaoAtualParte1)
      : part2.slice(posicaoAtualParte2)
   )
}


console.log(mergeSort(Listalivros));