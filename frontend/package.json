import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const nav = useNavigate();
  const { state } = useLocation();
  const answer = state?.answer ?? "unknown";

  const messageMap = {
    fear:   "ラスボスは『不安』。安心スイッチをONにしよう！",
    anger:  "ラスボスは『怒り』。深呼吸でクールダウン💨",
    sadness:"ラスボスは『悲しみ』。やさしく自分にハグ🤗",
    unknown:"診断からやり直してね！"
  };

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "48px 20px"
      }}
    >
      <h2 style={{ fontSize: 28, margin: 0 }}>診断結果</h2>

      <p style={{ marginTop: 16, fontSize: 18 }}>
        {messageMap[answer]}
      </p>

      <button
        onClick={() => nav("/")}
        style={{
          marginTop: 24,
          padding: "12px 24px",
          border: 0,
          borderRadius: 8,
          background: "#ffd400",
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(0,0,0,.12)"
        }}
      >
        トップへ戻る
      </button>
    </main>
  );
}
