//modal editar
function openEditModal(id, nome, especialidade, tipoDocumento, numeroDocumento) {
    document.getElementById('profissionalId').value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('especialidade').value = especialidade;
    document.getElementById('tipoDocumento').value = tipoDocumento;
    document.getElementById('numeroDocumento').value = numeroDocumento;
}


//modal cadastrar
function saveCreateModal() {
    var nome = document.getElementById('nomeCreate').value;
    var especialidade = document.getElementById('especialidadeCreate').value;
    var tipoDocumento = document.getElementById('tipoDocumentoCreate').value;
    var numeroDocumento = document.getElementById('numeroDocumentoCreate').value;

    if (nome && especialidade && tipoDocumento && numeroDocumento) {
        
        console.log("Novo Profissional Criado:");
        console.log("Nome: " + nome);
        console.log("Especialidade: " + especialidade);


        $('#createModalPartial').modal('hide');
        
    } else {
        alert('Preencha todos os campos.');
    }
}

function setDeleteId(id) {
    var modalId = '#deleteModal-' + id;  // Gerando ID único para o modal
    // Mostrar o modal específico
    $(modalId).modal('show');
}

document.addEventListener('DOMContentLoaded', function () {
    // Escutando o evento de click para o botão 'Excluir'
    document.querySelectorAll('.btn-danger').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            var id = document.getElementById('profissionalId').value;  // Obtém o ID do profissional

            if (id) {
                // Submete o formulário manualmente
                document.getElementById('deleteForm').submit();
            } else {
                console.error("O Id do profissional não foi encontrado.");
            }
        });
    });
});

//Salvar
document.getElementById('saveCreate').addEventListener('click', function () {
    document.getElementById('createForm').submit();
});

//Editar
document.getElementById('saveEdit').addEventListener('click', function (event) {
    // Previne o comportamento padrão de submissão do formulário
    event.preventDefault();

    var id = document.getElementById('profissionalId').value;

    // Verifica se o ID está presente
    if (id) {
        // Submete o formulário manualmente
        document.getElementById('editForm').submit();
    } else {
        console.error("O Id do profissional não foi encontrado.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const especialidadeSelect = document.getElementById("especialidade");
    const tipoDocumentoInput = document.getElementById("tipoDocumento");

    especialidadeSelect.addEventListener("change", function () {
        const selectedOption = this.options[this.selectedIndex];

        const tipoDocumento = selectedOption.getAttribute("data-tipoDocumento");

        tipoDocumentoInput.value = tipoDocumento;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const especialidadeSelect = document.getElementById("especialidadeEdit");
    const tipoDocumentoInput = document.getElementById("tipoDocumentoEdit");

    especialidadeSelect.addEventListener("change", function () {
        const selectedOption = this.options[this.selectedIndex];

        const tipoDocumento = selectedOption.getAttribute("data-tipoDocumento");

        tipoDocumentoInput.value = tipoDocumento;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterOptions = document.querySelectorAll(".filter-option");

    filterOptions.forEach(option => {
        option.addEventListener("click", function (event) {
            event.preventDefault();

            const filterValue = this.getAttribute("data-filter");

            if (filterValue === "all") {
                window.location.href = "/Profissional/Index";
            } else {
                window.location.href = `/Profissional/Index?especialidadeId=${filterValue}`;
            }
        });
    });
});


