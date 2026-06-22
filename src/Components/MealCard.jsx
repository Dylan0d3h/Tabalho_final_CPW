import { motion } from "framer-motion"

import {
  FaHeart
} from "react-icons/fa"

function MealCard({

  dia,
  imagem,
  refeicoes,
  onFavorite

}) {

  return (

    <motion.div

      className="meal-card"

      whileHover={{
        scale: 1.03
      }}

    >

      <img
        src={imagem}
        alt={dia}
      />

      <h2>{dia}</h2>

      <ul>

        {
          refeicoes.map(
            (item, index) => (

              <li key={index}>
                {item}
              </li>

            )
          )
        }

      </ul>

      <button
        onClick={() => onFavorite(dia)}
      >

        <FaHeart />

        Favoritar

      </button>

    </motion.div>
  )
}

export default MealCard