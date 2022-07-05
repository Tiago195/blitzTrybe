import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Home from './rotas/Home';
import DashBoardAdmin from './rotas/DashBoardAdmin';
import DashBoard from './rotas/DashBoard';

function App() {
  return (
    <section>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/dashboard/admin" element={<DashBoardAdmin />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
