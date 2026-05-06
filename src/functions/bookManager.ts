// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan


// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca


// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import {Book} from "../types";  
import {books} from "../data/books";

// add book
export function addBook(book: Book): void  {
books.push(book);
console.log(`Buku "${book.title}" berhasil ditambahkan`);
}

// list book
export function listBooks(): void {
    if (books.length === 0) {
        console.log("Belum ada buku.");
        return;
    }
console.log("Daftar Buku:");
books.forEach((book, index) =>{
    console.log(
        `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
    );
});
}

//  search book

export function searchBook(title?: string): void {
  if (!title) {
    console.log("Masukkan keyword untuk mencari buku:");
    return;
  }

  const result = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );
  if (result.length === 0) {
    console.log("Buku tidak ditemukan.");
    return;
  }

  console.log("Hasil pencarian:");
  result.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
    );
  });
}



