import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Comp/Login.jsx'
// import PrivateRoute from './Header/ProtectedRoute.jsx'
import Admin from './Comp/Admin.jsx'
import Doctor from './Comp/Doctor.jsx'
import Patient from './Comp/Patient.jsx'
import PrivateRoute from './Comp/ProtectedRoute.jsx'
import Appointment from './Comp/Appointment.jsx'
//import MainLayout from './Layout.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path='/admin/*' element={
          <PrivateRoute role="admin">
            <Admin />
          </PrivateRoute>} />
        <Route path='/doctor/*' element={
          <PrivateRoute role="doctor">
            <Doctor />
          </PrivateRoute>} />
        <Route path='/patient/*' element={
          <PrivateRoute role="patient">
            <Patient />
          </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;













