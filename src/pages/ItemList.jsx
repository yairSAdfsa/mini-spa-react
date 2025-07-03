import { useEffect, useState } from 'react'
import useItemStore from '../store/useItemStore'
import CardList from '../components/CardList'

function ItemList() {
  const { items, loading, fetchItems, error } = useItemStore()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (items.length === 0) {
      fetchItems()
    }
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section>
      <h2 className="mb-4">Listado de Personajes</h2>

      <div className="mb-4 d-flex justify-content-center">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="form-control w-50"
          value={search}
          onChange={handleChange}
        />
      </div>

      {loading && <p className="text-center">Cargando personajes...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      {!loading && !error && <CardList items={filteredItems} />}
    </section>
  )
}

export default ItemList
