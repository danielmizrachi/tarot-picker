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
  const cardElementRef = useRef<HTMLDivElement | null>(null)

  const isReady = activeCoords.left > 0

  useEffect(() => {
    setTimeout(() => {
      const newActiveCoords = {
        top: cardElementRef.current?.offsetTop || 0,
        left: (cardElementRef.current?.offsetLeft || 22) - 22
      }
      setActiveCoords(newActiveCoords)
    }, 1500);
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

    if (!isPositionFixed && isReady) {
      onClick(position)
    }
  }

  const style: React.CSSProperties = {
    backgroundColor,
    ...activeCoords
  }

  return (
    <div className="Card-container">
      <div
        className={`Card ${isActive ? 'active' : ''} ${isReady ? 'ready' : ''} ${isPositionFixed ? 'position-fixed' : ''}`}
        style={style}
        ref={cardElementRef}
        onClick={handleClick}
      >
        <div className="Card-inner">
          <div className="Card-front">
            <p className="Card-id">{id}</p>
          </div>

          <div className={`Card-back text-${textColor}`}>
            <div className="Card-title">
              <h3>{title}</h3>
            </div>
            <div className="Card-message">
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Card-placeholder"></div>
    </div>
  )
}

export default Card
