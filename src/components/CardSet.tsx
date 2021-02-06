import React from 'react'

import './CardSet.css'

interface CardSetProps {
  children: React.ReactNode
}

function CardSet(props: CardSetProps) {
  const { children } = props

  return (
    <div className="CardSet">
      {children}
    </div>
  )
}

export default CardSet
