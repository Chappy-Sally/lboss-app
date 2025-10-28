function App() {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1>💥ラスボス退治アプリ⚔️</h1>
      <p>あなたの中のラスボスを診断して、光のステージへ✨</p>
      <button
        onClick={() => alert("診断スタート！🪄")}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "12px",
          backgroundColor: "#ffd700",
          border: "none",
          cursor: "pointer"
        }}
      >
        スタート！
      </button>
    </main>
  )
}

export default App
