# SI-PINTER  
Sistem Informasi Pelaporan IT & Helpdesk Internal

SI-PINTER adalah aplikasi **IT Helpdesk internal (1 instansi)** yang digunakan untuk pelaporan kendala IT, diskusi, serta penyimpanan solusi (knowledge base) agar dapat digunakan kembali oleh pegawai.

Aplikasi ini dikembangkan secara **kolaboratif menggunakan GitHub**.

---

## 🎯 Tujuan
- Memudahkan pegawai melaporkan kendala IT
- Mengurangi laporan berulang untuk masalah yang sama
- Menyediakan pusat solusi / knowledge internal
- Mendukung kolaborasi antara pegawai dan tim IT

---

## 🏗️ Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- MySQL
- Prisma ORM

---

## ✨ Fitur Utama
- Autentikasi User & Admin
- Pelaporan tiket kendala IT
- Beranda (feed) ala sosial media internal
- Komentar & diskusi pada tiket
- Knowledge Base (kendala & solusi)
- Multi-user (1 instansi)
- Hak akses berbasis role

---

## 📁 Struktur Project (Ringkas)
```
app/
├─ (auth)/
├─ (dashboard)/
│  ├─ feed/
│  ├─ tickets/
│  ├─ knowledge/
│  └─ admin/
├─ api/
prisma/
docs/
components/
lib/
```

---

## 🚀 Cara Menjalankan (Local Development)

### 1. Clone Repository
```bash
git clone https://github.com/Dewasurya16/SI-PINTER.git
cd SI-PINTER
```

### 2. Install Dependency
```bash
npm install
```

### 3. Konfigurasi Environment
Salin file `.env.example` menjadi `.env`, lalu sesuaikan:
```env
DATABASE_URL="mysql://user:password@localhost:3306/si_pinter"
```

### 4. Migrasi Database
```bash
npx prisma migrate dev
```

### 5. Jalankan Aplikasi
```bash
npm run dev
```

Akses melalui browser:
```
http://localhost:3000
```

---

## 👥 Aturan Kerja Tim

### Branching Strategy
- `main` → Production (tidak boleh direct push)
- `develop` → Integrasi fitur
- `feature/*` → Pengembangan fitur

---

### Format Commit
```
feat: tambah fitur feed
fix: perbaiki bug komentar
refactor: rapikan struktur kode
```

---

## 📌 Catatan Penting
- Jangan commit file `.env`
- Jangan mengubah `schema.prisma` tanpa koordinasi
- Satu fitur dikerjakan dalam satu branch
- Pull Request wajib direview

---

## 📍 Status Project
Active Development  
Digunakan untuk kebutuhan **internal instansi**.



⚠️ Aplikasi ini bersifat internal dan tidak untuk penggunaan publik.
