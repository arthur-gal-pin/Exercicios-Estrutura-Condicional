const num = parseFloat(prompt("Insira um número:"));

if (isNaN(num)) {
    alert('Erro: Você não digitou um número válido!')
}

if (!isNaN(num)); {
    if (num > 0 && num != 0) {
        alert("O número é positivo.");
    } else if (num < 0 && num != 0) {
        alert("O número é negativo.");
    } else if (num == 0){
        alert("O número é neutro.");
    }
}
