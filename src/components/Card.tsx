import React, { useEffect, useRef, useState } from 'react'

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
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const newActiveCoords = {
      top: containerRef.current?.offsetTop || 0,
      left: containerRef.current?.offsetLeft || 0
    }
    setActiveCoords(newActiveCoords)
  }, [])

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
      className={`Card ${isActive ? 'active' : ''} text-${textColor}`}
      style={style}
      ref={containerRef}
      onClick={handleClick}
    >
      <div className="Card-inner">
        <div className="Card-front">
          <p className="Card-id">{id}</p>
        </div>

        <div className="Card-back">
          <div className="Card-title">
            <h3>{title}</h3>
          </div>
          <div className="Card-message">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
