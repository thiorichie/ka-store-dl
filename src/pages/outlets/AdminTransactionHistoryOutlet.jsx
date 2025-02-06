import React, { useState, useEffect } from 'react';
import axios from 'axios'

function AdminTransactionHistoryOutlet() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ka-store-backend-production.up.railway.app/api/history/getTransactions');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCancelOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleCompleteOrder = (id) => {
    alert(`Order dengan ID ${id} telah selesai.`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Orders</h1>

      <input
        type="text"
        placeholder="Cari berdasarkan nomor transaksi..."
        value={searchTerm}
        onChange={handleSearch}
        style={styles.searchBar}
      />

      <div style={styles.orderList}>
        {filteredOrders.map((order) => (
            <div key={order.transactionId} style={styles.orderCard}>
                <div style={styles.orderInfo}>
                    <h5 style={{textAlign: 'center'}}><strong>Status Transaksi: {order.transactionStatus}</strong></h5>
                    <p><strong>Jenis Transaksi:</strong> Penjualan DL</p>
                    <p><strong>Nomor Transaksi:</strong> {order.transactionId}</p>
                    <p><strong>Jumlah DL:</strong> {order.jumlahDL}</p>
                    <p><strong>Jumlah Dana yang Dicairkan: </strong> Rp. {order.totalPrice}</p>
                    <p><strong>Nomor WhatsApp:</strong> {order.whatsapp}</p>
                    <p><strong>Grow ID:</strong> {order.growID}</p>
                    <p><strong>Nomor Rekening:</strong> {order.paymentData}</p>
                    <p><strong>Metode Pencairan:</strong> {order.paymentMethod}</p>
                    <p><strong>Tanggal Transaksi:</strong> {formatDate(order.createdAt)}</p>
                    <p><strong>Jam Transaksi:</strong> {formatTime(order.createdAt)} WIB</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}

const styles = {
    container: {
      padding: '10px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontSize: '24px',
      marginBottom: '15px',
      color: 'aliceblue',
      textAlign: 'center',
    },
    searchBar: {
      width: '100%',
      padding: '8px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '14px',
    },
    orderList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    orderCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      backgroundColor: '#f9f9f9',
    },
    orderInfo: {
      flex: 1,
      fontSize: '14px',
    },
  };

const mediaQueries = `
@media (min-width: 768px) {
  .orderCard {
    flex-direction: row;
    align-items: center;
  }
}
`;

// Tambahkan media queries ke dalam style
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(mediaQueries, styleSheet.cssRules.length);

export default AdminTransactionHistoryOutlet;