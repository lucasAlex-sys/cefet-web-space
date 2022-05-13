// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML 
  
  let conta = document.querySelector("#calcular");
  conta.addEventListener('click', function() {
    let massa1 =  document.querySelector('#massa1').value
    let massa2 = document.querySelector('#massa2').value 
    let distancia = document.querySelector('#distancia').value 
    let constante = document.querySelector('#constante').value 
    let resultado = document.querySelector('#resultado')
   
    resultado.value = parseFloat((constante*massa1*massa2)/(Math.pow(distancia,2)))
  });
  