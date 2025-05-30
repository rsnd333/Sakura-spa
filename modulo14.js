$(document).ready(function () {
    $("#telefone").mask("(00)00000-0000", {
        placeholder: "(00)00000-0000"
    })
    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                telefone: true
            },
            mensagem: {
                required: true
            },
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },
    })
})

const ano = document.querySelector("#ano-atual");
ano.innerHTML = new Date().getFullYear();