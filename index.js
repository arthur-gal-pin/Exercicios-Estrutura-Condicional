const idade = parseInt(prompt("Informe sua idade em anos:"));

if (isNaN(idade)) {
    alert('Erro: Você não digitou uma idade válida!')
}

if (!isNaN(idade)); {
    if (idade >= 0) {
        if (idade >= 18) {
            alert("Você é maior de idade!");
        } else if (idade >= 0 && idade < 18) {
            alert("Você é menor de idade.");
        }

    } else if (idade < 0) {
        alert("A idade não pode ser negativa.");
    }
}
