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
    <div className="CardSet">
      {cards}
    </div>
  )
}

export default CardSet
