import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.scss'
import logo from './assets/argentBankLogo.webp'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import User from './pages/User.jsx'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Error404 from './components/Error404.jsx'

import { store } from './app/store.js'
import { Provider } from 'react-redux'

import RequireAuth from './app/RequireAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Header logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="*" element={<Error404 />} />
        <Route element={<RequireAuth />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  </Provider>,
)
