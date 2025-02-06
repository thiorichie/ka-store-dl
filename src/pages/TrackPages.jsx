import React, { useEffect } from 'react';
import BG1 from '../assets/gt-background_1.png';
import Navbar from './components/Navbar';
import FormTrackOrder from './components/FormTrackOrder';
import Footer from './components/Footer';

function TrackPages() {
    useEffect(() => {
        document.body.style.backgroundColor = 'black';
        document.body.style.backgroundImage = `url(${BG1})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';

        return () => {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
            document.body.style.backgroundRepeat = '';
            document.body.style.backgroundAttachment = '';
        };
    }, []);

    return (
        <div style={styles.container}>
            <Navbar />
            <div style={styles.content}>
                <FormTrackOrder />
            </div>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    content: {
        flex: 1, // Mengisi ruang di antara navbar dan footer
    },
};

export default TrackPages;
