==================================================
                 DOCUFIND
       SISTEM PENCARIAN DOKUMEN CERDAS
==================================================

1. DESKRIPSI APLIKASI

DocuFind merupakan aplikasi sistem temu kembali informasi (Information Retrieval) berbasis web yang dikembangkan menggunakan Python.

Aplikasi ini digunakan untuk mencari dokumen pembelajaran Informatika berdasarkan tingkat kemiripan antara kata kunci pencarian dengan isi dokumen.

DocuFind menerapkan metode TF-IDF (Term Frequency-Inverse Document Frequency) untuk pembobotan kata dan Cosine Similarity untuk menghitung tingkat kemiripan dokumen.

2. TUJUAN APLIKASI

Tujuan pengembangan DocuFind adalah:
- Membangun sistem pencarian dokumen pembelajaran Informatika.
- Menerapkan preprocessing teks menggunakan Sastrawi.
- Mengimplementasikan metode TF-IDF dan Cosine Similarity.
- Menampilkan hasil pencarian berdasarkan skor kemiripan tertinggi.

3. TEKNOLOGI YANG DIGUNAKAN

- Bahasa Pemrograman : Python
- Framework Web       : Streamlit
- Pengolahan Data     : Pandas
- Pembobotan Kata     : Scikit-learn (TF-IDF)
- Perhitungan Similarity : Scikit-learn (Cosine Similarity)
- Preprocessing      : Sastrawi
- Dataset            : CSV

4. DATASET

Dataset DocuFind terdiri dari 20 dokumen pembelajaran Informatika yang terbagi menjadi lima kategori:

1. Pemrograman Python
2. Database dan SQL
3. Jaringan Komputer
4. Artificial Intelligence
5. Pengembangan Web

Nama file dataset:
dataset_docufind_20_dokumen.csv

Pastikan file dataset berada dalam folder yang sama dengan app.py.

5. STRUKTUR FOLDER

DocuFind/
|
|-- app.py
|-- dataset_docufind_20_dokumen.csv
|-- README.txt
|
|-- dokumentasi/
    |-- halaman_utama.png
    |-- hasil_pencarian.png
    |-- dokumen_tidak_ditemukan.png

Folder dokumentasi digunakan untuk menyimpan screenshot aplikasi.

6. PERSYARATAN SISTEM

- Sistem Operasi : Windows
- Python         : 3.12
- Koneksi Internet: Diperlukan saat instalasi library
- Browser        : Google Chrome atau browser lainnya

7. CARA INSTALASI

Buka Command Prompt (CMD), kemudian masuk ke folder proyek:

cd /d F:\Xampp\htdocs\DocuFind

Instal library yang diperlukan:

py -m pip install streamlit pandas scikit-learn Sastrawi

8. CARA MENJALANKAN APLIKASI

Setelah instalasi selesai, jalankan perintah berikut melalui CMD:

py -m streamlit run app.py

Tunggu hingga aplikasi berjalan.

Buka browser dan akses alamat:

http://localhost:8501

Untuk menghentikan aplikasi, tekan Ctrl + C pada CMD.

9. CARA KERJA SISTEM

Tahapan proses pencarian pada DocuFind:

1. Pengguna memasukkan kata kunci pencarian.
2. Sistem melakukan preprocessing terhadap kata kunci.
3. Kata kunci diubah menjadi representasi TF-IDF.
4. Sistem menghitung Cosine Similarity terhadap dokumen.
5. Hasil pencarian diurutkan berdasarkan skor similarity tertinggi.
6. Sistem menampilkan dokumen yang memenuhi batas similarity minimum 0,10.

Apabila tidak terdapat dokumen yang memenuhi batas tersebut, sistem menampilkan pesan bahwa dokumen tidak ditemukan.

10. PENGUJIAN DAN EVALUASI

Pengujian dilakukan menggunakan lima query utama dan satu query tambahan.

Evaluasi kinerja sistem menggunakan:
- Precision
- Recall
- F1-Score

Hasil rata-rata evaluasi lima query utama:

Precision : 0,48
Recall    : 0,60
F1-Score  : 0,533

11. CATATAN

- DocuFind merupakan proyek akademik untuk mata kuliah Sistem Temu Kembali Informasi (STKI).
- Dataset berisi 20 dokumen pembelajaran Informatika.
- Aplikasi menggunakan pencarian berbasis kemiripan kata, bukan pemahaman semantik atau AI generatif.
- Hasil pencarian dipengaruhi oleh kata-kata yang terdapat pada dataset.
- Aplikasi dikembangkan sebagai prototipe sistem temu kembali informasi berbasis web.

==================================================
                 AKHIR README
==================================================