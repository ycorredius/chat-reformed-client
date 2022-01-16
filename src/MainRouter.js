import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp'
import Home from './components/Home'

export default function MainRouter(){
    return (
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    );
}