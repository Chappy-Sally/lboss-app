import React from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const nav = useNavigate();

  const handleAnswer = (ans) => {
    // 結果ページへ遷移
    nav("/result", { state: { answer: ans } });
  };

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "36px 20px"
      }}
    >
      <h2>🧩 あなたのラスボス診断 🧠</h2>
      <p>最近よく感じることは？</p>

      <div style={{ marginTop: 24 }}>
        <button
          onClick={() => handleAnswer("fear")}
          style={{
            padding: "12px 24px",
            margin: "6px",
            background: "#ffd400",
            border: 0,
            borderRadius: 8,
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          不安が多い
        </button>

        <button
          onClick={() => handleAnswer("anger")}
          style={{
            padding: "12px 24px",
            margin: "6px",
            background: "#ff9f43",
            border: 0,
            borderRadius: 8,
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          イライラする
        </button>

        <button
          onClick={() => handleAnswer("sadness")}
          style={{
            padding: "12px 24px",
            margin: "6px",
            background: "#48dbfb",
            border: 0,
            borderRadius: 8,
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          悲しくなる
        </button>
      </div>
    </main>
  );
}    >
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
