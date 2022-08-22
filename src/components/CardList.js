import React from 'react'
import Card from './Card'
import data from "./data"

function CardList() {
    const card = data.map(data => {
        return <Card 
            key={data.id} 
            item = {data}
            />
    })
    return (
        <div className='card-list'>
            {card}
        </div>
    )
    }

export default CardList