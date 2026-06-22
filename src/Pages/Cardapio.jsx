import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";

import menuData from "../services/menuData";

import {
  adicionarFavorito
} from "../services/LocalStorageService";

import { toast } from "react-toastify";

function Cardapio() {

  const [busca, setBusca] =
    useState("");

  const favoritar = (dia) => {

    adicionarFavorito(dia);

    toast.success(
      `${dia} favoritado`
    );
  };

  const filtrados = menuData.filter(
    item =>
      item.dia
        .toLowerCase()
        .includes(
          busca.toLowerCase()
        )
  );

  return (
    <>
      <Navbar />

      <main className="container">

        <h1>🍽️ Cardápio Semanal</h1>

        <input
          className="search-input"
          placeholder="Buscar dia..."
          value={busca}
          onChange={(e) =>
            setBusca(
              e.target.value
            )
          }
        />

        <div className="cards-grid">

          {
            filtrados.map(item => (

              <MealCard
                key={item.id}
                dia={item.dia}
                imagem={item.imagem}
                refeicoes={
                  item.refeicoes
                }
                onFavorite={
                  favoritar
                }
              />

            ))
          }

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Cardapio;