// Menghitung Biaya Parkir
function hitungBiayaParkir(){
    let jamMasuk = document.getElementById('jamSuk').value
    let jamKeluar = document.getElementById('jamKel').value
    let lamaParkir = jamKeluar - jamMasuk
    console.log(lamaParkir)

    // Biaya 2 jam pertama
    let biayaParkir = 3000
    lamaParkir -= 2

    // Hitung sisa jam
    if(lamaParkir > 0){
        biayaParkir = biayaParkir + (lamaParkir * 1000)
    }

    console.log(biayaParkir)
    // Tampilan hasil ke dalam html
    document.getElementById('biPar').innerHTML = biayaParkir
}