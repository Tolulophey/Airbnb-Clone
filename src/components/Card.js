// import React from 'react'
import star from '../images/star.png'
// import ellipse from '../images/ellipse.png'


function Card(props) {
  let badgeText;
  if(props.item.openSpots === 0){
    badgeText = 'SOLD OUT';
  } else if(props.item.openSpots > 0 && props.item.location === 'Online'){
    badgeText = 'ONLINE';
  } 
  return (
    <div className='card'>
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={props.item.image} alt="card" className='card--image'/>
        <div className='card-details'>
        <div  className='card--stat'>
            <img src={star} alt="star" className="card--star" />
            <span> {props.item.stats.rating} </span>
            <span className="gray">({props.item.stats.reviewCount}) • </span>
            <span className="gray">{props.item.location}</span>
        </div>
        <p className='card--title'>{props.item.title}</p>
        <p><span className='bold'>From ${props.item.price}</span>/ person</p>
        </div>
    </div>
  )
}

export default Card