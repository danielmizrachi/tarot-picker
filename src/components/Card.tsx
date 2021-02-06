import React, { useState } from 'react'

import './Card.css'

interface CardProps {
  id: number,
  onClick: (id: number) => void
  isActive: boolean,
  backgroundColor: string,
  title?: string,
  message?: string,
}

function Card(props: CardProps) {
  const { id, onClick, isActive, backgroundColor, title, message } = props

  return (
    <div
      className={`Card ${isActive ? 'active' : ''}`}
      style={{ backgroundColor }}
      onClick={() => onClick(id)}
    >
      {isActive ?
          <>
            <div className="Card-title">
              <h3>{title}</h3>
            </div>
            <div className="Card-message">
              <p>{message}</p>
            </div>
          </>
        :
          <div className="Card-id">{id}</div>
      }
    </div>
  )
}

export default Card
