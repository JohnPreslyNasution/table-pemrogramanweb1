function addData() {
    const nama_depan = document.getElementById("nama_depan").value;
    const nama_belakang = document.getElementById("nama_belakang").value;
    const nim = document.getElementById("nim").value;
    const kelas = document.getElementById("kelas").value;
    const jenis_kelamin = document.querySelector('input[name="jenis-kelamin"]:checked');

    // Validasi form
    if (nama_depan && nama_belakang && nim && kelas && jenis_kelamin) {
        // Dapatkan elemen tabel
        const table = document.getElementById("data").getElementsByTagName("tbody")[0];

        // Buat baris baru
        const newRow = table.insertRow();

        // Tambah sel-sel baru pada baris
        const name_frontCell = newRow.insertCell(0);
        const name_backCell = newRow.insertCell(1);
        const nimCell = newRow.insertCell(2);
        const kelasCell = newRow.insertCell(3);
        const jenis_kelaminCell = newRow.insertCell(4);

        // Masukkan data ke sel
        name_frontCell.textContent = nama_depan;
        name_backCell.textContent = nama_belakang;
        nimCell.textContent = nim;
        kelasCell.textContent = kelas;
        jenis_kelaminCell.textContent = jenis_kelamin.value;

        // Kosongkan form setelah input
        document.getElementById("formRegister").reset();
    } else {
        alert("Harap isi semua kolom.");
    }
}
