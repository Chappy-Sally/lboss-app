// frontend/src/App.jsx
import React from 'react'

export default function App() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      lineHeight: 1.6,
    }}>
      <div style={{ textAlign: 'center', maxWidth: 560, padding: 24 }}>
        <img
          src="/lboss-app/hero-chappy-sally.png"
          alt="チャッピー＆サリー"
          style={{ width: 240, height: 'auto', display: 'block', margin: '0 auto 16px', borderRadius: 16 }}
        />
        <h1 style={{ fontSize: 34, margin: '16px 0' }}>💥ラスボス退治アプリ⚔️</h1>
        <p>あなたの中のラスボスを診断して、光のステージへ✨</p>
        <button
          style={{
            marginTop: 16,
            fontSize: 18,
            padding: '12px 24px',
            borderRadius: 9999,
            border: 'none',
            background: '#ffd000',
            cursor: 'pointer'
          }}
          onClick={() => alert('スタート！')}
        >
          スタート！
        </button>
      </div>
    </main>
  )
}
