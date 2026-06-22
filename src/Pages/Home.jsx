import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatCard from "../components/StatCard";

import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Navbar />

      <main className="container">

        <motion.section
          className="hero"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Refeitório IFMS</h1>

          <p>
            Consulte o cardápio semanal,
            acompanhe os horários do refeitório
            e favorite seus dias preferidos.
          </p>

        </motion.section>

        <section className="stats">

          <StatCard
            titulo="Horários"
            valor="3"
          />

          <StatCard
            titulo="Pratos Semanais"
            valor="20+"
          />

          <StatCard
            titulo="Funcionamento"
            valor="Seg-Sex"
          />

        </section>

        <section className="info-box">

          <h2>Horários</h2>

          <p>Café da manhã: 06:30 - 08:00</p>

          <p>Almoço: 11:00 - 13:00</p>

          <p>Jantar: 18:00 - 19:30</p>

        </section>

        <section className="info-box">

          <h2>📢 Avisos</h2>

          <p>Não desperdice alimentos.</p>

          <p>Consulte o cardápio diariamente.</p>

          <p>Mantenha sua carteirinha atualizada.</p>

        </section>

        <section className="info-box">

          <h2>Sobre o Sistema</h2>

          <p>
            Aplicação desenvolvida para facilitar
            a consulta do cardápio semanal do
            refeitório do IFMS.
          </p>

          <p>
            O sistema funciona offline e pode
            ser instalado como aplicativo.
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;