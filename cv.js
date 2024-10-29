function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.style.display = 'block'; // Tampilkan tab yang dipilih
        } else {
            tab.style.display = 'none'; // Sembunyikan tab yang tidak dipilih
        }
    });
}

// Menyimpan elemen tab untuk mengatur tampilan saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    showTab('profile'); // Tampilkan tab Profil secara default
});
