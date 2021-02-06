import React, { useState } from 'react'
import Card from './Card'
import CardData from '../types'

import './CardSet.css'

interface CardSetProps {
  cardData: CardData[]
}

function CardSet(props: CardSetProps) {
  const { cardData } = props

  const [ activeCard, setActiveCard ] = useState<number>(0)
  const hasActiveCard = activeCard > 0

  function handleBackgroundClick() {
    if (hasActiveCard) {
      setActiveCard(0)
    }
  }
  function handleCardClick(id: number) {
    setActiveCard(id)
  }

  const cards = cardData.map((card, index) => {
    const id = index + 1

    return (
      <Card
        id={index + 1}
        onClick={handleCardClick}
        isActive={activeCard === id}
        {...card}
      />
    )
  })

  return (
    <div
      className={`CardSet ${hasActiveCard ? 'has-active-card' : ''}`}
      onClick={handleBackgroundClick}
    >
      {cards}
    </div>
  )
}

export default CardSet
