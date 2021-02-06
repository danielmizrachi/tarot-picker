import React, { useState, CSSProperties } from 'react'

import './Card.css'

interface CardProps {
  id: number,
  backgroundColor: string,
  title?: string,
  message?: string
}

function Card(props: CardProps) {
  const { id, backgroundColor, title, message } = props

  const [ isFlipped, setIsFlipped ] = useState(false)

  function handleClick() {
    setIsFlipped(!isFlipped)
  }

  const style: CSSProperties = {
    backgroundColor,
    zIndex: isFlipped ? 1000 : 'auto',
    width: isFlipped ? '400px' : '120px',
    height: isFlipped ? '600px' : '180px'
  }

  return (
    <div
      className="Card"
      style={style}
      onClick={handleClick}
    >
      {isFlipped ?
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
