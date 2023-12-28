import { useState } from "react";

// Komponen FormAddFriend untuk menambahkan teman baru
export default function FormAddFriend({ onAddFriend }) {
  // State untuk menyimpan nilai nama teman baru
  const [name, setName] = useState("");

  // State untuk menyimpan nilai URL gambar teman baru
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // Fungsi yang akan dipanggil saat formulir disubmit
  function handleSubmit(e) {
    e.preventDefault();

    // Validasi apakah nama atau gambar kosong
    if (!name || !image) return;

    // Menggunakan crypto.randomUUID() untuk membuat ID acak
    const id = crypto.randomUUID();

    // Membuat objek teman baru dengan data yang diinputkan
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`, // Menambahkan ID ke URL gambar
      balance: 0,
    };

    // Memanggil fungsi onAddFriend yang diberikan dari komponen induk
    // dan meneruskan objek teman baru untuk ditambahkan
    onAddFriend(newFriend);

    // Mengatur ulang state nama dan gambar setelah penambahan teman baru
    setName("");
    setImage("");
  }

  // Render form untuk menambah teman baru
  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      {/* Input untuk menambahkan nama teman */}
      <label htmlFor="">🙎🏼Nama</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Mengubah nilai state nama saat ada perubahan pada input
      />

      {/* Input untuk menambahkan URL gambar teman */}
      <label htmlFor="">📸Gambar</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)} // Mengubah nilai state gambar saat ada perubahan pada input
      />

      {/* Tombol untuk menambahkan teman */}
      <button className="button">Tambah</button>
    </form>
  );
}
