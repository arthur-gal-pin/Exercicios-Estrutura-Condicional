const num = parseInt(prompt("Insira um número:"));

if (isNaN(num)) {
    alert('Erro: Você não digitou um número válido!')
}

if (!isNaN(num)); {
    if (num%2 == 0) {
        alert("O número é par.");
    } else if (num%2 != 0) {
        alert("O número é ímpar.");
    }}
