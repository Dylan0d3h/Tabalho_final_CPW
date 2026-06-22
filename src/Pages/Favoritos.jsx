import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  listarFavoritos,
  removerFavorito
} from "../services/LocalStorageService";

function Favoritos() {

  const [favoritos, setFavoritos] =
    useState([]);

  const carregar = () => {
    setFavoritos(listarFavoritos());
  };

  useEffect(() => {
    carregar();
  }, []);

  const excluir = (dia) => {

    removerFavorito(dia);

    carregar();
  };

  return (
    <>
      <Navbar />

      <main className="container">

        <h1>❤️ Dias Favoritos</h1>

        {
          favoritos.length === 0 && (
            <p>
              Nenhum favorito salvo.
            </p>
          )
        }

        {
          favoritos.map((dia, index) => (

            <div
              key={index}
              className="favorite-item"
            >

              <h3>
                ❤️ {dia}
              </h3>

              <button
                onClick={() =>
                  excluir(dia)
                }
              >
                Remover
              </button>

            </div>

          ))
        }

      </main>

      <Footer />
    </>
  );
}

export default Favoritos;