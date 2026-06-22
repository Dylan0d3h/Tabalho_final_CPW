import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Configuracoes() {

  const alternarTema = () => {

    const tema =
      document.body.dataset.theme;

    document.body.dataset.theme =
      tema === "dark"
      ? "light"
      : "dark";
  };

  const limparFavoritos = () => {

    localStorage.clear();

    alert(
      "Favoritos removidos."
    );
  };

  return (
    <>
      <Navbar />

      <main className="container">

        <h1>⚙️ Configurações</h1>

        <div className="settings-card">

          <h2>Tema</h2>

          <button
            onClick={alternarTema}
          >
            Alternar Tema
          </button>

        </div>

        <div className="settings-card">

          <h2>Dados</h2>

          <button
            onClick={limparFavoritos}
          >
            Limpar Favoritos
          </button>

        </div>

        <div className="settings-card">

          <h2>Sistema</h2>

          <p>Versão: 1.0</p>

          <p>React + Vite</p>

          <p>PWA</p>

          <p>Funcionamento Offline</p>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Configuracoes;