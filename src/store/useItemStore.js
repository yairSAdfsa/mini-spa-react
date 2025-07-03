import { create } from 'zustand'
import axios from 'axios'

const useItemStore = create((set) => ({
  items: [],
  loading: false,
  error: null,

  fetchItems: async () => {
    set({ loading: true, error: null })
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character')
      set({ items: response.data.results, loading: false })
    } catch (error) {
      set({ error: 'Error al obtener los datos 😢', loading: false })
    }
  },
}))

export default useItemStore
