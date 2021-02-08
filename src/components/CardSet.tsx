import React, { useEffect, useState } from 'react'
import Card from './Card'

import './CardSet.css'

export type CardData = {
  id: number,
  backgroundColor?: string,
  title?: string,
  message?: string,
  textColor?: 'black' | 'white'
}

interface CardSetProps {
  cardData: CardData[]
}

function CardSet(props: CardSetProps) {
  const { cardData } = props

  const [ isBackdropZIndex100, setIsBackdropZIndex100 ] = useState(false)
  const [ activeCard, setActiveCard ] = useState(0)
  const hasActiveCard = activeCard > 0

  useEffect(() => {
    if (hasActiveCard) {
      setIsBackdropZIndex100(true)
    } else {
      setTimeout(() => setIsBackdropZIndex100(false), 750)
    }
  })

  function handleBackdropClick() {
    if (hasActiveCard) {
      setActiveCard(0)
    }
  }
  function handleCardClick(id: number) {
    setActiveCard(id)
  }

  const cards = cardData.map((card, index) => {
    const position = index + 1

    return (
      <Card
        onClick={handleCardClick}
        isActive={activeCard === position}
        position={position}
        {...card}
        key={index}
      />
    )
  })

  return (
    <>
      <div className="CardSet">
        {cards}
      </div>

      <div
        className={`CardSet-backdrop ${hasActiveCard ? 'active' : ''} ${isBackdropZIndex100 ? 'z-index-100' : ''}`}
        onClick={handleBackdropClick}
      />
    </>
  )
}

export default CardSet
