import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

// expression régulière regex pour valider le format de l'email
// vérifie que l'adresse mail est au format valide (ex: daphne@test.com)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0D3B2E',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Sora, sans-serif',
  },
  welcome: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  welcomeTitle: {
    fontFamily: 'Sora, sans-serif',
    fontSize: '32px',
    fontWeight: '800',
    color: '#F5F0E8',
    marginBottom: '8px',
  },
  welcomeSub: {
    fontFamily: 'Sora, sans-serif',
    fontSize: '14px',
    color: 'rgba(245,240,232,0.6)',
    letterSpacing: '1px',
  },
  card: {
    background: '#F5F0E8',
    borderRadius: '24px',
    padding: '48px',
    width: '420px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },
  logoWrapper: {
    width: '72px',
    height: '72px',
    background: '#0D3B2E',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#0D3B2E',
    textAlign: 'center',
    lineHeight: '1.2',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#1A1A1A',
  },
  input: {
    padding: '14px 16px',
    borderRadius: '12px',
    border: '2px solid #F5F0E8',
    fontSize: '14px',
    fontFamily: 'Sora, sans-serif',
    color: '#1A1A1A',
    outline: 'none',
    transition: 'border-color 0.2s',
    background: '#ffffff',
  },
  inputError: {
    border: '2px solid #E53935',
  },
  fieldError: {
    fontSize: '12px',
    color: '#E53935',
    marginTop: '2px',
  },
  submitBtn: {
    width: '100%',
    padding: '16px',
    background: '#F5C400',
    color: '#0D3B2E',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '700',
    fontFamily: 'Sora, sans-serif',
    cursor: 'pointer',
    marginTop: '8px',
  },
  error: {
    fontSize: '13px',
    color: '#E53935',
    textAlign: 'center',
    background: '#FFEBEE',
    padding: '10px 16px',
    borderRadius: '8px',
    width: '100%',
  },
}

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({ email: '', password: '' })
  const [currentLang, setCurrentLang] = useState('fr')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!validate()) return
    navigate('/home')
  }

  const validate = () => {
    const errors = { email: '', password: '' }
    let isValid = true
    if (!email) {
      errors.email = 'L\'email est obligatoire'
      isValid = false
    } else if (!emailRegex.test(email)) {
      errors.email = 'Adresse email invalide'
      isValid = false
    }
    if (!password) {
      errors.password = 'Le mot de passe est obligatoire'
      isValid = false
    }
    setFieldErrors(errors)
    return isValid
  }

  return (
    <div style={styles.page}>

      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoWrapper}>
          <img src={Logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Titre */}
        <div style={styles.brandName}>Connexion</div>

        {/* Formulaire */}
        <div style={styles.form}>
          {error && <div style={styles.error}>{error}</div>}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              style={{ ...styles.input, ...(fieldErrors.email ? styles.inputError : {}) }}
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setFieldErrors(prev => ({ ...prev, email: '' }))
              }}
            />
            {fieldErrors.email && <span style={styles.fieldError}>{fieldErrors.email}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Mot de passe</label>
            <input
              style={{ ...styles.input, ...(fieldErrors.password ? styles.inputError : {}) }}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setFieldErrors(prev => ({ ...prev, password: '' }))
              }}
            />
            {fieldErrors.password && <span style={styles.fieldError}>{fieldErrors.password}</span>}
          </div>

          <button style={styles.submitBtn} onClick={handleSubmit}>
            Se connecter
          </button>
        </div>
      </div>

      <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
        {['🇫🇷 FR', '🇬🇧 EN', '🇸🇳 WO'].map((lang, i) => {
          const codes = ['fr', 'en', 'wo']
          return (
            <button
              key={i}
              onClick={() => setCurrentLang(codes[i])}
              style={{
                background: currentLang === codes[i] ? 'rgba(245,240,232,0.2)' : 'transparent',
                border: '1px solid rgba(245,240,232,0.2)',
                borderRadius: '100px',
                padding: '6px 14px',
                fontSize: '12px',
                fontFamily: 'Sora, sans-serif',
                fontWeight: '600',
                color: currentLang === codes[i] ? '#F5F0E8' : 'rgba(245,240,232,0.4)',
                cursor: 'pointer',
              }}
            >
              {lang}
            </button>
          )
        })}
      </div>

    </div>
  )
}

export default Login