import React, { useEffect, useRef, useState } from 'react'

import './Card.css'
import { CardData } from './CardSet'

interface CardProps extends CardData {
  id: number,
  position: number,
  onClick: (position: number) => void,
  isActive: boolean
}

function Card(props: CardProps) {
  const {
    id,
    position,
    onClick,
    isActive,
    backgroundColor = 'red',
    title = '',
    message = '',
    textColor = 'black'
  } = props

  const [ isPositionFixed, setIsPositionFixed ] = useState(false)
  const [ activeCoords, setActiveCoords ] = useState({ top: 0, left: 0 })
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const newActiveCoords = {
      top: containerRef.current?.offsetTop || 0,
      left: containerRef.current?.offsetLeft || 0
    }
    setActiveCoords(newActiveCoords)
  }, [])

  useEffect(() => {
    if (isActive) {
      setIsPositionFixed(true)
    } else {
      setTimeout(() => setIsPositionFixed(false), 750)
    }
  }, [isActive])

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()

    if (!isPositionFixed) {
      onClick(position)
    }
  }

  const style: React.CSSProperties = {
    backgroundColor,
    order: position,
    ...activeCoords
  }

  return (
    <div>
      <div
        className={`Card ${isActive ? 'active' : ''} ${isPositionFixed ? 'position-fixed' : ''} text-${textColor}`}
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

      <div className={`Card-placeholder ${isActive ? 'hidden' : ''}`}></div>
    </div>
  )
}

export default Card
