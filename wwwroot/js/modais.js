function openEditModal(id, nome, especialidade, tipoDocumento, numeroDocumento) {
    document.getElementById('profissionalId').value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('especialidade').value = especialidade;
    document.getElementById('tipoDocumento').value = tipoDocumento;
    document.getElementById('numeroDocumento').value = numeroDocumento;
}

function setDeleteId(id) {
    document.getElementById('confirmDelete').onclick = function () {
        window.location.href = '@Url.Action("Delete", "Profissional", new { id = "__id__" })'.replace('__id__', id);
    };
}

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


document.getElementById('saveCreate').onclick = saveCreateModal;