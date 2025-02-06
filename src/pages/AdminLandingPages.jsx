import React, { useEffect, useState } from 'react';
import SideBar from './components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import BG from '../assets/banner-2.png'
import axios from 'axios';

function HomePage() {
    const navigate = useNavigate();
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    useEffect(() => {
        document.body.style.backgroundColor = 'white';
        document.body.style.backgroundImage = `url(${BG})`
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';

        const verifyUser = async()=>{
            try{
                const checkToken = await axios.get('https://ka-store-backend-production.up.railway.app/api/login/verifyToken', {withCredentials: true})
                console.log(checkToken)
            }
            catch (e){
                alert("Error decoding the auth token", e);
                console.log(e)
                navigate("/login")
            }
        }
        verifyUser();

        return () => {
        document.body.style.backgroundImage = '';
        document.body.style.backgroundSize = '';
        document.body.style.backgroundPosition = '';
        document.body.style.backgroundRepeat = '';
        document.body.style.backgroundAttachment = '';
        };
    }, []);

    const sidebarWidth = isSidebarExpanded ? '250px' : '80px';

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <SideBar setIsSidebarExpanded={setIsSidebarExpanded} />
            <div style={{ flex: 1, marginLeft: sidebarWidth, padding: '20px', overflowY: 'auto' }}>
                <Outlet />
            </div>
        </div>
    );
}

export default HomePage;