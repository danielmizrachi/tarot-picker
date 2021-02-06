import React, { useState, CSSProperties } from 'react'

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

  const style: CSSProperties = {
    backgroundColor,
    width: isActive ? '400px' : '120px',
    height: isActive ? '600px' : '180px',
    marginTop: isActive ? '10vh' : 0,
    zIndex: isActive ? 1000 : 200
  }

  return (
    <div
      className="Card"
      style={style}
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
