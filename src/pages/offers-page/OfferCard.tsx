import React from "react";
import './OfferCard.scss';

export type OfferProps = {
  title?: string,
  description?: string,
  timePeriod?: number,
  price?: number
}

export const OfferCard: React.FC<OfferProps> = ({title, description, timePeriod, price}) => {
  return(
    <div className={'card'}>
      <div className={'info-panel'}>
        <div className={'info-panel-title'}> {title} </div>
        <div className={'info-panel-description'}> {description} </div>
        <button className={'edit-offer-button'}>Edit</button>
      </div>

      <div className={'price-panel'}>
        <div className={'price-panel-time-period'}>
          <div className={'text'}> {timePeriod} </div>
          <div className={'subtext'}> weeks </div>
        </div>
        <div className={'price-panel-price'}>
          <div className={'text'}> {price} $</div>
          <div className={'subtext'}> per day </div>
        </div>
      </div>
    </div>
  )
}