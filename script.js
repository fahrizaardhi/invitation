let currentPageIndex = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.toggle("active", i === index);
    });
}

function nextPage() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
    }
}

// Tampilkan halaman pertama
showPage(currentPageIndex);

function goToPage(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang dituju
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}
