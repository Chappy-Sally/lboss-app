import React from "react";

export default function Result() {
  const params = new URLSearchParams(location.search);
  const score = Number(params.get("score") || 0);

  let label = "クリア目前！";
  if (score < 30) label = "ラスボス健在！";
  if (score >= 30 && score < 70) label = "あと一歩！";
  if (score >= 70) label = "光のステージへ✨";

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, textAlign: "center" }}>
      <h2>診断結果</h2>
      <p>スコア：{score}</p>
      <h3>{label}</h3>
      <a href="/lboss-app/" style={{ display: "inline-block", marginTop: 16 }}>最初に戻る</a>
    </main>
  );
}        padding: "48px 20px",
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
