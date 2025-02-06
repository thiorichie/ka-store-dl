import React, { useState } from 'react';
import axios from 'axios';

function FormTrackOrder() {
  const [transactionId, setTransactionId] = useState('');
  const [transaction, setTransaction] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://ka-store-backend-production.up.railway.app/api/history/getTransactions/${transactionId}`);
      console.log(response.data);
      setTransaction(response.data);
      setError('');
    } catch (err) {
      setTransaction(null);
      setError('Transaksi tidak ditemukan.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Lacak Pesanan</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Masukkan Nomor Transaksi"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Cari
        </button>
      </form>

      {transaction && (
        <div style={styles.resultContainer}>
          <h3 style={styles.resultTitle}>Detail Transaksi</h3>
          <div style={styles.resultItem}>
            <p><strong>Nomor Transaksi:</strong> {transaction.transactionId}</p>
            <p><strong>Status:</strong> {transaction.transactionStatus}</p>
          </div>
        </div>
      )}

      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    width: '90%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginTop: '120px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  resultContainer: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  resultTitle: {
    marginBottom: '10px',
    color: '#333',
    fontSize: '20px',
  },
  resultItem: {
    fontSize: '14px',
    color: '#555',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '16px',
  },
};

export default FormTrackOrder;