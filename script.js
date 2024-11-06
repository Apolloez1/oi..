let currentPage = 1;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    const totalPages = pages.length;

    // Controle para o loop nas páginas
    if (pageNumber < 1) {
        currentPage = totalPages;
    } else if (pageNumber > totalPages) {
        currentPage = 1;
    } else {
        currentPage = pageNumber;
    }

    // Mostra a página atual e esconde as outras
    pages.forEach((page, index) => {
        page.style.display = (index + 1 === currentPage) ? 'block' : 'none';
        page.style.opacity = (index + 1 === currentPage) ? '1' : '0';
    });
}

function nextPage() {
    showPage(currentPage + 1);
}

function previousPage() {
    showPage(currentPage - 1);
}

// Inicializa com a primeira página visível
showPage(currentPage);
