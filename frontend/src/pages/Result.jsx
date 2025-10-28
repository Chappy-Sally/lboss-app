import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function judge(score) {
  // 0-2: ふわっと　3-4: そこそこ　5-6: ガチ勢
  if (score <= 2) {
    return {
      title: "ラスボス『心配オバケ』は ねむねむ😴",
      msg: "今のあなたは十分いい感じ！小さな一歩を続ければOK。"
    };
  } else if (score <= 4) {
    return {
      title: "ラスボス『足りない星人』が少し頑張ってる👾",
      msg: "受け取り宣言＋行動の量を1.2倍に。完璧より“いま出す”が勝ち！"
    };
  } else {
    return {
      title: "ラスボス『自己否定ドラゴン』が炎を吐いてる🔥",
      msg: "セルフラブ最優先！睡眠・栄養・笑いを満たして“私は大丈夫”を毎日宣言。"
    };
  }
}

export default function Result() {
  const nav = useNavigate();
  const loc = useLocation();
  const score = loc.state?.score ?? 0;
  const res = judge(score);

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
        style={{ width: 160, height: "auto", margin: "0 auto 8px", display: "block" }}
      />
      <h2 style={{ fontSize: 28, margin: "8px 0" }}>{res.title}</h2>
      <p style={{ fontSize: 18, opacity: 0.9 }}>スコア：{score} / 6</p>

      <div
        style={{
          background: "#fff6d6",
          border: "1px solid #ffe08a",
          padding: "18px 16px",
          borderRadius: 14,
          margin: "18px auto",
          maxWidth: 680,
          lineHeight: 1.8,
          fontSize: 18
        }}
      >
        {res.msg}
        <br />
        <br />
        <strong>🌟今日のおまじない</strong>
        <div style={{ marginTop: 8 }}>
          <code style={{ background: "#fff", padding: "6px 10px", borderRadius: 8 }}>
            「私はすでに光のステージに立っている。受け取りMAXで行きます✨」
          </code>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 22 }}>
        <button
          onClick={() => nav("/")}
          style={{
            padding: "12px 20px",
            borderRadius: 10,
            border: 0,
            background: "#ffd400",
            fontSize: 16,
            fontWeight: 800,
            cursor: "pointer"
          }}
        >
          もう一回やる
        </button>
        <a
          href="https://line.me/R/ti/p/"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            padding: "12px 20px",
            borderRadius: 10,
            border: "2px solid #ccc",
            background: "white",
            fontSize: 16,
            fontWeight: 800
          }}
        >
          公式LINEで受け取り強化💖
        </a>
      </div>
    </main>
  );
}
