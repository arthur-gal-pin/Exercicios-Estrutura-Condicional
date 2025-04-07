const preco = parseFloat(prompt("Informe o preço da compra (apenas os números, separando decimal com ponto):"));

if (isNaN(preco)) {
    alert('Erro: Você não digitou um valor válido!')
}

if (!isNaN(preco)); {
    if (preco >= 100) {
        alert(`Você recebeu um desconto de ${preco*0.1} reais! O valor total de sua compra será de, então, ${preco*0.9} reais`)
    } else if (preco < 100 && preco > 0) {
        alert(`A compra terá um valor de ${preco} reais`);
    } else if (preco <= 0){
        alert("A compra não pode custar nada, nem menos do que nada!");
    }
}
