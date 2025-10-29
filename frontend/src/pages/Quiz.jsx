import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 表示する設問（必要に応じて増やしてOK）
const QUESTIONS = [
  "最近よく感じることは？"
];

export default function Quiz() {
  const nav = useNavigate();
  const [step, setStep] = useState(0);

  const answerAndNext = (ans) => {
    // ここで回答に応じたロジックがあれば入れる
    // 今は1問想定なので、すぐ結果へ
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
      <h2 style={{ margin: 0, fontSize: 28 }}>
        Q{step + 1}. {QUESTIONS[step]}
      </h2>

      <div style={{ marginTop: 24 }}>
        <button
          onClick={() => answerAndNext("fear")}
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
          onClick={() => answerAndNext("anger")}
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
          onClick={() => answerAndNext("sadness")}
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
}
