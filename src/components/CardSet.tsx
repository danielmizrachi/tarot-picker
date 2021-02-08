import React, { useState } from 'react'
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

  const [ activeCard, setActiveCard ] = useState<number>(0)
  const hasActiveCard = activeCard > 0

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
        className={`CardSet-backdrop ${hasActiveCard ? 'active' : ''}`}
        onClick={handleBackdropClick}
      />
    </>
  )
}

export default CardSet
