import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  "最近、ついイライラしてしまう？",
  "人の目を気にして不安になることが多い？",
  "過去の出来事を思い出してモヤっとする？",
  "自分を責める言葉が口ぐせになってる？",
  "やる前から『無理かも』と思いがち？",
];

const CHOICES = [
  { key: "anger", label: "イライラする" },
  { key: "fear", label: "不安になりやすい" },
  { key: "sad", label: "しょんぼりしがち" },
  { key: "doubt", label: "自分を疑いがち" },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [tally, setTally] = useState({ anger: 0, fear: 0, sad: 0, doubt: 0 });
  const nav = useNavigate();

  const choose = (key) => {
    const next = { ...tally, [key]: tally[key] + 1 };
    setTally(next);

    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      // 最多のキーを結果に
      const entries = Object.entries(next);
      entries.sort((a, b) => b[1] - a[1]);
      const answer = entries[0][0];
      nav("/result", { state: { answer } });
    }
  };

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 720,
        margin: "48px auto",
        padding: "0 16px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 28, textAlign: "center" }}>
        Q{step + 1}. {QUESTIONS[step]}
      </h2>

      <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
        {CHOICES.map((c) => (
          <button
            key={c.key}
            onClick={() => choose(c.key)}
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              border: "1px solid #e5e5e5",
              textAlign: "left",
              fontSize: 16,
              background: "#fff",
              cursor: "pointer",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p style={{ marginTop: 16, textAlign: "center", color: "#666" }}>
        {step + 1} / {QUESTIONS.length}
      </p>
    </main>
  );
}
