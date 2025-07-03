import { useState } from 'react'

function Card({ image, name, species }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden"
      style={{
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={name}
        className="card-img-top object-fit-cover"
        style={{ height: '280px' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-semibold text-primary">{name}</h5>
        <p className="card-text text-muted small">{species}</p>
      </div>
    </div>
  )
}

export default Card
