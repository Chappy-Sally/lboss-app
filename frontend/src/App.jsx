import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";

function Landing() {
  const navigate = useNavigate();
  return (
    <main
      style={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
        maxWidth: 880,
        margin: "0 auto",
        padding: "48px 20px",
        textAlign: "center"
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}hero-chappy-sally.png`}
        alt="Chappy & Sally"
        style={{ width: 240, height: "auto", margin: "8px auto 16px", display: "block" }}
      />
      <h1 style={{ fontSize: 36, margin: "8px 0 4px" }}>💥ラスボス退治アプリ</h1>
      <p style={{ fontSize: 18, opacity: 0.85 }}>
        あなたの中のラスボスを診断して、光のステージへ✨
      </p>
      <button
        onClick={() => navigate("/quiz")}
        style={{
          marginTop: 28,
          padding: "14px 28px",
          borderRadius: 10,
          border: 0,
          background: "#ffd400",
          fontSize: 18,
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(0,0,0,.12)"
        }}
      >
        スタート！
      </button>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
