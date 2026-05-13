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