const preco = parseFloat(prompt("Informe o preço da compra (apenas os números, separando decimal com ponto):"));

//Verifica se o input realizado pelo usuário no prompt é um número.
if (isNaN(preco)) {
    alert('Erro: Você não digitou um valor válido!')
}

if (!isNaN(preco)); {
    if (preco >= 100) {
        alert(`Você recebeu um desconto de ${preco*0.1} reais! O valor total de sua compra será de, então, ${preco*0.9} reais`) //Os valores de 0.1 e 0.9 representam um desconto de 10% em relação ao valor do produto. 0.1 do preço inicial é o desconto e 0.9 é do preço inicial é o preço final.
    } else if (preco < 100 && preco > 0) //Preço aplicável mas sem desconto.
    {
        alert(`A compra terá um valor de ${preco} reais`);
    } else if (preco <= 0)//Não existe compra negativa ou zerada.
    {
        alert("A compra não pode custar nada, nem menos do que nada!");
    }
}
