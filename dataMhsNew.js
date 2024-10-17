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

// console.log(dataMahasiswa);

// Menampilkan seluruh field dari mahasiswa 1
const [mahasiswa1] = dataMahasiswa;
const {
  id,
  nama,
  tanggalLahir,
  fakultas,
  programStudi,
  semester,
  nilai,
  aktif,
  organisasi,
} = mahasiswa1;

console.log(mahasiswa1)

// Destructing field nilai
const {algoritma, basisData, pemrogramanWeb} = nilai;
console.log(`nilai Algoritma: ${algoritma}, nilai Basis data: ${basisData}, nilai Pemorgraman Web: ${pemrogramanWeb}`)

// Destructing field organisasi
const {org1, org2} = organisasi;
console.log(`Organisasi lama = ${organisasi}`)

// Spread operator untuk field organisasi
const organisasiBaru = [...organisasi, "Komunitas Robotika"];
console.log(`Organisasi baru = ${organisasiBaru}`)

// Update pada field fakultas dan field semester
const mahasiswaUpdated = {...mahasiswa1, fakultas: "Fakultas Ilmu Komputer", semester: 7};
console.log(mahasiswaUpdated)

// Split pada field tanggal lahir dan tampilkan tahun saja
const [getYear] = tanggalLahir.split("-")
console.log(getYear)

// Conditional Operator
const statusAktif = aktif ? "Mahasiswa Aktif" : "Mahasiswa Tidak Aktif";
console.log(statusAktif)

// Map tampilkan semua mahasiswa
const namaMahasiswa = dataMahasiswa.map((mhs) => mhs.nama);
console.log(namaMahasiswa)

// Filtering tampilkan semua mahasiswa yang aktif dan dari Fakultas Ilmu Komputer
const mahasiswaFIK = dataMahasiswa.filter((mhs) => mhs.fakultas === "Fakultas Ilmu Komputer");
console.log(mahasiswaFIK)

// Totalkan nilai seluruh mahasiswa
const totalNilaiSemuaMahasiswa = dataMahasiswa.reduce((sum, mhs) => {const totalNilai = Object.values(mhs.nilai).reduce((acc, nilai) => acc + nilai, 0); return sum + totalNilai; }, 0);
console.log(totalNilaiSemuaMahasiswa)

// Sort seluruh mahasiswa berdasarkan semester
const sortSemester = dataMahasiswa.slice().sort((a, b) => a.semester - b.semester);
console.log(sortSemester)

// Menambahkan Mahasiswa Baru
const mahasiswaBaru = {
  id: 4,
  nama: "Andi Wirawan",
  tanggalLahir: "2001-07-20",
  fakultas: "Fakultas Ilmu Komputer",
  programStudi: "Sistem Informasi",
  semester: 2,
  nilai: {
    analyticalMediaSosial: 90,
    sistemBasisData: 80,
    jaringanKomputer: 75,
  },
  aktif: true,
  organisasi: ["Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer"],
};
const dataMahasiswaUpdate = [...dataMahasiswa, mahasiswaBaru];
// dataMahasiswa.push(mahasiswaBaru);
console.log(dataMahasiswaUpdate);

// Delete dan Update pada salah satu Mahasiswa
const dataMahasiswaAfterDelete = dataMahasiswaUpdate.filter((mhs) => mhs.id !== 2);
const dataMahasiswaAfterUpdate = dataMahasiswaAfterDelete.map((mhs) => mhs.id === 1 ? {...mhs, semester: 7} : mhs);
console.log(dataMahasiswa);
console.log(dataMahasiswa);