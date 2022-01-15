import React from "react";
import {Link} from "react-router-dom";
import './OfferCard.scss';

export type OfferProps = {
  id?: string,
  title?: string,
  description?: string,
  timePeriod?: number,
  price?: number
}

export const OfferCard: React.FC<OfferProps> = ({id, title, description, timePeriod, price}) => {
  const EDIT_OFFER_URL = `/offers/${id}`

  return(
    <div className={'card'}>
      <div className={'info-panel'}>
        <div className={'info-panel-title'}> {title} </div>
        <div className={'info-panel-description'}> {description} </div>
        <Link to={EDIT_OFFER_URL} className={'edit-offer-link'}>Edit</Link>
      </div>

      <div className={'price-panel'}>
        <div className={'price-panel-time-period'}>
          <div className={'text'}> {timePeriod} </div>
          <div className={'subtext'}> days </div>
        </div>
        <div className={'price-panel-price'}>
          <div className={'text'}> {price} $</div>
          <div className={'subtext'}> per day </div>
        </div>
      </div>
    </div>
  )
}