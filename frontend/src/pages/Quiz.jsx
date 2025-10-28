import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  "最近『不安・心配の声』が頭の中でよく響く。",
  "他人の目や評価を気にしすぎて動きが止まることがある。",
  "やる前から『どうせムリ』と思ってしまう。",
  "過去の失敗やモヤモヤを引きずりがちだ。",
  "お金・人間関係・時間の『足りない』にフォーカスしがち。",
  "完璧じゃないと出せない、が口ぐせ。"
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const onAnswer = (yes) => {
    if (yes) setScore((s) => s + 1);
    const next = step + 1;
    if (next >= QUESTIONS.length) {
      navigate("/result", { state: { score } });
    } else {
      setStep(next);
    }
  };

  const progress = Math.round(((step + 1) / QUESTIONS.length) * 100);

  return (
    <main
      style={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
        maxWidth: 860,
        margin: "0 auto",
        padding: "36px 20px",
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
