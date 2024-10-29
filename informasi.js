// Fungsi untuk menampilkan atau menyembunyikan detail informasi
function toggleDetails(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Fungsi untuk validasi form kontak
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = "";

    // Validasi Nama
    if (name === "") {
        errorMessage += "Nama tidak boleh kosong.\n";
    }

    // Validasi Email
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        errorMessage += "Email tidak boleh kosong.\n";
    } else if (!email.match(emailPattern)) {
        errorMessage += "Format email tidak valid.\n";
    }

    // Validasi Pesan
    if (message === "") {
        errorMessage += "Pesan tidak boleh kosong.\n";
    }

    // Menampilkan pesan error jika ada
    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }

    alert("Form berhasil dikirim!");
    return true;
}

// Fungsi untuk menampilkan animasi saat halaman dibuka
function fadeInEffect() {
    var fadeTarget = document.body;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0;
        }
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + 0.05;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

// Fungsi untuk mengubah warna tema halaman
function changeTheme() {
    var body = document.body;
    var currentTheme = body.getAttribute("data-theme");
    if (currentTheme === "dark") {
        body.setAttribute("data-theme", "light");
        alert("Tema diubah ke tema terang.");
    } else {
        body.setAttribute("data-theme", "dark");
        alert("Tema diubah ke tema gelap.");
    }
}

// Event listener untuk menjalankan animasi saat halaman dimuat
window.onload = function() {
    fadeInEffect();

    // Menambahkan event listener pada form untuk validasi
    var contactForm = document.querySelector("form");
    contactForm.onsubmit = function(event) {
        event.preventDefault(); // Mencegah pengiriman form
        if (validateForm()) {
            contactForm.submit(); // Kirim form jika validasi berhasil
        }
    };
    
    // Menambahkan tombol untuk mengubah tema
    var themeButton = document.createElement("button");
    themeButton.innerText = "Ubah Tema";
    themeButton.style.position = "fixed";
    themeButton.style.bottom = "20px";
    themeButton.style.right = "20px";
    themeButton.style.padding = "10px";
    themeButton.style.backgroundColor = "#007bff";
    themeButton.style.color = "#fff";
    themeButton.style.border = "none";
    themeButton.style.borderRadius = "5px";
    themeButton.style.cursor = "pointer";
    themeButton.onclick = changeTheme;
    document.body.appendChild(themeButton);
};
