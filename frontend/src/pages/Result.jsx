import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MESSAGE = {
  不安: {
    title: "ラスボスは『不安』",
    body:
      "安心スイッチON。呼吸を3回、ゆっくり長く。今ここに意識を戻そう。",
    mantra: "私は守られている。大丈夫。光はすでに私の中にある。",
  },
  怒り: {
    title: "ラスボスは『怒り』",
    body:
      "深呼吸でクールダウン。小さな『ありがとう』を3つ見つけよう。",
    mantra: "私は安全。力はやさしさとして表現される。",
  },
  悲しみ: {
    title: "ラスボスは『悲しみ』",
    body:
      "自分に優しく。温かい飲み物と深い休息を。涙は浄化の合図。",
    mantra: "私は愛されている。私の心は光で満たされる。",
  },
  混乱: {
    title: "ラスボスは『混乱（もやもや）』",
    body:
      "紙に3つだけ気になることを書いて、優先度1つに○。それ以外は宇宙に預けよう。",
    mantra: "私はクリア。焦らなくていい、今ベストができている。",
  },
  不明: {
    title: "もう一度診断してね！",
    body: "今日は流れが速いみたい。改めてチェックしよっか🌈",
    mantra: "私はいつでも光とつながっている。",
  },
};

export default function Result() {
  const nav = useNavigate();
  const { state } = useLocation();
  const key = state?.answer ?? "不明";
  const m = MESSAGE[key] ?? MESSAGE["不明"];

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
      <h2 style={{ fontSize: 28, margin: 0 }}>{m.title}</h2>
      <p style={{ marginTop: 16, fontSize: 18 }}>{m.body}</p>

      <div
        style={{
          margin: "24px auto",
          maxWidth: 560,
          padding: "16px 20px",
          background: "#ffffff",
          borderRadius: 12,
          boxShadow: "0 6px 16px rgba(0,0,0,.10)",
          fontWeight: 700,
        }}
      >
        🔮 マントラ：{m.mantra}
      </div>

      <button
        onClick={() => nav("/")}
        style={{
          padding: "12px 22px",
          borderRadius: 12,
          border: 0,
          fontSize: 16,
          fontWeight: 800,
          background: "#ffd400",
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(0,0,0,.12)",
        }}
      >
        もう一度やる
      </button>
    </main>
  );
}
