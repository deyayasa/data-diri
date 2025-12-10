document.addEventListener('DOMContentLoaded', () => {
    
    // Fungsi untuk memicu animasi slide-in
    const animateElements = (selector) => {
        const elements = document.querySelectorAll(selector);
        
        // Loop melalui setiap elemen dan tambahkan kelas 'show'
        elements.forEach((el, index) => {
            // Gunakan setTimeout untuk memberikan efek staggered (berurutan)
            const delay = el.classList.contains('delay-1') ? 200 : 
                          el.classList.contains('delay-2') ? 400 : 
                          el.classList.contains('delay-3') ? 600 : 
                          (index * 150); // Default stagger 150ms
                          
            setTimeout(() => {
                el.classList.add('show');
            }, delay);
        });
    };

    // 1. Tampilkan card utama terlebih dahulu
    const bioWrapper = document.querySelector('.bio-wrapper');
    if (bioWrapper) {
        // Setelah card utama muncul, panggil animasi slide-in pada detail
        bioWrapper.addEventListener('animationend', () => {
            // Panggil semua elemen slide-in setelah animasi card wrapper selesai
            animateElements('.slide-in-top');
            animateElements('.slide-in-left');
            animateElements('.slide-in-right');
            animateElements('.slide-in-bottom');
        }, { once: true });
    } else {
        // Jika animasi utama tidak berjalan (fallback)
        animateElements('.slide-in-top');
        animateElements('.slide-in-left');
        animateElements('.slide-in-right');
        animateElements('.slide-in-bottom');
    }

    console.log("Biodata Estetik Loaded with Glassmorphism!");
});