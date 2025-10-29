import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  {
    title: "今いちばん近いのはどれ？",
    options: ["イライラ", "不安", "悲しみ", "もやもや"],
  },
  {
    title: "体感としては？",
    options: ["肩や首がこる", "胸がざわつく", "涙が出そう", "頭の中がぐるぐる"],
  },
  {
    title: "今すぐ叶えたいのは？",
    options: ["落ち着きたい", "安心したい", "癒やされたい", "スッキリしたい"],
  },
];

export default function Quiz() {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState([]);

  const onPick = (v) => {
    const next = [...picked, v];
    setPicked(next);
    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      // ざっくり多数決で結果分類
      const joined = next.join(" ");
      let answer = "不明";
      if (/(イライラ|肩|こる)/.test(joined)) answer = "怒り";
      else if (/(不安|胸|安心)/.test(joined)) answer = "不安";
      else if (/(悲しみ|涙|癒)/.test(joined)) answer = "悲しみ";
      else if (/(もや|頭|スッキリ)/.test(joined)) answer = "混乱";

      nav("/result", { state: { answer } });
    }
  };

  const q = QUESTIONS[step];

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 720,
        margin: "0 auto",
        minHeight: "100vh",
        textAlign: "center",
        background: "linear-gradient(135deg, #fffaf0 0%, #fff4c1 100%)",
        backgroundImage:
          "radial-gradient(circle at 12% 22%, rgba(255,255,255,.9) 0%, transparent 22%), radial-gradient(circle at 88% 78%, rgba(255,255,255,.75) 0%, transparent 28%)",
        padding: "48px 16px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 28 }}>Q{step + 1}. {q.title}</h2>

      <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
        {q.options.map((op) => (
          <button
            key={op}
            onClick={() => onPick(op)}
            style={{
              padding: "14px 18px",
              borderRadius: 12,
              border: 0,
              fontSize: 18,
              fontWeight: 700,
              background: "#ffffff",
              cursor: "pointer",
              boxShadow: "0 6px 16px rgba(0,0,0,.10)",
            }}
          >
            {op}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 24, fontSize: 14, opacity: 0.7 }}>
        {step + 1} / {QUESTIONS.length}
      </div>
    </main>
  );
        }
