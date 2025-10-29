import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const nav = useNavigate();
  const { state } = useLocation();
  const answer = state?.answer ?? "unknown";

  const messageMap = {
    fear:
      "ラスボスは『不安』。安心スイッチON！ 3回深呼吸して『今ここは安全』と宣言しよう。",
    anger:
      "ラスボスは『怒り』。深呼吸でクールダウン。手を胸に当てて『私は大丈夫』と優しく声かけ。",
    sad:
      "ラスボスは『悲しみ』。自分に優しく。温かい飲み物とふわふわ毛布で心を包もう。",
    doubt:
      "ラスボスは『自己不信』。小さく一歩！ 1分だけやってみる→できたら自信+1✨",
    unknown:
      "診断からやり直してね！『スタート』で再挑戦しよう😊",
  };

  const titleMap = {
    fear: "不安ラスボス",
    anger: "怒りラスボス",
    sad: "悲しみラスボス",
    doubt: "自己不信ラスボス",
    unknown: "診断未完了",
  };

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 720,
        margin: "48px auto",
        padding: "0 16px",
        textAlign: "center",
      }}
    >
      <h2>結果：{titleMap[answer]}</h2>
      <p style={{ fontSize: 18, lineHeight: 1.8 }}>{messageMap[answer]}</p>

      <button
        onClick={() => nav("/")}
        style={{
          marginTop: 24,
          padding: "12px 24px",
          borderRadius: 8,
          border: 0,
          background: "#ffd400",
          fontSize: 16,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(0,0,0,.12)",
        }}
      >
        スタート画面へ戻る
      </button>
    </main>
  );
}
