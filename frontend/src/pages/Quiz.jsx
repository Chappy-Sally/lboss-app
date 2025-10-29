import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  {
    q: "最近、ついイライラしてしまう？",
    options: [
      { label: "イライラする", tag: "anger" },
      { label: "不安になりやすい", tag: "fear" },
      { label: "しょんぼりしがち", tag: "sadness" },
      { label: "自分を疑いがち", tag: "doubt" },
    ],
  },
  {
    q: "夜、頭の中でグルグル考えが止まらないことが多い？",
    options: [
      { label: "怒りや後悔でモヤモヤ", tag: "anger" },
      { label: "先のことが怖い", tag: "fear" },
      { label: "気力がわかない", tag: "sadness" },
      { label: "自信がない", tag: "doubt" },
    ],
  },
  {
    q: "人の言動に過剰に反応してしまうのは？",
    options: [
      { label: "イラッとする", tag: "anger" },
      { label: "ビクッとする", tag: "fear" },
      { label: "傷つきやすい", tag: "sadness" },
      { label: "自分を責める", tag: "doubt" },
    ],
  },
  {
    q: "今いちばん近い感覚はどれ？",
    options: [
      { label: "カッとなる", tag: "anger" },
      { label: "ドキドキ不安", tag: "fear" },
      { label: "なんか寂しい", tag: "sadness" },
      { label: "私で大丈夫？", tag: "doubt" },
    ],
  },
  {
    q: "一言で言うと、最近の私のテーマは？",
    options: [
      { label: "境界線（怒）", tag: "anger" },
      { label: "安心（不）", tag: "fear" },
      { label: "癒し（悲）", tag: "sadness" },
      { label: "自己肯定（疑）", tag: "doubt" },
    ],
  },
];

export default function Quiz() {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({ anger: 0, fear: 0, sadness: 0, doubt: 0 });

  const current = useMemo(() => QUESTIONS[step], [step]);

  const onSelect = (tag) => {
    const next = { ...score, [tag]: score[tag] + 1 };
    setScore(next);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // 集計：最大スコアのタグを求める
      const winner = Object.entries(next).sort((a, b) => b[1] - a[1])[0][0];
      nav("/result", { state: { answer: winner } });
    }
  };

  return (
    <main className="page">
      <div className="sparkle-bg" aria-hidden="true"></div>

      <h2 className="qtitle">
        {`Q${step + 1}. ${current.q}`}
      </h2>

      <ul className="list">
        {current.options.map((op, i) => (
          <li key={i}>
            <button className="option" onClick={() => onSelect(op.tag)}>
              {op.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="pager">{step + 1} / {QUESTIONS.length}</div>
    </main>
  );
}
