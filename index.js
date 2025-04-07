const idade = parseInt(prompt("Informe sua idade em anos:"));

//Verifica se o input realizado pelo usuário no prompt é um número.
if (isNaN(idade)) {
    alert('Erro: Você não digitou uma idade válida!')
}

if (!isNaN(idade)); {
    if (idade >= 0) //Verifica se a idade é maior ou igual a zero, idade aplicavél.
    {
        if (idade >= 18) //18 anos para mais é maior de idade.
        {
            alert("Você é maior de idade!");
        } else if (idade >= 0 && idade < 18) //Entre 0 e 17 anos se é menor de idade.
        {
            alert("Você é menor de idade.");
        }
    } else if (idade < 0) {
        alert("A idade não pode ser negativa.");
    }
}
