import { motion } from "framer-motion"

function StatCard({

  titulo,
  valor

}) {

  return (

    <motion.div

      className="stat-card"

      whileHover={{
        scale: 1.05
      }}

    >

      <h3>{valor}</h3>

      <p>{titulo}</p>

    </motion.div>
  )
}

export default StatCard