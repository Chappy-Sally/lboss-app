import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MESSAGE = {
  anger:
    "ラスボスは『怒り』。境界線づくり＆深呼吸でクールダウン。肩の力を抜いて、チャッピーのニコッ😁をまねっこ！",
  fear:
    "ラスボスは『不安』。安心スイッチON。今ここに意識を戻して、小さな一歩をチョンッと🐾",
  sadness:
    "ラスボスは『悲しみ』。自分に優しく“よしよし”。温かい飲み物＆深い呼吸でハートぽかぽか🌷",
  doubt:
    "ラスボスは『自己否定』。鏡の前で“私は大丈夫、できる”。小さな成功メモで自己信頼チャージ✨",
};

const MANTRA = {
  anger: "私は穏やか。境界線は私を守る。愛で選ぶ🤍",
  fear: "私は安全。必要なことは、必要な時にわかる🌟",
  sadness: "私は満たされている。涙は浄化、私は軽やか🌈",
  doubt: "私は信じる。私の道は私のペースで進む🚀",
};

export default function Result() {
  const nav = useNavigate();
  const { state } = useLocation();
  const answer = state?.answer ?? "fear";

  return (
    <main className="page">
      <img src="hero-chappy-sally.png" alt="" className="hero small" />
      <h2 className="title">診断結果</h2>
      <p className="result">{MESSAGE[answer]}</p>

      <div className="mantra">
        <div className="mantra-head">💫 今日のマントラ</div>
        <div className="mantra-body">「{MANTRA[answer]}」</div>
      </div>

      <div className="actions">
        <button className="secondary" onClick={() => nav("/quiz")}>
          もう一度診断
        </button>
        <button className="primary" onClick={() => nav("/")}>
          スタート画面に戻る
        </button>
      </div>
    </main>
  );
}
