import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore ('favoritos', () => {


  const handelClickFavorito = () => {
    console.log('agregando..')
  }

  return {
    handelClickFavorito
  }
})