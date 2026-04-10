import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#F5F0E8',
  },
  main: {
    flex: 1,
    padding: '32px',
  },
}

function Layout() {
  return (
    <div style={styles.layout}>
      <Header />
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
