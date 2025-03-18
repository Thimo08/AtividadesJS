let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let res = document.getElementById('res');

function somar() {
    if (Number(n1.value) < 0 || Number(n2.value) < 0) {
        res.innerHTML += `<p>Por favor, insira apenas números não negativos.</p>`;
        return;
    }
    res.innerHTML += `<p>O resultado da soma entre ${n1.value} e ${n2.value} é ${Number(n1.value) + Number(n2.value)}</p>`;
}

function subtrair() {
    if (Number(n1.value) < 0 || Number(n2.value) < 0) {
        res.innerHTML += `<p>Por favor, insira apenas números não negativos.</p>`;
        return;
    }
    res.innerHTML += `<p>O resultado da subtração entre ${n1.value} e ${n2.value} é ${Number(n1.value) - Number(n2.value)}</p>`;
}

function multiplicar() {
    if (Number(n1.value) < 0 || Number(n2.value) < 0) {
        res.innerHTML += `<p>Por favor, insira apenas números não negativos.</p>`;
        return;
    }
    res.innerHTML += `<p>O resultado da multiplicação entre ${n1.value} e ${n2.value} é ${Number(n1.value) * Number(n2.value)}</p>`;
}

function dividir() {
    if (Number(n1.value) < 0 || Number(n2.value) < 0) {
        res.innerHTML += `<p>Por favor, insira apenas números não negativos.</p>`;
        return;
    }
    if (Number(n2.value) === 0) {
        res.innerHTML += `<p>Não é possível dividir por zero.</p>`;
    } else {
        res.innerHTML += `<p>O resultado da divisão entre ${n1.value} e ${n2.value} é ${Number(n1.value) / Number(n2.value)}</p>`;
    }
}

function potencia() {
    if (Number(n1.value) < 0 || Number(n2.value) < 0) {
        res.innerHTML += `<p>Por favor, insira apenas números não negativos.</p>`;
        return;
    }
    res.innerHTML += `<p>O resultado da potência de ${n1.value} elevado a ${n2.value} é ${Math.pow(Number(n1.value), Number(n2.value))}</p>`;
}

function raizQuadrada() {
    if (Number(n1.value) < 0 || Number(n2.value) < 0) {
        res.innerHTML += `<p>Por favor, insira apenas números não negativos.</p>`;
        return;
    }
    if (Number(n1.value) >= 0) {
        res.innerHTML += `<p>A raiz quadrada de ${n1.value} é ${Math.sqrt(Number(n1.value))}</p>`;
    } else {
        res.innerHTML += `<p>Não é possível calcular a raiz quadrada de um número negativo.</p>`;
    }
    if (Number(n2.value) >= 0) {
        res.innerHTML += `<p>A raiz quadrada de ${n2.value} é ${Math.sqrt(Number(n2.value))}</p>`;
    } else {
        res.innerHTML += `<p>Não é possível calcular a raiz quadrada de um número negativo.</p>`;
    }
}

function limpar() {
    res.innerHTML = '';
}