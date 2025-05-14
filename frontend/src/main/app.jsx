import './App.css'
import React from 'react'
import Logo from '../components/template/logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'

export default props =>
<div className="app">
    <Logo />
    <Nav />
    <Header />
    <Main />
    <Footer />
</div>