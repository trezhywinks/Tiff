//$(document).ready(function(){
//  $('#valor').mask('0.000,00');
//})

$(document).ready(function(){
  // Máscara flexível para valores a partir de 0,00 até milhares
  $('#valor').mask('###.###.##0,00', {reverse: true});
});
