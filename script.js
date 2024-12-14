let currentPageIndex = 0; // Index halaman aktif
const pages = document.querySelectorAll(".page"); // Daftar semua halaman

/**
 * Menampilkan halaman berdasarkan indeks
 * @param {number} index - Indeks halaman yang ingin ditampilkan
 */
function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.toggle("active", i === index);
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
});

document.addEventListener("DOMContentLoaded", function() {
  const pages = document.querySelectorAll('.page');
  let currentPageIndex = 0;

  // Fungsi untuk menampilkan halaman berdasarkan index
  function showPage(index) {
    pages.forEach((page, i) => {
      if (i === index) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  // Menampilkan halaman pertama
  showPage(currentPageIndex);

  // Menangani scroll untuk berpindah halaman
  window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      // Scroll ke bawah, pindah ke halaman berikutnya
      if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
      }
    } else {
      // Scroll ke atas, pindah ke halaman sebelumnya
      if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
      }
    }
  });
});
