
//Deletar
document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.btn-danger').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            var id = document.getElementById('profissionalId').value;

            if (id) {

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
    
    event.preventDefault();

    var id = document.getElementById('profissionalId').value;

    
    if (id) {
        
        document.getElementById('editForm').submit();
    } else {
        console.error("O Id do profissional não foi encontrado.");
    }
});