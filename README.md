# 🕌 Website Profile Masjid Al Hidayah

### Kec. Bandungan, Kab. Semarang

> Proyek pengembangan website profil masjid sebagai tugas mata kuliah **Pemrograman Web**, Kelas 3A Teknologi Informasi — UIN Salatiga.

---

## 📋 Identitas Kelompok

| Keterangan              | Detail                 |
| ----------------------- | ---------------------- |
| **Kelas**               | 3A Teknologi Informasi |
| **Kelompok**            | Kelompok Empat (4)     |
| **Judul / Tema Proyek** | Website Profile Masjid |

### 👥 Anggota Kelompok

| No  | NIM         | Nama                     | Peran                             |
| --- | ----------- | ------------------------ | --------------------------------- |
| 1   | 43050250010 | Miftakhul Anwar          | Project Manager & Back-End Logic  |
| 2   | 43050250011 | Muhammad Fathir Al Faruq | Front-End Developer & UI Designer |
| 3   | 43050250013 | Novi Aprilia             | Content Writer & QA Tester        |

---

## 📌 Deskripsi Proyek

Website profil **Masjid Al Hidayah** adalah sebuah website statis yang dibangun untuk menampilkan informasi lengkap tentang masjid, meliputi:

- Profil dan latar belakang pendirian masjid
- Fasilitas yang tersedia
- Kegiatan rutin masjid
- Struktur organisasi takmir
- Jadwal adzan, imam, dan ngaji subuh
- Informasi kontak dan narahubung

Website ini dibuat sebagai media digital agar masyarakat dapat mengakses informasi masjid dengan mudah dan modern.

---

## 🗂️ Rencana Jobdesk

### 1. Miftakhul Anwar — Project Manager & Back-End Logic

**Tanggung Jawab:**

- Mengkoordinasi pembagian tugas dan timeline pengerjaan antar anggota
- Menyusun dan mengelola struktur repositori Git (branching, merge, pull request)
- Mengembangkan logika interaktif JavaScript (`js/main.js`):
  - Scroll spy untuk highlight navigasi aktif
  - Smooth scroll behavior
  - Lazy loading media
- Memastikan konsistensi data konten (jadwal, organisasi, kontak) antara HTML dan dokumen notulensi
- Melakukan review kode (code review) sebelum setiap merge ke `main`
- Mendokumentasikan README dan draft teknis proyek

### 2. Muhammad Fathir Al Faruq — Front-End Developer & UI Designer

**Tanggung Jawab:**

- Merancang dan mengimplementasikan desain antarmuka (UI/UX) keseluruhan website
- Membangun struktur HTML (`index.html`) yang semantik dan aksesibel
- Mengembangkan sistem desain CSS:
  - `css/variables.css`: Design token (warna, tipografi, spacing)
  - `css/style.css`: Komponen dan layout utama
- Mengimplementasikan fitur visual:
  - Hero section dengan background video + animasi gelombang (wave)
  - Card grid fasilitas dan kegiatan
  - Org chart struktur takmir
  - Jadwal section dengan latar belakang foto
  - Footer responsif
- Memastikan tampilan responsif (mobile-first design)
- Mengoptimalkan aset gambar dan video

### 3. Novi Aprilia — Content Writer & QA Tester

**Tanggung Jawab:**

- Melakukan survei dan pengumpulan data konten dari Masjid Al Hidayah:
  - Notulensi wawancara dengan pengurus masjid
  - Pengumpulan foto dan video untuk aset website
- Menulis dan mengedit seluruh konten teks di website (profil, fasilitas, kegiatan, dll.)
- Memastikan keakuratan data (nama pengurus, jadwal, kontak)
- Melakukan pengujian fungsional (functional testing):
  - Uji navigasi dan anchor link
  - Uji tampilan di berbagai ukuran layar (responsive testing)
  - Uji performa loading halaman
- Membuat laporan hasil pengujian dan bug report
- Memastikan tidak ada typo atau kesalahan informasi di halaman

---

## 🏗️ Draft Teknis

### Stack Teknologi

| Teknologi                | Fungsi                                 |
| ------------------------ | -------------------------------------- |
| **HTML5**                | Struktur dan konten halaman (semantik) |
| **CSS3 (Vanilla)**       | Styling, layout, animasi               |
| **JavaScript (Vanilla)** | Interaktivitas halaman                 |
| **Google Fonts**         | Tipografi (Poppins, Source Sans 3)     |
| **Git & GitHub**         | Version control & kolaborasi           |

### Arsitektur Proyek

```
KelEmpat-WebDev/
│
├── index.html              # Halaman utama (single-page)
│
├── css/
│   ├── variables.css       # Design tokens (CSS custom properties)
│   └── style.css           # Stylesheet utama & komponen
│
├── js/
│   └── main.js             # Logika JavaScript (scroll, nav, dll.)
│
├── assets/
│   ├── images/             # Foto masjid dan kegiatan
│   ├── video/              # Video background hero section
│   └── icons/              # Ikon SVG (Instagram, YouTube, Facebook)
│
├── .gitignore
├── LICENSE
└── README.md
```

### Struktur Halaman (Single Page)

Website menggunakan arsitektur **Single Page** dengan navigasi berbasis anchor (`#`):

