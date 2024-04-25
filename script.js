document.getElementById("adicionarProduto").addEventListener("click", function() {
   
    var novoProdutoInput = document.createElement("input");
    novoProdutoInput.type = "number";
    novoProdutoInput.name = "precoProduto";
    novoProdutoInput.step = "0.01";


    document.getElementById("produtos").appendChild(document.createElement("br"));
    document.getElementById("produtos").appendChild(novoProdutoInput);
});

document.getElementById("Calculadora").addEventListener("submit", function(event) {
    event.preventDefault();
    var precosProdutos = document.getElementsByName("precoProduto");
    var totalCompra = 0;
    for (var i = 0; i < precosProdutos.length; i++) {
        totalCompra += parseFloat(precosProdutos[i].value) || 0; 
    }
    document.getElementById("totalCompra").textContent = totalCompra.toFixed(2);
});


