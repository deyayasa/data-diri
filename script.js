// --- JavaScript untuk Interaksi Halus ---
        
// Fungsi untuk mengaplikasikan efek fade-in saat halaman dimuat
function applyFadeIn() {
    const container = document.getElementById('app-container');
    // Menambahkan kelas 'loaded' setelah DOM siap untuk transisi
    container.classList.add('loaded');
}

// Jalankan fungsi fade-in saat window telah selesai memuat
window.onload = applyFadeIn;