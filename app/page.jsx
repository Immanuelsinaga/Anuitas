"use client";

export default function Home() {
  function generateTable() {
    const modalAwal = parseFloat(document.getElementById('modalAwal').value);
    const bulan = parseInt(document.getElementById('bulan').value);
    const bunga = parseFloat(document.getElementById('bunga').value) / 100;
    const tbody = document.getElementById('Table').getElementsByTagName('tbody')[0];

    tbody.innerHTML = '';

    let modalSaatIni = modalAwal;
    for (let i = 1; i <= bulan; i++) {
      const bungaBulan = modalSaatIni * bunga;
      const angsuran = (modalAwal * bunga) / (1 - Math.pow(1 + bunga, -bulan));
      const modalAkhir = modalSaatIni - angsuran + bungaBulan;

      // Format nilai dengan toLocaleString untuk Rupiah
      const modalSaatIniFormatted = modalSaatIni.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      const angsuranFormatted = angsuran.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      const bungaBulanFormatted = bungaBulan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      const angsuranPokokFormatted = (angsuran - bungaBulan).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      const modalAkhirFormatted = modalAkhir.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

      const row = `
        <tr>
          <td>${i}</td>
          <td>${modalSaatIniFormatted}</td>
          <td>${angsuranFormatted}</td>
          <td>${bungaBulanFormatted}</td>
          <td>${angsuranPokokFormatted}</td>
          <td>${modalAkhirFormatted}</td>
        </tr>
      `;
      
      tbody.innerHTML += row;
      modalSaatIni = modalAkhir;
    }
  }

  return (
    <div className="container max-w-4xl bg-white p-5 rounded-lg shadow-md">
      <h1 className="text-center text-2xl font-semibold">Tabel Perencanaan Anggaran GENERATOR</h1>
      <p className="text-center opacity-70">Made by <a href="https://reyusin.vercel.app/" className="text-blue-600 underline">Immanuel</a></p>
      
      <label htmlFor="modalAwal" className="block mt-3">Modal Awal: </label>
      <input type="number" id="modalAwal" placeholder="Masukkan modal awal" className="p-2 mt-1 border border-black rounded-md w-full"/>

      <label htmlFor="bulan" className="block mt-3">Lama Bulan: </label>
      <input type="number" id="bulan" placeholder="Masukkan lama bulan" className="p-2 mt-1 border border-black rounded-md w-full"/>

      <label htmlFor="bunga" className="block mt-3">Suku Bunga (% per bulan): </label>
      <input type="number" id="bunga" placeholder="Masukkan suku bunga" className="p-2 mt-1 border border-black rounded-md w-full"/>

      <button onClick={generateTable} className="w-full p-3 mt-4 bg-[#28a745] rounded-md cursor-pointer text-white hover:bg-[#218838]">
        Hitung
      </button>

      <table id="Table" className="w-full mt-5 border-collapse">
        <thead>
          <tr>
            <th>Bulan ke-</th>
            <th>Modal Awal Bulan</th>
            <th>Anuitas</th>
            <th>Bunga</th>
            <th>Angsuran</th>
            <th>Modal Akhir</th>
          </tr>
        </thead>
        <tbody>
          {/* Tabel akan diisi oleh fungsi generateTable */}
        </tbody>
      </table>
    </div>

    
  );
}
