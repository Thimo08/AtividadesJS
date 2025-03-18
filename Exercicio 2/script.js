function calcularAumento() {
    let salario = parseFloat(document.getElementById('salario').value);
    let novoSalario = 0;

    if (salario < 1200) {
        novoSalario = salario * 1.16;
    } else if (salario < 2100) {
        novoSalario = salario * 1.13;
    } else if (salario < 3000) {
        novoSalario = salario * 1.1;
    } else if (salario > 3000) {
        novoSalario = salario * 1.05;
    }

    document.getElementById('resultado').textContent = `R$ ${novoSalario.toFixed(2)}`;
}