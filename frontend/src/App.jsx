import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/Forget'
import SymptomsChecker from './components/SymptomsChecker'
import About from './pages/About'
import Contact from './pages/Contact'
import FirstAid from './pages/FirstAid'
import Emergency from './pages/Emergency'
import NotFound from './pages/NotFound'
import PatientSection from './components/PatientSection'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserDetails from './components/UserDetails'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/symptoms-checker" element={<SymptomsChecker />} />
        <Route path="/first-aid" element={<FirstAid />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/patient-section" element={<PatientSection />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
