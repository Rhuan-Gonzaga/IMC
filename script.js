var form = document.getElementById("resultado");
var resp = document.getElementById("resposta")



form.addEventListener("submit",function calculo(previne){
   let altura = Number(form.altura.value);
   let peso = Number(form.peso.value);
   
   let imc = peso/(altura*altura)
   resp.innerHTML = "Seu IMC: "+imc.toFixed(2);

    previne.preventDefault();
});


