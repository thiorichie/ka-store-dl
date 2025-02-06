import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import LandingPages from "./pages/LandingPages";
import SellPages from "./pages/SellPages"
import BuyPages from './pages/BuyPages';
import AdminLandingPages from './pages/AdminLandingPages';
import AdminLoginPages from './pages/AdminLoginPages';
import AdminDashboardOutlet from './pages/outlets/AdminDashboardOutlet'
import AdminPendingBuyOutlet from './pages/outlets/AdminPendingBuyOutlet';
import AdminPendingSellOutlet from './pages/outlets/AdminPendingSellOutlet';
import AdminTransactionHistoryOutlet from './pages/outlets/AdminTransactionHistoryOutlet';
import TrackPages from './pages/TrackPages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPages/>
  },
  {
    path: '/jual',
    element: <SellPages/>
  },
  {
    path: '/track-order',
    element: <TrackPages/>
  },
  {
    path: '/beli',
    element: <BuyPages/>
  },
  {
    path: '/login',
    element: <AdminLoginPages/>
  },
  {
    path: '/admin',
    element: <AdminLandingPages/>,
    children: [
      {
        path: '',
        element: <AdminDashboardOutlet/>
      },
      {
        path: 'buy-pending',
        element: <AdminPendingBuyOutlet/>
      },
      {
        path: 'sell-pending',
        element: <AdminPendingSellOutlet/>
      },
      {
        path: 'history',
        element: <AdminTransactionHistoryOutlet/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
