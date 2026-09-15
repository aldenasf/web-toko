const formProduk = document.getElementById("formProduk");

formProduk.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const harga = parseInt(document.getElementById("harga").value);
    const stok = parseInt(document.getElementById("stok").value);
    const kategori = document.getElementById("kategori").value;

    tambahProduk(nama, harga, stok, kategori);

    document.getElementById("pesan").textContent =
        "Produk berhasil ditambahkan";
    document.getElementById("pesan").className = "mt-4 text-sm text-green-600";
});

function tambahProduk(nama, harga, stok, kategori) {
    const produkBaru = {
        nama,
        harga,
        stok,
        kategori,
    };

    const produk = fetchProduk();
    produk.push(produkBaru);

    localStorage.setItem("produk", JSON.stringify(produk));
    tampilkanProduk();
}

function tampilkanProduk() {
    const produk = fetchProduk();
    const daftarProduk = document.getElementById("daftarProduk");

    console.log(produk);

    let str = "";

    produk.forEach((produk, index) => {
        let status = "";

        if (produk.stok == 0) {
            status = "Habis";
        } else if (produk.stok <= 5) {
            status = "Menipis";
        } else if (produk.stok > 5) {
            status = "Tersedia";
        }

        str += `<tr>
            <td>${index + 1}</td>
            <td>${produk.nama}</td>
            <td>Rp. ${produk.harga.toLocaleString("id-ID")}</td>
            <td>${produk.stok}</td>
            <td>${status}</td>
            <td>${produk.kategori}</td>
        </tr>`;
    });

    daftarProduk.innerHTML = str;
}

function fetchProduk() {
    let produk = [];

    try {
        const data = localStorage.getItem("produk");
        produk = data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Failed to parse JSON from localStorage:", error);
        produk = [];
    }

    return produk;
}

tampilkanProduk();
