const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Sipil",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

console.log(dataMahasiswa);

// ambil seluruh mhs
const listMhs = dataMahasiswa;
console.log(listMhs);

// ambil 1 mhs dari seluruh mhs
const mahasiswa = listMhs[0];
console.log(mahasiswa);

// ambil key dari 1 object mhs
// const nama = mahasiswa.nama;
// const organisasi = mahasiswa.organisasi;
// const semester = mahasiswa.semester;

// Destrukturing objek
const { nama, organisasi, semester, tanggalLahir, aktif } = mahasiswa;
console.log(nama);

console.log(`nama saya ${nama} semester ${semester}`);

// Destrukturing array
const listOrganisasi = organisasi;
console.log(listOrganisasi);

// nambahin array ...listOrganisasi
const newOrganisasi = ["Futsal", ...listOrganisasi];
const newOrganisasi2 = [...listOrganisasi, "Futsal"];

// nambahin object dalam list mhs
const newMahasiswa = {
  id: 4,
  nama: "Vincent",
  tanggalLahir: "1945-08-18",
  fakultas: "Fakultas Lingkungan",
  programStudi: "Teknik Perhutanan",
  semester: 7,
  nilai: {
    mekanikaTanah: 85,
    peradabanBaru: 89,
  },
  aktif: true,
  organisasi: ["Himpunan Mahasiswa Pecinta Alam"],
};

const newListMhs = {newMahasiswa, ...listMhs};
console.log(newListMhs);

// Split
console.log(tanggalLahir);
console.log(tanggalLahir.split("-")[2]);

// logical operator
const statusMahasiswa = aktif ? "aktif boss" : "dolan wonge";
console.log(statusMahasiswa);

// Array map
const listNamaMhs = listMhs.map((mhs) => mhs.nama)
console.log(listNamaMhs);

// Array map: filtering data
const listAktifMhs = listMhs.filter((mhs) => mhs.aktif)
console.log(listAktifMhs);

// Array map: sort
const listUrutMhs = listMhs.slice().sort((a,b) => a.semester - b.semester)
console.log(listUrutMhs);