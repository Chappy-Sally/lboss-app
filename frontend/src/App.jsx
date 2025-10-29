import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";

function Home() {
  const nav = useNavigate();
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <img
        src="/hero-chappy-sally.png"
        alt="Chappy & Sally"
        style={{ width: 240, height: "auto", marginTop: 28 }}
      />
      <h1>💥 ラスボス退治アプリ ⚔️</h1>
      <p>あなたの中のラスボスを診断して、光のステージへ✨</p>
      <button
        onClick={() => nav("/quiz")}
        style={{
          marginTop: 16,
          padding: "12px 24px",
          borderRadius: 8,
          border: 0,
          background: "#ffd400",
          fontSize: 18,
          fontWeight: 700,
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
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}          fontWeight: 800,
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
