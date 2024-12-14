let currentPageIndex = 0; // Indeks halaman aktif
const pages = document.querySelectorAll(".page"); // Daftar semua halaman

/**
 * Menampilkan halaman berdasarkan indeks
 * @param {number} index - Indeks halaman yang ingin ditampilkan
 */
function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.toggle("active", i === index); // Menambahkan class 'active' untuk halaman yang sesuai
    });
}

/**
 * Menampilkan halaman berikutnya
 */
function nextPage() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
    }
}

/**
 * Menampilkan halaman sebelumnya
 */
function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
    }
}

/**
 * Navigasi langsung ke halaman berdasarkan ID
 * @param {string} pageId - ID halaman yang ingin dituju
 */
function goToPage(pageId) {
    const targetPageIndex = Array.from(pages).findIndex(page => page.id === pageId);
    if (targetPageIndex !== -1) {
        currentPageIndex = targetPageIndex;
        showPage(currentPageIndex);
    }
}

/**
 * Mengambil nama tamu dari URL
 */
function getGuestNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('name') || 'Tamu Undangan'; // Default jika tidak ada nama
    const guestNameElement = document.getElementById('guest-name');
    if (guestNameElement) {
        guestNameElement.textContent = guestName;
    }
}

// Inisialisasi setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    getGuestNameFromURL(); // Ambil nama tamu
    showPage(currentPageIndex); // Tampilkan halaman pertama

    // Menangani scroll untuk berpindah halaman (Desktop)
    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            // Scroll ke bawah, pindah ke halaman berikutnya
            nextPage();
        } else {
            // Scroll ke atas, pindah ke halaman sebelumnya
            prevPage();
        }
    });

    // Menangani scroll untuk perangkat mobile (touch)
    let startTouchY = 0; // Variabel untuk menyimpan posisi sentuhan awal
    window.addEventListener('touchstart', function(event) {
        startTouchY = event.touches[0].clientY; // Ambil posisi Y sentuhan pertama
    });

    window.addEventListener('touchmove', function(event) {
        const touchMoveY = event.touches[0].clientY;
        if (startTouchY - touchMoveY > 50) {
            // Geser ke bawah, pindah ke halaman berikutnya
            nextPage();
            startTouchY = touchMoveY; // Reset posisi sentuhan
        } else if (touchMoveY - startTouchY > 50) {
            // Geser ke atas, pindah ke halaman sebelumnya
            prevPage();
            startTouchY = touchMoveY; // Reset posisi sentuhan
        }
    });
});
