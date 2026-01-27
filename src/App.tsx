export default function App() {
  return (
    <div
      style={{
        padding: "24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: 700 }}>
        APP INICIALIZADO
      </h1>

      <p style={{ marginTop: "12px", fontSize: "16px" }}>
        Se você está vendo isso, o React está renderizando corretamente.
      </p>

      <p style={{ marginTop: "8px", color: "#555" }}>
        Infra, build e deploy estão OK.
      </p>
    </div>
  );
}
