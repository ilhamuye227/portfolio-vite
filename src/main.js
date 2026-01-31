// main.js (dipindah dari script.js)

// start navbar

// Mengambil elemen dengan ID 'menu-toggle' (biasanya tombol hamburger)
const menuToggle = document.getElementById('menu-toggle');

// Mengambil elemen dengan ID 'nav-links' (daftar menu navigasi)
const navLinks = document.getElementById('nav-links');

// Menambahkan event listener saat tombol hamburger diklik
menuToggle.addEventListener('click', () => {
  // Toggle class 'active' pada elemen navLinks
  // Jika sudah ada, maka dihapus; jika belum ada, maka ditambahkan
  // Digunakan untuk membuka/menutup menu navigasi saat tampilan mobile
  navLinks.classList.toggle('active');
});

// Menutup menu mobile otomatis saat salah satu link navigasi diklik
// Ini memastikan pada perangkat mobile, menu akan hilang setelah memilih section
const navLinkElements = document.querySelectorAll('.nav-links a');
navLinkElements.forEach(link => {
  link.addEventListener('click', () => {
    // Hapus class 'active' sehingga menu tertutup
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});


// end navbar




/* start contact */
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const whatsappNumber = "6283895775553"; // Ganti dengan nomor kamu

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form submit default

    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const message = contactForm.elements["message"].value;

    const fullMessage = `Halo, saya ${name} (${email}) ingin menghubungi Anda.%0A%0A${encodeURIComponent(message)}`;
    const waLink = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

    window.open(waLink, "_blank"); // Buka link WA di tab baru
  });
});



/* end contact */





// vidio rakit pc
// Fungsi untuk toggle video (tampilkan video dan sembunyikan ga
// Expose functions on window so inline `onclick` attributes keep working
window.toggleImage = toggleImage;
window.closeImage = closeImage;
window.toggleVideo = toggleVideo;
window.closeModal = closeModal;
window.minimizeVideo = minimizeVideo;
