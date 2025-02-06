import React from 'react';

function Footer() {
  return (
    <div style={styles.footer}>
      <div style={{ marginBottom: '10px' }}>
        <a
          href="https://www.instagram.com/ka_topup"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'aliceblue', textDecoration: 'none' }}
        >
          <span style={{ marginRight: '8px' }}>📷</span> Follow us on Instagram: @ka_topup
        </a>
      </div>

      <div style={{ marginBottom: '10px' }}>
        © {new Date().getFullYear()} KristAcin STORE. All rights reserved.
      </div>

      <div>
        <strong>KA STORE</strong> - Your Trusted Diamond Lock Store
      </div>
    </div>
  );
}

const styles = {
    footer: {
        backgroundColor: '#0d6efd',
        color: 'aliceblue',
        padding: '20px',
        borderTop: '1px solid white',
        textAlign: 'center',
        marginTop: 'auto', // Membuat footer tetap di bawah
    },
};

export default Footer;
