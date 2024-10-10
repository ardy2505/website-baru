// Ambil elemen tombol dan konten tambahan
const showMoreBtn = document.getElementById('showMoreBtn');
const moreInfo = document.getElementById('moreInfo');

// Fungsi untuk toggle info tambahan
showMoreBtn.addEventListener('click', function() {
    // Jika info tersembunyi, tampilkan
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        showMoreBtn.textContent = 'Sembunyikan Info';  // Ubah teks tombol
    } else {
        // Jika info sudah tampil, sembunyikan
        moreInfo.style.display = 'none';
        showMoreBtn.textContent = 'Tampilkan Info Lebih Lanjut';  // Kembalikan teks tombol
    }
});
