import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/event" element={<Event />} />


</Routes>
      </Layout>
    </HashRouter>
  </React.StrictMode>
);
