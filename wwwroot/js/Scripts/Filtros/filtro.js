
const filterOptions = document.querySelectorAll(".filter-option");
const tableRows = document.querySelectorAll("tbody tr");


const noResultsMessage = document.createElement("tr");
noResultsMessage.innerHTML = `<td colspan="6" class="text-center">Nenhum profissional encontrado para este filtro.</td>`;
noResultsMessage.style.display = "none"; 
document.querySelector("tbody").appendChild(noResultsMessage);

filterOptions.forEach(option => {
    option.addEventListener("click", function (event) {
        event.preventDefault();

        const filter = this.getAttribute("data-filter");
        let hasResults = false;


        tableRows.forEach(row => {
            const rowSpecialtyId = row.getAttribute("data-specialty-id");

            if (filter === "all" || rowSpecialtyId === filter) {
                row.style.display = ""; 
                hasResults = true;
            } else {
                row.style.display = "none"; 
            }
        });


        noResultsMessage.style.display = hasResults ? "none" : "";
    });
});
