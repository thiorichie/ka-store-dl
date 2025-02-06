import React from 'react';

function StoreDescription() {
  return (
    <div style={{ marginTop: '50px', padding: '0 20px' }}>
      <div
        className="container"
        style={{
          backgroundColor: '#030303',
          width: '100%',
          height: 'auto',
          borderRadius: '50px',
          border: '1px solid white',
          color: 'aliceblue',
          padding: '20px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '1.8rem' }}>
          Mengapa Buy / Sell DL harus di KA STORE?
        </h2>
        <div style={{ padding: '0 20px' }}>
          <h5 style={{ marginBottom: '10px' }}>
            1. Proses pencairan Diamond Lock / pencairan dana tidak memakan waktu yang lama.
          </h5>
          <h5 style={{ marginBottom: '10px' }}>
            2. Rate jual / beli Diamond Lock lebih murah (untuk pov buyer Diamond Lock) & lebih mahal (untuk pov seller Diamond Lock).
          </h5>
          <h5 style={{ marginBottom: '10px' }}>
            3. Metode transaksi lengkap.
          </h5>
          <h5 style={{ marginBottom: '10px' }}>
            4. 100% Terpercaya.
          </h5>
          <h5 style={{ marginBottom: '10px' }}>
            5. Website open setiap hari 24 Jam (transaksi di atas jam 0.00 WIB akan di proses di pagi hari 07.00 WIB).
          </h5>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 767px) {
            .container {
              padding: 15px; /* Padding lebih kecil untuk layar kecil */
            }
            h2 {
              font-size: 1.5rem !important; /* Ukuran font lebih kecil untuk judul */
              margin-bottom: 10px !important;
            }
            h5 {
              font-size: 1rem !important; /* Ukuran font lebih kecil untuk teks */
              margin-left: 0 !important; /* Hilangkan margin kiri */
              margin-bottom: 8px !important; /* Jarak antar item lebih kecil */
            }
          }
        `}
      </style>
    </div>
  );
}

export default StoreDescription;