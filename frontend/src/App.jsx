import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 720,
        margin: "0 auto",
        minHeight: "100vh",
        textAlign: "center",
        // ふんわりゴールド系グラデ + キラキラ
        background: "linear-gradient(135deg, #fffaf0 0%, #fff4c1 100%)",
        backgroundImage:
          "radial-gradient(circle at 12% 22%, rgba(255,255,255,.9) 0%, transparent 22%), radial-gradient(circle at 88% 78%, rgba(255,255,255,.75) 0%, transparent 28%)",
        display: "flex",
        flexDirection: "column",
        padding: "48px 16px",
        boxSizing: "border-box",
      }}
    >
      <img
        src="/hero-chappy-sally.png"
        alt="Chappy & Sally"
        style={{ width: 320, height: "auto", margin: "40px auto 16px" }}
      />

      <h1 style={{ fontSize: 40, margin: "8px 0" }}>
        💥 ラスボス退治アプリ
      </h1>

      <div style={{ fontSize: 18, opacity: 0.9, marginBottom: 24 }}>
        あなたの中のラスボスを診断して、光のステージへ✨
      </div>

      <button
        onClick={() => nav("/quiz")}
        style={{
          alignSelf: "center",
          padding: "14px 28px",
          borderRadius: 12,
          border: 0,
          fontSize: 20,
          fontWeight: 800,
          background: "#ffd400",
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(0,0,0,.12)",
        }}
      >
        スタート！
      </button>
    </main>
  );
}
