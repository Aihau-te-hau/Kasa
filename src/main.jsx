import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Layout from './components/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import PropertyDetail from './pages/PropertyDetail'

import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>

      <Routes>

        {/* 
        !!! important !!!
        Le "Layout" doit être défini dans une route et non autour de "Router".
        Layout connait les routes enfants et utilise "Outlet" pour les afficher.
        Ainsi il est controlé par "React Router". Cela évite d'être tt le tps affiché si autour de "Router".
        Cela permet aussi d'avoir pls layouts (ex: adminLayout) et de les différencier selon les routes.
        */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route
            path="/property/:id"
            element={<PropertyDetail />}
          />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<Error />} />

        </Route>

      </Routes>

    </Router>
  </StrictMode>,
)