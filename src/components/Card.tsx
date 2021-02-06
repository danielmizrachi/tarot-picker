import React from 'react'

import './Card.css'

interface CardProps {
  id: number,
  backgroundColor: string,
  title?: string,
  message?: string
}

function Card(props: CardProps) {
  const { id, backgroundColor, title, message } = props

  return (
    <div
      className="Card"
      style={{ backgroundColor }}
    >
      <div className="Card-id">{id}</div>
    </div>
  )
}

export default Card
