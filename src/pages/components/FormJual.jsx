import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import BCA from '../../assets/BCA.png';
import GOPAY from '../../assets/GOPAY.jpeg';
import OVO from '../../assets/OVO.png';
import DANA from '../../assets/DANA.png';
import SHOPEEPAY from '../../assets/SHOPEEPAY.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const paymentMethods = [
  {
    id: 'bca',
    name: 'BCA',
    logo: BCA,
  },
  {
    id: 'gopay',
    name: 'GOPAY',
    logo: GOPAY,
  },
  {
    id: 'ovo',
    name: 'OVO',
    logo: OVO,
  },
  {
    id: 'dana',
    name: 'DANA',
    logo: DANA,
  },
  {
    id: 'shopeepay',
    name: 'SHOPEE PAY',
    logo: SHOPEEPAY,
  },
];

function FormJual() {
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

  const onSubmit = async(data) => {
    if (!selectedFile) {
      alert("Bukti drop is required!");
      return
    }

    const formData = new FormData();
    formData.append('jumlahDL', data.jumlahDL);
    formData.append("whatsapp", data.whatsapp);
    formData.append("growID", data.nickname);
    formData.append("paymentData", data.nomorRekening);
    formData.append("paymentMethod", data.paymentMethod);
    formData.append("buktiDrop", selectedFile);
    formData.append("totalPrice", totalHarga);
    try{
      const postData = await axios.post('https://ka-store-backend-production.up.railway.app/api/sellDL/createTransaction', formData);
      alert(postData.data.message);
      navigate('/')
    }
    catch(e){
      alert(e)
    }
  };

  const [hargaPerDL, setHargaPerDL] = useState();
  const [nameWorld, setNameWorld] = useState();
  const [owner, setOwner] = useState();
  const jumlahDL = watch('jumlahDL') || 0;
  const totalHarga = jumlahDL * hargaPerDL;

  const handlePaymentMethodClick = (methodId) => {
    setSelectedMethod(methodId);
    setValue('paymentMethod', methodId);
  };

  const getRate = async() => {
    const getData = await axios.get('https://ka-store-backend-production.up.railway.app/api/info/getInfo/sellDL');
    console.log(getData)
    setHargaPerDL(getData.data.rateSell_dl);
    setNameWorld(getData.data.nameWorld);
    setOwner(getData.data.growId_own);
  }

  useEffect(()=> {
      getRate();
    }, [])

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', color: 'aliceblue', marginTop: '120px', border: '3px solid white', borderRadius: '15px', backgroundColor: '#030303' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Form Jual Diamond Lock</h2>
      <div style={{ marginBottom: '20px' }}>
        <p>
          <strong>Drop Diamond Lock di<br/>World: {nameWorld}, Owner: {owner}</strong>
        </p>
        <p>
          <strong>Jumlah yang didapat: Rp. {totalHarga}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
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
          <label htmlFor="nickname" style={{ display: 'block', marginBottom: '5px' }}>
            GrowID (harus persis dengan yang drop DL):
          </label>
          <input
            type="text"
            id="nickname"
            {...register('nickname', { required: 'Wajib diisi' })}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {errors.nickname && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.nickname.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nomorRekening" style={{ display: 'block', marginBottom: '5px' }}>
            Nomor Rekening / E-Wallet:
          </label>
          <input
            type="text"
            id="nomorRekening"
            {...register('nomorRekening', { required: 'Wajib diisi' })}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {errors.nomorRekening && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.nomorRekening.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Pilih Metode Pencairan:</label>
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
                }}
              >
                <img
                  src={method.logo}
                  alt={method.name}
                  style={{ width: '50px', height: '50px', marginBottom: '5px' }}
                />
                <p style={{ margin: 0 }}>{method.name}</p>
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
            Upload Bukti Drop di Donation (harus menyertakan nomor WhatsApp di donation box):
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

export default FormJual;