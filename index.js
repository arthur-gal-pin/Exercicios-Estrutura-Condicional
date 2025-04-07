const num = parseInt(prompt("Informe um número:"));

if (isNaN(num)) {
    alert('Erro: Você não digitou um valor válido!')
}

if (!isNaN(num)); {
    if (num >= 0 && num%5 == 0) {
        alert(`O número ${num} é divisível por 5.`)
    } else if (num >= 0 && num%5 != 0) {
        alert(`O número ${num} não é divisível por 5.`);
    } else if (num <= 0){
        alert("O número não pode ser negativo! O conceito de divisibilidade se aplica apenas ao conjunto dos números naturais.");
    }
}
