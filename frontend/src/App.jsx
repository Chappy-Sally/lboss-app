import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";

function Home() {
  const nav = useNavigate();

  return (
    <main className="page">
      <img
        src="hero-chappy-sally.png"  /* ← 先頭スラッシュなし（public直下） */
        alt="Chappy & Sally"
        className="hero"
      />
      <h1 className="title">💥 ラスボス退治アプリ ⚔️</h1>
      <p className="lead">あなたの中のラスボスを診断して、光のステージへ✨</p>
      <button className="primary" onClick={() => nav("/quiz")}>
        スタート！
      </button>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
    }
