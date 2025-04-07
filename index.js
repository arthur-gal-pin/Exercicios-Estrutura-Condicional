const idade = parseInt(prompt("Informe sua idade:"));

if (isNaN(idade)) {
    alert('Erro: Você não digitou uma idade válida!')
}

if (!isNaN(idade)); {
    if (idade > 0) {
        if (idade >= 18) {
            alert("Você é maior de idade!");
        } else if (idade < 18 && idade != 0){
            alert("Você é menor de idade.");
        }

    } else if (num < 0 && num != 0) {
        alert("A idade não pode ser negativa.");
    } }
