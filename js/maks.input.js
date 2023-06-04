window.addEventListener('DOMContentLoaded', function () {
    // TELEFONE
    telefone()

    // CEP
    cep()
});


function telefone() {
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function (e) {
        var telefone = e.target.value.replace(/\D/g, '').substring(0, 11);
        var formattedTelefone = '';

        if (telefone.length > 0) {
            formattedTelefone = '(' + telefone.substring(0, 2) + ')';
        }

        if (telefone.length > 2) {
            formattedTelefone += ' ' + telefone.substring(2, 7);
        }

        if (telefone.length > 7) {
            formattedTelefone += '-' + telefone.substring(7, 11);
        }

        e.target.value = formattedTelefone;
    });
}

function cep() {
    var cepInput = document.getElementById('cep');
    cepInput.addEventListener('input', function (e) {
        var cep = e.target.value.replace(/\D/g, '').substring(0, 8);
        var formattedCep = '';

        if (cep.length > 0) {
            formattedCep = cep.substring(0, 5);
        }

        if (cep.length > 5) {
            formattedCep += '-' + cep.substring(5, 8);
        }

        e.target.value = formattedCep;
    });
}