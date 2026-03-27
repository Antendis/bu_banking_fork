import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage, SignupPage, ForgotPasswordPage } from './pages/AuthPages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  )
}
