const num = parseFloat(prompt("Insira um número:"));

//Verifica se o input realizado pelo usuário no prompt é um número.
if (isNaN(num)) {
    alert('Erro: Você não digitou um número válido!')
}

if (!isNaN(num)); {
    if (num > 0) //Verifica se o número é maior que zero, logo positivo.
    {
        alert("O número é positivo.");
    } else if (num < 0 && num != 0)//Verifica se o número é menor que zero, logo negativo.
    {
        alert("O número é negativo.");
    } else if (num == 0) //Verifica se o número é zero, logo neutro.
    {
        alert("O número é neutro.");
    }
}
