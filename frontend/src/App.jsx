// frontend/src/App.jsx
import React from "react";

export default function App() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <img
        src="/hero-chappy-sally.png"
        alt="Chappy & Sally"
        style={{ width: 240, height: "auto", margin: "40px auto 16px" }}
      />
      <h1>💥 ラスボス退治アプリ ⚔️</h1>
      <p>あなたの中のラスボスを診断して、光のステージへ✨</p>
      <button
        style={{
          marginTop: 16,
          padding: "12px 24px",
          borderRadius: 8,
          border: 0,
          background: "#ffd400",
          fontSize: 18,
          fontWeight: 700,
          cursor: "pointer",
        }}
        onClick={() => alert("スタート！")}
      >
        スタート！
      </button>
    </main>
  );
}
