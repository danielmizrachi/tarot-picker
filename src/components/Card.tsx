import React from 'react'

import './Card.css'
import { CardData } from './CardSet'

interface CardProps extends CardData {
  id: number,
  onClick: (id: number) => void,
  isActive: boolean,
  order?: number
}

function Card(props: CardProps) {
  const {
    id,
    onClick,
    isActive,
    order,
    backgroundColor = 'red',
    title = '',
    message = '',
    textColor = 'black'
  } = props

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
    onClick(id)
  }

  return (
    <div
      className={`Card ${isActive ? 'active' : ''}`}
      style={{
        backgroundColor,
        order,
        color: textColor,
      }}
      onClick={handleClick}
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
