import React, { useState } from 'react'

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

  const [ activeCoords, setActiveCoords ] = useState({ top: 0, left: 0 })

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()

    const { offsetTop, offsetLeft } = e.currentTarget
    setActiveCoords({ top: offsetTop, left: offsetLeft })

    onClick(id)
  }

  const style: React.CSSProperties = {
    backgroundColor,
    order,
    ...activeCoords
  }

  return (
    <div
      className={`Card ${isActive ? 'active' : ''} ${textColor}`}
      style={style}
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
