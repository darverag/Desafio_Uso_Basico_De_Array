let Radiologia = [{
    Hora: '11:00',
    Especialista: 'Ignacio Schulz',
    Paciente: 'Francisca Rojas',
    Rut: '9878782-1-6',
    Prevision: 'FONASA'
}, {
    Hora: '11:30',
    Especialista: 'Federico Subercaseaux',
    Paciente: 'Pamela Estrada',
    Rut: '15345241-3',
    Prevision: 'ISAPRE'
}, {
    Hora: '15:00',
    Especialista: 'Fernando Wurthz',
    Paciente: 'Armando Luna',
    Rut: '16445345-9',
    Prevision: 'ISAPRE'
}, {
    Hora: '15:30',
    Especialista: 'Ana María Godoy',
    Paciente: 'Manuel Godoy',
    Rut: '17666419-0',
    Prevision: 'FONASA'
}, {
    Hora: '16:00',
    Especialista: 'Patricia Suazo',
    Paciente: 'Ramón Ulloa',
    Rut: '14989389-K',
    Prevision: 'FONASA'
}, ];

var titulos_1 = document.getElementById("titulos_1");
var textoTitulo = "";
var cabeceraColumnas = document.getElementById("cabeceraColumnas");
for (let clave in Radiologia[0]) {
    textoTitulo = textoTitulo + "<th scope='col'>" + clave.toUpperCase() + "</th>";
}
titulos_1.innerHTML = textoTitulo


var valores_1 = document.getElementById("valores_1");
var textoValores = "";
for (let objeto of Radiologia) {
    var valorFilaTr = "";
    for (let clave in objeto) {
        valorFilaTr = valorFilaTr + "<td>" + objeto[clave] + "</td>";
    }
    textoValores = textoValores + "<tr>" + valorFilaTr + "</tr>"
}
valores_1.innerHTML = textoValores

var primerUltimoPacienteRadiologia = document.getElementById("primerUltimoPacienteRadiologia");

for (let i = 0; i < Radiologia.length; i++) {
    primerUltimoPacienteRadiologia.innerHTML = `<h4 id="primerUltimoPacienteRadiologia">Primera atención: ${Radiologia[0].Paciente} - ${Radiologia[0].Prevision} | Última atención: ${Radiologia[Radiologia.length-1].Paciente} - ${Radiologia[Radiologia.length-1].Prevision} </h4>`;
}


let Traumatologia = [{
    Hora: '8:00',
    Especialista: 'María Paz Altuzarra',
    Paciente: 'Paula Sánchez',
    Rut: '15554774-5',
    Prevision: 'FONASA'
}, {
    Hora: '10:00',
    Especialista: 'Raúl Araya',
    Paciente: 'Angélica Navas',
    Rut: '15444147-9',
    Prevision: 'ISAPRE'
}, {
    Hora: '10:30',
    Especialista: 'María Arriagada',
    Paciente: 'Ana Klapp',
    Rut: '17879423-9',
    Prevision: 'ISAPRE'
}, {
    Hora: '11:00',
    Especialista: 'Alejandro Badilla',
    Paciente: 'Felipe Mardones',
    Rut: '1547423-6',
    Prevision: 'ISAPRE'
}, {
    Hora: '11:30',
    Especialista: 'Cecilia Budnik',
    Paciente: 'Diego Marre',
    Rut: '16554741-K',
    Prevision: 'FONASA'
}, {
    Hora: '12:00',
    Especialista: 'Arturo Cavagnaro',
    Paciente: 'Cecilia Mendez',
    Rut: '9747535-8',
    Prevision: 'ISAPRE'
}, {
    Hora: '12:30',
    Especialista: 'Andrés Kanagri',
    Paciente: 'Marcial Suazo',
    Rut: '11254785-5',
    Prevision: 'ISAPRE'
}, ];

var titulos_2 = document.getElementById("titulos_2");
var textoTitulo = "";
var cabeceraColumnas = document.getElementById("cabeceraColumnas");
for (let clave in Traumatologia[0]) {
    textoTitulo = textoTitulo + "<th scope='col'>" + clave.toUpperCase() + "</th>";
}
titulos_2.innerHTML = textoTitulo


var valores_2 = document.getElementById("valores_2");
var textoValores = "";
for (let objeto of Traumatologia) {
    var valorFilaTr = "";
    for (let clave in objeto) {
        valorFilaTr = valorFilaTr + "<td>" + objeto[clave] + "</td>";
    }
    textoValores = textoValores + "<tr>" + valorFilaTr + "</tr>"
}
valores_2.innerHTML = textoValores

var primerUltimoPacienteTraumatologia = document.getElementById("primerUltimoPacienteTraumatologia");

for (let i = 0; i < Traumatologia.length; i++) {
    primerUltimoPacienteTraumatologia.innerHTML = `<h4 id="primerUltimoPacienteTraumatologia">Primera atención: ${Traumatologia[0].Paciente} - ${Traumatologia[0].Prevision} | Última atención: ${Traumatologia[Traumatologia.length-1].Paciente} - ${Traumatologia[Traumatologia.length-1].Prevision}</h4>`;
}


let Dental = [{
    Hora: '8:30',
    Especialista: 'Andrea Zúñiga',
    Paciente: 'Marcela Retamal',
    Rut: '11123425-6',
    Prevision: 'ISAPRE'
}, {
    Hora: '11:00',
    Especialista: 'María Paz Zañartu',
    Paciente: 'Angel Muñoz',
    Rut: '9878789-2',
    Prevision: 'ISAPRE'
}, {
    Hora: '11:30',
    Especialista: 'Scarlett Witting',
    Paciente: 'Mario Kast',
    Rut: '7998789-5',
    Prevision: 'FONASA'
}, {
    Hora: '13:00',
    Especialista: 'Francisco Von Teuber',
    Paciente: 'Karin Fernández',
    Rut: '18887662-K',
    Prevision: 'FONASA'
}, {
    Hora: '13:30',
    Especialista: 'Eduardo Viñuela',
    Paciente: 'Hugo Sánchez',
    Rut: '17665461-4',
    Prevision: 'FONASA'
}, {
    Hora: '14:00',
    Especialista: 'Raquel Villaseca',
    Paciente: 'Ana Sepúlveda',
    Rut: '14441281-0',
    Prevision: 'ISAPRE'
}, ];

var titulos_3 = document.getElementById("titulos_3");
var textoTitulo = "";
var cabeceraColumnas = document.getElementById("cabeceraColumnas");
for (let clave in Dental[0]) {
    textoTitulo = textoTitulo + "<th scope='col'>" + clave.toUpperCase() + "</th>";
}
titulos_3.innerHTML = textoTitulo

var valores_3 = document.getElementById("valores_3");
var textoValores = "";
for (let objeto of Dental) {
    var valorFilaTr = "";
    for (let clave in objeto) {
        valorFilaTr = valorFilaTr + "<td>" + objeto[clave] + "</td>";
    }
    textoValores = textoValores + "<tr>" + valorFilaTr + "</tr>"
}
valores_3.innerHTML = textoValores

var primerUltimoPacienteDental = document.getElementById("primerUltimoPacienteDental");

for (let i = 0; i < Dental.length; i++) {
    primerUltimoPacienteDental.innerHTML = `<h4 id="primerUltimoPacienteDental">Primera atención: ${Dental[0].Paciente} - ${Dental[0].Prevision} | Última atención: ${Dental[Dental.length-1].Paciente} - ${Dental[Dental.length-1].Prevision}</h4>`;
}