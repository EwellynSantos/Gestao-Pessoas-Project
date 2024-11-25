//select cadastrar
document.addEventListener("DOMContentLoaded", function () {
    const especialidadeSelect = document.getElementById("especialidade");
    const tipoDocumentoInput = document.getElementById("tipoDocumento");

    especialidadeSelect.addEventListener("change", function () {
        const selectedOption = this.options[this.selectedIndex];

        const tipoDocumento = selectedOption.getAttribute("data-tipoDocumento");

        tipoDocumentoInput.value = tipoDocumento;
    });
});

//select editar
document.addEventListener("DOMContentLoaded", function () {
    const especialidadeSelect = document.getElementById("especialidadeEdit");
    const tipoDocumentoInput = document.getElementById("tipoDocumentoEdit");

    especialidadeSelect.addEventListener("change", function () {
        const selectedOption = this.options[this.selectedIndex];

        const tipoDocumento = selectedOption.getAttribute("data-tipoDocumento");

        tipoDocumentoInput.value = tipoDocumento;
    });
});