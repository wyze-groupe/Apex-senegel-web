import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { GoBell } from 'react-icons/go'
import { GoGear } from 'react-icons/go'

const styles = {
  header: {
    height: '70px',
    background: '#ffffff',
    borderBottom: '1px solid #f0ece4',
    display: 'flex',
    alignItems: 'center',
    padding: '0 32px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: '#F5F0E8',
    borderRadius: '100px',
    padding: '10px 20px',
    width: '360px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '13px',
    color: '#1A1A1A',
    width: '100%',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flex: 1,
    justifyContent: 'flex-end',
  },
  iconBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#F5F0E8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
  },
  langWrapper: { position: 'relative' },
  langBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: '#F5F0E8',
    border: 'none',
    borderRadius: '100px',
    padding: '8px 14px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#1A1A1A',
    cursor: 'pointer',
  },
  langDropdown: {
    position: 'absolute',
    top: '48px',
    right: 0,
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    minWidth: '140px',
    zIndex: 200,
  },
  langOption: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 16px',
    fontSize: '13px',
    color: '#1A1A1A',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    width: '100%',
    textAlign: 'left',
  },
  langOptionActive: {
    background: 'rgba(13,59,46,0.06)',
    color: '#0D3B2E',
    fontWeight: '600',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  userName: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'right',
  },
  userRole: {
    fontSize: '10px',
    color: '#9a9a9a',
    textAlign: 'right',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '4px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#1B5E3B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '700',
    color: '#ffffff',
  },
}

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'wo', label: 'Wolof', flag: '🇸🇳' },
]

// TODO: remplacer par useAuth() quand l'AuthContext sera prêt
const mockUser = {
  nom: 'Kemi Seba',
  prenom: 'Kemi',
  role: 'Apprenant Avancé',
}

function Header() {
  const [currentLang, setCurrentLang] = useState('fr')
  const [langOpen, setLangOpen] = useState(false)

  const getInitial = () => mockUser.prenom.charAt(0).toUpperCase()
  const activeLang = LANGUAGES.find(l => l.code === currentLang)

  return (
    <header style={styles.header}>

      {/* Espace gauche vide */}
      <div style={{ flex: 1 }} />

      {/* Barre de recherche centrée */}
      <div style={styles.searchBar}>
        <GoSearch size={16} color="#9a9a9a" />
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Rechercher un apprenant, un module..."
        />
      </div>

      {/* Actions + Profil à droite */}
      <div style={styles.actions}>

        {/* Sélecteur de langue */}
        <div style={styles.langWrapper}>
          <button style={styles.langBtn} onClick={() => setLangOpen(!langOpen)}>
            <span>{activeLang.flag}</span>
            <span>{activeLang.label}</span>
            <span>▾</span>
          </button>
          {langOpen && (
            <div style={styles.langDropdown}>
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  style={{
                    ...styles.langOption,
                    ...(currentLang === lang.code ? styles.langOptionActive : {}),
                  }}
                  onClick={() => { setCurrentLang(lang.code); setLangOpen(false) }}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button style={styles.iconBtn}><GoBell size={18} /></button>
        <button style={styles.iconBtn}><GoGear size={18} /></button>

        <div style={styles.userInfo}>
          <div>
            <div style={styles.userName}>{mockUser.nom}</div>
            <div style={styles.userRole}>{mockUser.role}</div>
          </div>
          <div style={styles.avatar}>{getInitial()}</div>
        </div>
      </div>

    </header>
  )
}

export default Header
