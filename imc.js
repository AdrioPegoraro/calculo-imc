let peso = prompt('Indique seu peso:')
let altura = prompt('Indique sua altura:')
let imc = peso / (altura * altura)
alert('Seu IMC é ' + imc)

if (imc < 18.5) {
    alert('Magreza')
} else if (imc < 25) {
    alert('Peso Normal!')
} else if (imc < 30) { 
    alert('Você está com sobrepeso')
} else if (imc < 35) { 
    alert('Você está com obesidade grau 1')
} else if (imc < 40) {
    alert('Você está com obesidade grau 2')
} else {
    alert('Obesidade grau 3')
}