const FAVORITOS_KEY = "favoritos"

export const listarFavoritos = () => {
  return JSON.parse(
    localStorage.getItem(FAVORITOS_KEY)
  ) || []
}

export const adicionarFavorito = (dia) => {

  const favoritos = listarFavoritos()

  const existe = favoritos.find(
    item => item === dia
  )

  if (!existe) {

    favoritos.push(dia)

    localStorage.setItem(
      FAVORITOS_KEY,
      JSON.stringify(favoritos)
    )
  }
}

export const removerFavorito = (dia) => {

  const favoritos = listarFavoritos()

  const atualizados =
    favoritos.filter(
      item => item !== dia
    )

  localStorage.setItem(
    FAVORITOS_KEY,
    JSON.stringify(atualizados)
  )
}