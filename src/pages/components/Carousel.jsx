import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../assets/banner.jpg';

function Carousel() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: '120px', padding: '0 20px' }}>
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ maxWidth: '1200px', margin: '0 auto', borderRadius: '10px', overflow: 'hidden' }} // Batasi lebar carousel
      >
        <div className="carousel-inner" style={{ borderRadius: '10px' }}>
          {/* Hanya 1 Slide */}
          <div
            className="carousel-item active"
            onClick={() => navigate('')}
            style={{ width: '100%', height: '70vh', position: 'relative' }} // Atur tinggi carousel
          >
            <img
              src={Banner}
              alt="Banner"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Gambar memenuhi carousel
                borderRadius: '10px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Media Query untuk Responsiveness */}
      <style>
        {`
          @media (max-width: 767px) {
            .carousel-item {
              height: 30vh !important; /* Sesuaikan tinggi untuk layar kecil */
            }
          }
        `}
      </style>
    </div>
  );
}

export default Carousel;