function calcularHorasExtras() {
    let salario = parseFloat(document.getElementById('salario').value);
    let horasNormais = parseFloat(document.getElementById('horasNormais').value);
    let horasFinaisSemana = parseFloat(document.getElementById('horasFinaisSemana').value);

    let valorHora = salario / 200;
    let valorHorasNormais = valorHora * horasNormais;
    let valorHorasFinaisSemana = (valorHora * 1.5) * horasFinaisSemana;

    let totalReceber = valorHorasNormais + valorHorasFinaisSemana;

    document.getElementById('resultado').textContent = `R$ ${totalReceber.toFixed(2)}`;
}