import Card from './Card'

function CardList({ items = [] }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {items.map((item) => (
        <div className="col" key={item.id}>
          <Card image={item.image} name={item.name} species={item.species} />
        </div>
      ))}
    </div>
  )
}

export default CardList