| Section ID    | Nama Section             | Deskripsi                               |
| ------------- | ------------------------ | --------------------------------------- |
| `#home`       | Hero                     | Landing section dengan video background |
| `#fasilitas`  | Fasilitas Masjid         | Grid kartu foto fasilitas               |
| `#tentang`    | Tentang / Latar Belakang | Sejarah pendirian masjid                |
| `#kegiatan`   | Kegiatan Rutin           | Grid kartu foto kegiatan                |
| `#organisasi` | Struktur Organisasi      | Org chart takmir masjid                 |
| `#jadwal`     | Jadwal                   | Jadwal adzan, imam, dan ngaji subuh     |
| `#kontak`     | Kontak (Footer)          | Alamat, telepon, email, media sosial    |

### Sistem Desain CSS

File `css/variables.css` mendefinisikan semua design token:

```css
/* Contoh token yang digunakan */
--color-primary     /* Warna utama brand */
--color-surface     /* Warna latar konten */
--font-heading      /* Font judul (Poppins) */
--font-body         /* Font isi (Source Sans 3) */
--spacing-*         /* Sistem spacing konsisten */
--radius-*          /* Border radius komponen */
```

### Komponen Utama

| Komponen                | Selector CSS               | Keterangan                       |
| ----------------------- | -------------------------- | -------------------------------- |
| Header Navigasi         | `.site-header`, `.nav`     | Sticky header dengan link aktif  |
| Hero Section            | `.hero`, `.hero__bg`       | Video background + animasi wave  |
| Card Fasilitas/Kegiatan | `.card`, `.card__img`      | Foto dengan caption overlay      |
| Org Chart               | `.org-tree`, `.org__card`  | Diagram pohon struktur takmir    |
| Jadwal                  | `.jadwal`, `.jadwal__list` | Daftar jadwal dengan foto latar  |
| Footer                  | `.footer`, `.footer__grid` | Grid 3 kolom: brand, nav, kontak |

### Fitur Interaktif (JavaScript)

- **Scroll Spy**: Navigasi mendeteksi section yang sedang terlihat dan mengaktifkan link yang sesuai
- **Smooth Scroll**: Klik navigasi menghasilkan scroll yang halus ke section tujuan
- **Animasi Wave**: CSS animation looping pada elemen dekoratif gelombang

### Standar Pengkodean

- **HTML**: Gunakan tag semantik (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Aksesibilitas**: Semua gambar memiliki `alt`, section memiliki `aria-label` / `aria-labelledby`
- **CSS**: BEM (Block Element Modifier) untuk penamaan class
- **Git**: Commit message menggunakan format konvensional (`feat:`, `fix:`, `docs:`, `style:`)

### Rencana Alur Pengerjaan (Timeline)

```
Minggu 1  │ Survei lokasi, pengumpulan konten & aset foto/video
Minggu 2  │ Desain mockup UI, setup repositori, struktur HTML dasar
Minggu 3  │ Implementasi CSS (variabel, komponen, layout, animasi)
Minggu 4  │ Implementasi JavaScript, integrasi konten, uji responsif
Minggu 5  │ QA testing, revisi, finalisasi dokumentasi & presentasi
```

---

## 🔧 Cara Menjalankan Proyek

Karena website ini bersifat **statis**, tidak diperlukan instalasi library atau build tool.

```bash
# Clone repositori
git clone https://github.com/[username]/KelEmpat-WebDev.git

# Masuk ke direktori
cd KelEmpat-WebDev

# Buka langsung di browser
# (klik dua kali index.html)
# — ATAU —
# Jalankan dengan live server (VS Code extension / Python)
python3 -m http.server 8000
# Akses: http://localhost:8000
```

> **Catatan:** Untuk video background (`assets/video/background-hero.mp4`) berjalan dengan benar, disarankan membuka via server lokal, bukan file `://` langsung.

---

## 📝 Notulensi Survei

### Struktur Organisasi Masjid

| Jabatan      | Nama                            |
| ------------ | ------------------------------- |
| Pendiri      | Hj. Idwan Wi Admojo             |
| Yayasan      | Pak Hj. Sarjono, Ali Imron, Eko |
| Ketua Takmir | Faizin                          |
| Sekretaris   | Miftah Anwar                    |
| Bendahara    | Abdul Muhid                     |

### Jadwal Adzan

| Waktu   | Petugas         |
| ------- | --------------- |
| Subuh   | Pak Miftah      |
| Dzuhur  | Pak Abdul Mufid |
| Ashar   | Pak Doni        |
| Maghrib | Pak Fajar       |
| Isya'   | Pak Doni        |

### Jadwal Imam

| Waktu   | Petugas            |
| ------- | ------------------ |
| Subuh   | Pak Fatkhur Rohman |
| Dzuhur  | Pak Fadil Mubarok  |
| Ashar   | Pak Faizin         |
| Maghrib | Pak Faizin         |
| Isya'   | Pak Fatkhur Rohman |

### Jadwal Ngaji Subuh (Kitab Kuning)

| Hari           | Petugas    |
| -------------- | ---------- |
| Minggu — Jumat | Pak Faizin |
| Sabtu          | Pak Imron  |

### Narahubung Masjid

**Khairzahro**: +62 851 8471 7717

---

## 📄 Lisensi

Proyek ini menggunakan lisensi **MIT**. Lihat file [LICENSE](./LICENSE) untuk detail lengkap.

---

<div align="center">

**Kelompok 4 — Kelas 3A Teknologi Informasi**  
Miftakhul Anwar · Muhammad Fathir Al Faruq · Novi Aprilia

_Website Profile Masjid Al Hidayah, Bandungan — 2026_

</div>
