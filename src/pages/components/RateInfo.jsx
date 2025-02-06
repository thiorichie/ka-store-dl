import React, { useEffect, useState } from 'react';
import DiamondLock from '../../assets/DL.png';
import BGL from '../../assets/BGL.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RateInfo() {
  const navigate = useNavigate();
  const [buyPriceDL, setBuyPriceDL] = useState();
  const [sellPriceDL, setSellPriceDL] = useState();
  const [buyPriceBGL, setBuyPriceBGL] = useState();
  const [sellPriceBGL, setSellPriceBGL] = useState();

  const getRate = async() => {
    const getData = await axios.get('https://ka-store-backend-production.up.railway.app/api/info/getPrice')
    setBuyPriceDL(getData.data.rateBuy_dl);
    setSellPriceDL(getData.data.rateSell_dl);
    setBuyPriceBGL (getData.data.rateBuy_bgl);
    setSellPriceBGL (getData.data.rateSell_bgl);
  }

  useEffect(()=> {
    getRate();
  }, [])

  return (
    <div style={{ marginTop: '50px', padding: '0 20px' }}>
      <div
        className="container"
        style={{
          width: '100%',
          height: 'auto',
          padding: '0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Container Diamond Lock */}
        <div
          className="dl-rate"
          style={{
            border: '3px solid white',
            width: '49%',
            borderRadius: '15px',
            backgroundColor: '#030303',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            className="dl-image"
            style={{ width: '40%', height: '100%', display: 'flex', alignItems: 'center' }}
          >
            <img
              src={DiamondLock}
              alt="Diamond Lock"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              left: '40%',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '40%',
              width: '1px',
              backgroundColor: 'white',
            }}
          />
          <div
            style={{
              width: '60%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>Buy Now</h3>
              <p style={{ color: 'white', marginBottom: '10px' }}>Rp. {buyPriceDL}</p>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#00C851',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = 'green')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#00C851')}
                onClick={() => navigate('/beli')}
              >
                Buy Now
              </button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>Sell Now</h3>
              <p style={{ color: 'white', marginBottom: '10px' }}>Rp. {sellPriceDL}</p>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = 'darkred')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#ff4444')}
                onClick={() => navigate('/jual')}
              >
                Sell Now
              </button>
            </div>
          </div>
        </div>

        <div
          className="bgl-rate"
          style={{
            border: '3px solid white',
            width: '49%',
            borderRadius: '15px',
            backgroundColor: '#030303',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '60%',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '40%',
              width: '1px',
              backgroundColor: 'white',
            }}
          />
          <div
            style={{
              width: '60%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>Buy Now</h3>
              <p style={{ color: 'white', marginBottom: '10px' }}>Rp. {buyPriceBGL}</p>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#00C851',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = 'green')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#00C851')}
                onClick={() => navigate('/beli')}
              >
                Buy Now
              </button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>Sell Now</h3>
              <p style={{ color: 'white', marginBottom: '10px' }}>Rp. {sellPriceBGL}</p>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = 'darkred')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#ff4444')}
                onClick={() => navigate('/jual')}
              >
                Sell Now
              </button>
            </div>
          </div>
          <div
            className="bgl-image"
            style={{ width: '40%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src={BGL}
              alt="BGL Rate"
              style={{ maxWidth: '70%', maxHeight: '60%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .container {
              flex-direction: column !important; /* Ubah ke column pada layar kecil */
              gap: 20px !important; /* Jarak antara DL dan BGL */
            }
            .dl-rate, .bgl-rate {
              width: 100% !important; /* Lebar penuh pada layar kecil */
            }
          }
        `}
      </style>
    </div>
  );
}

export default RateInfo;