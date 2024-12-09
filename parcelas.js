document.getElementById('parcelamento-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const valor = parseFloat(document.getElementById('valor').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);
    const juros = parseFloat(document.getElementById('juros').value) / 100;

    // Cálculo da parcela
    const taxa = Math.pow(1 + juros, parcelas);
    const valorParcela = (valor * taxa * juros) / (taxa - 1);

    // Cálculo do valor total pago
    const valorTotal = valorParcela * parcelas;

    // Exibir resultado
    document.getElementById('resultado').innerText = `Valor da Parcela: R$ ${valorParcela.toFixed(2)}, Valor Total Pago: R$ ${valorTotal.toFixed(2)}`;
});
