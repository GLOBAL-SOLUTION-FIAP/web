/**
 * API -> https://viacep.com.br/ws/{cep}/json/
 */

window.addEventListener('DOMContentLoaded', function () {
    const cepInput = document.getElementById('cep');
    cepInput.addEventListener('input', function (e) {
        const cep = e.target.value;
        if (cep.length == 9) {
            buscaCep(cep);
        }
    })
});

function preencheDados(response = {}) {
    document.getElementById('logradouro').value = response.logradouro || "";
    document.getElementById('bairro').value = response.bairro || "";
    document.getElementById('estado').value = response.uf || "";
    document.getElementById('complemento').value = response.complemento || "";

    if (!response.cep) {
        alert("Cep não encontrado!")
    }
}


function buscaCep(cep) {
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            preencheDados(data);
        })
        .catch(error => {
            preencheDados();
            console.error(error)
        });
}
