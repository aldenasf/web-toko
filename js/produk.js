const formProduk = document.getElementById("formProduk");

formProduk.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const harga = document.getElementById("harga").value;
    const stok = document.getElementById("stok").value;
    const kategori = document.getElementById("kategori").value;

    tambahProduk(nama, harga, stok, kategori);

    document.getElementById("pesan").textContent =
        "Produk berhasil ditambahkan"
    document.getElementById("pesan").className =
        "mt-4 text-sm text-green-600";
})

function tambahProduk(nama, harga, stok, kategori) {
    const produkBaru = {
        nama,
        harga,
        stok,
        kategori
    }

    const produk = JSON.parse(localStorage.getItem("produk")) || []
    produk.push(produkBaru);

    localStorage.setItem("produk", JSON.stringify(produk));
}

function tampilkanProduk() {
    const produk = JSON.parse(localStorage.getItem("produk")) || []
    const daftarProduk = document.getElementById("daftarProduk");

    console.log(produk);

    const test = produk.map((produk, index) => 
        `<tr>
            <td>${index + 1}</td>
            <td>${produk.nama}</td>
            <td>${produk.harga}</td>
            <td>${produk.stok}</td>
            <td>${produk.kategori}</td>
        </tr>`
    ).join("\n");

    console.log(test)

    daftarProduk.innerHTML = test;
}

tampilkanProduk();