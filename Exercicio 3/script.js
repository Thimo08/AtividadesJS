function calcularAumento() {
    let pessoa = parseFloat(document.getElementById('pessoa').value);
    let valor = 0;

    if (pessoa < 50) {
        valor = pessoa * 4.5;
    } else if (pessoa < 100) {
        valor = pessoa * 4.1;
    } else if (pessoa < 150) {
        valor = pessoa * 3.8;
    } else if (pessoa >= 150) { 
        valor = pessoa * 3.6;
    }

    document.getElementById('resultado').textContent = `R$ ${valor.toFixed(2)}`;
}