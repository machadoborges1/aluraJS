const listaLivros = require('./array');

function encontraMenores(pivo, array){

   let menores = 0;

   for(let atual = 0; atual < array.length; atual++){
      let produtoAtual = array[atual]
      if(produtoAtual.preco < pivo.preco) {
         menores++
      }
   }

   trocaLugar(array, array.indexOf(pivo), menores);
   return array;
}

function trocaLugar(array, de , para){
   const elemento1 = array[de]
   const elemento2 = array[para]

   array[para] = elemento1
   array[de] = elemento2
}

cnsole.log(encontraMenores(listaLivros[2], listaLivros));