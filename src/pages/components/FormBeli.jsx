import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import BCA from '../../assets/BCA.png';
import DANA from '../../assets/DANA.png';
import GOPAY from '../../assets/GOPAY.jpeg';
import OVO from '../../assets/OVO.png';
import SHOPEEPAY from '../../assets/SHOPEEPAY.png';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const paymentMethods = [
  {
    id: 'bca',
    name: 'BCA',
    logo: BCA,
    info: 'Nomor Rekening: 8725151469 (A/N THIO RICHIE)',
  },
  {
    id: 'gopay',
    name: 'GOPAY',
    logo: GOPAY,
    info: 'Nomor GOPAY: 08991858373 (A/N LIANAWATI)',
  },
  {
    id: 'ovo',
    name: 'OVO',
    logo: OVO,
    info: 'Nomor OVO: 08991858373 (A/N THIO RICHIE)',
  },
  {
    id: 'dana',
    name: 'DANA',
    logo: DANA,
    info: 'Nomor DANA: 08991858373 (A/N THIO RICHIE)',
  },
  {
    id: 'shopeepay',
    name: 'SHOPEE PAY',
    logo: SHOPEEPAY,
    info: 'Nomor SHOPEE PAY: 08991858373 (A/N THIO RICHIE)',
  },
];

function FormBeli() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmit = async (data) => {
    if (!selectedFile) {
      alert("Bukti transfer is required!");
      return
    }

    const formData = new FormData();
    formData.append("namaWorld", data.namaWorld);
    formData.append("growID", data.growID);
    formData.append("whatsapp", data.whatsapp);
    formData.append("jumlahDL", data.jumlahDL);
    formData.append("paymentMethod", data.paymentMethod);
    formData.append("buktiDrop", selectedFile);
    formData.append("totalPrice", totalHarga);
    try{
      const postData = await axios.post('https://ka-store-backend-production.up.railway.app/api/buyDL/createTransaction', formData);
      alert(postData.data.message);
      navigate('/')
    }
    catch(e){
      alert(e)
    }
  };
  
  const [hargaPerDL, setHargaPerDL] = useState();
  const jumlahDL = watch('jumlahDL') || 0;
  const totalHarga = jumlahDL * hargaPerDL;

  const handlePaymentMethodClick = (methodId) => {
    setSelectedMethod(methodId);
    setValue('paymentMethod', methodId);
  };

  const getRate = async() => {
    const getData = await axios.get('https://ka-store-backend-production.up.railway.app/api/info/getInfo/buyDL')
    setHargaPerDL(getData.data);
  }

  useEffect(()=> {
    getRate();
  }, [])

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', color: 'aliceblue', marginTop: '120px', border: '3px solid white', borderRadius: '15px', backgroundColor: '#030303' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Form Beli Diamond Lock</h2>

      <div style={{ marginBottom: '20px' }}>
        <p>
          <strong>Jumlah yang perlu dibayar: Rp. {totalHarga}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="namaWorld" style={{ display: 'block', marginBottom: '5px' }}>
            Nama World:
          </label>
          <input
            type="text"
            id="namaWorld"
            {...register('namaWorld', { required: 'Wajib diisi' })}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {errors.namaWorld && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.namaWorld.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="growID" style={{ display: 'block', marginBottom: '5px' }}>
            Grow ID:
          </label>
          <input
            type="text"
            id="growID"
            {...register('growID', { required: 'Wajib diisi' })}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {errors.growID && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.growID.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="whatsapp" style={{ display: 'block', marginBottom: '5px' }}>
            Nomor WhatsApp (contoh: 08991858373):
          </label>
          <input
            type="text"
            id="whatsapp"
            {...register('whatsapp', {
              required: 'Wajib diisi',
              pattern: {
                value: /^[0-9]{10,13}$/,
                message: 'Nomor WhatsApp tidak valid',
              },
            })}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {errors.whatsapp && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.whatsapp.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="jumlahDL" style={{ display: 'block', marginBottom: '5px' }}>
            Jumlah Diamond Lock (minimal 10):
          </label>
          <input
            type="number"
            id="jumlahDL"
            {...register('jumlahDL', { required: 'Wajib diisi', min: { value: 10, message: 'Minimal 10 DL' } })}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {errors.jumlahDL && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.jumlahDL.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Pilih Metode Pembayaran:</label>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => handlePaymentMethodClick(method.id)}
                style={{
                  border: `1px solid ${selectedMethod === method.id ? '#007bff' : '#ccc'}`,
                  borderRadius: '5px',
                  padding: '10px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  flex: '1 1 100px',
                  backgroundColor: selectedMethod === method.id ? '#007bff20' : 'transparent',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#007bff10')}
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    selectedMethod === method.id ? '#007bff20' : 'transparent')
                }
              >
                <img
                  src={method.logo}
                  alt={method.name}
                  style={{ width: '50px', height: '50px', marginBottom: '5px' }}
                />
                <p style={{ margin: 0 }}>{method.name}</p>
                {selectedMethod === method.id && (
                  <p style={{ margin: '5px 0 0', fontSize: '0.9rem' }}>{method.info}</p>
                )}
              </div>
            ))}
          </div>
          <input
            type="hidden"
            {...register('paymentMethod', { required: 'Pilih metode pembayaran' })}
          />
          {errors.paymentMethod && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.paymentMethod.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="buktiDrop" style={{ display: 'block', marginBottom: '5px' }}>
            Upload Bukti Transfer (harus menyertakan nomor WhatsApp di deskripsi transfer):
          </label>
          <input
            type="file"
            id="buktiDrop"
            accept="image/*"
            onChange={handleFileChange}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormBeli;