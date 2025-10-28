import React from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const nav = useNavigate();

  // ここは仮の診断ロジック（後で差し替えOK）
  const doDiagnose = () => {
    const score = Math.floor(Math.random() * 100);
    nav("/result?score=" + score);
  };

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, textAlign: "center" }}>
      <h2>診断クイズ</h2>
      <p>（ここに質問UIを入れていくよ）</p>
      <button
        onClick={doDiagnose}
        style={{
          marginTop: 16,
          padding: "12px 24px",
          borderRadius: 8,
          border: 0,
          background: "#ffd400",
          fontSize: 16,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        診断する
      </button>
    </main>
  );
}        padding: "36px 20px",
        textAlign: "center"
      }}
    >
      <h2 style={{ margin: 0, fontSize: 28 }}>Q{step + 1}. {QUESTIONS[step]}</h2>

      <div
        style={{
          height: 8,
          background: "#eee",
          borderRadius: 999,
          margin: "20px auto",
          width: "min(520px, 90%)",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#8dd3ff"
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 26 }}>
        <button
          onClick={() => onAnswer(true)}
          style={{
            padding: "14px 24px",
            borderRadius: 10,
            border: 0,
            background: "#ffd400",
            fontSize: 18,
            fontWeight: 800,
            cursor: "pointer",
            minWidth: 140
          }}
        >
          はい
        </button>
        <button
          onClick={() => onAnswer(false)}
          style={{
            padding: "14px 24px",
            borderRadius: 10,
            border: "2px solid #ccc",
            background: "white",
            fontSize: 18,
            fontWeight: 800,
            cursor: "pointer",
            minWidth: 140
          }}
        >
          いいえ
        </button>
      </div>
    </main>
  );
}
