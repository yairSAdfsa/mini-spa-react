import { useEffect } from 'react'
import useItemStore from '../store/useItemStore'
import CardList from '../components/CardList'

function Home() {
  const { items, fetchItems } = useItemStore()

  useEffect(() => {
    if (items.length === 0) fetchItems()
  }, [])

  const preview = items.slice(0, 6)

  return (
    <>
      <section className="bg-light p-5 rounded mb-4 text-center">
        <h1 className="display-5 fw-bold">Explora el Universo de Rick and Morty</h1>
        <p className="lead">Descubre personajes, especies y más en esta mini SPA hecha con React.</p>
      </section>

      <section>
        <h2 className="mb-3">Personajes Destacados</h2>
        <CardList items={preview} />
      </section>
    </>
  )
}

export default Home
