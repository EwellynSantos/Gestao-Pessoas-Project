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

//modal deletar
function setDeleteId(id) {
    var modalId = '#deleteModal-' + id;  
    $(modalId).modal('show');
}







