// const agora = new Date();
// console.log(agora);

// const ano = agora.getFullYear();
// const mes = String(agora.getMonth() + 1).padStart(2, '0'); //Os meses começam a contar do 0
// const dia = agora.getDate();

// const dataModi = (`${dia}/${mes}/${ano}`);

// const horas = document.getElementById('horas');
// const minutos = document.getElementById('minutos');
// const segundos = document.getElementById('segundos');

// const relogio = setInterval(function time() {
//     let dateToday = new Date();
//     // let hr = dateToday.getHours();
//     // let min = dateToday.getMinutes();
//     // let seg = dateToday.getSeconds();
//     const data = dateToday.toLocaleDatString();
//     const hora = dateToday.toLocaleTimeString();
//     document.getElementById('dataAtual').innerText = `Hoje é: ${data} Às: ${hora}`;
// },1000);

const relogio = setInterval(function time() {
    let dateToday = new Date();
    const data = dateToday.toLocaleDateString();
    const hora = dateToday.toLocaleTimeString();
    document.getElementById('dataAtual').innerText = `Data: ${data} - Hora: ${hora}`;
},1000);

