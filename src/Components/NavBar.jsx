import { Link } from "react-router-dom"

import {
  FaHome,
  FaUtensils,
  FaHeart,
  FaCog
} from "react-icons/fa"

function Navbar() {

  return (

    <nav className="navbar">

      <Link to="/">
        <FaHome />
        Home
      </Link>

      <Link to="/cardapio">
        <FaUtensils />
        Cardápio
      </Link>

      <Link to="/favoritos">
        <FaHeart />
        Favoritos
      </Link>

      <Link to="/configuracoes">
        <FaCog />
        Configurações
      </Link>

    </nav>
  )
}

export default Navbar