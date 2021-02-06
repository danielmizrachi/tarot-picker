import React, { useState, CSSProperties } from 'react'

import './Card.css'

interface CardProps {
  id: number,
  backgroundColor: string,
  title?: string,
  message?: string,
  onClick: (id: number) => void
}

function Card(props: CardProps) {
  const { id, backgroundColor, title, message } = props

  const [ isFlipped, setIsFlipped ] = useState(false)

  function handleClick() {
    setIsFlipped(!isFlipped)
  }

  const style: CSSProperties = {
    backgroundColor,
    width: isFlipped ? '400px' : '120px',
    height: isFlipped ? '600px' : '180px',
    marginTop: isFlipped ? '10vh' : 0,
    zIndex: isFlipped ? 1000 : 200
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
