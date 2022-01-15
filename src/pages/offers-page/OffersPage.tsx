import React, {useEffect, useState} from "react";
import {OfferCard} from "./OfferCard";
import './OffersPage.scss';
import {Popup} from "../../components/base/popup/Popup";
import axios from "axios";

const CREATE_OFFERS_URL = "http://localhost:7768/api/Offer";
const GET_OFFERS_URL = "http://localhost:7768/api/Offer/Kitchen/";

const createOfferFn: (offer: OfferInterface) => Promise<any> = (offer) => {
  return axios.post(CREATE_OFFERS_URL ,offer, config)
      .then(result => {
        return Promise.resolve(result.data)
      })
      .catch(err => {
        return Promise.reject(err)
      })
}

const getOffersFn: () => Promise<any> = () => {
  return axios.get(`${GET_OFFERS_URL}${localStorage.getItem('kitchenId')}`, config)
      .then(result => {
        return Promise.resolve(result.data)
      })
      .catch(err => {
        return Promise.reject(err)
      })
}

export const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }
}

interface OfferInterface{
  id?: string,
  title: string,
  description: string,
  numberOfDays: number,
  dailyPrice: number
}

const initialState: OfferInterface = {
  id: '',
  title: '',
  description: '',
  numberOfDays: 0,
  dailyPrice: 0
}
/*

    const result = [] as any;
    for (var i = 0; i < offers.length; i += 2) {
      result.push(offers.slice(i, i + 2));
    }
    setParsedOffers(result);


* */

export const OffersPage: React.FC = () => {
  const [state, setState] = useState<OfferInterface>(initialState);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [parsedOffers, setParsedOffers] = useState<any[]>([])
  const {id, title, description, numberOfDays, dailyPrice} = state;

  useEffect(() => {
    handleGetOffers()
  }, []);

  async function handleGetOffers() {
    const offers = await getOffersFn();
    let result = [] as any;
    for (var i = 0; i < offers.length; i += 2) {
      result.push(offers.slice(i, i + 2));
    }
    setParsedOffers(result);
  }

  function handleCreateOffer() {
    setIsPopupOpen(false)
    let canceled = false;
    createOffer();
    return () => {
      canceled = true;
    }
    async function createOffer(){
      if (canceled)
        return;
      try{
        await createOfferFn({title, description, numberOfDays, dailyPrice});
        await handleGetOffers();
      } catch (error: any) {
        alert(JSON.stringify(error.response.data["message"]))
      }
    }
  }


  return (
    <div className={'offers-page'}>
      <section className='flex-row-center-y'>
        <h1 className='text-black text-large'>Offers</h1>
        <div className='flex-pull-right'>
          <button className="button-green button-small" onClick={ () => setIsPopupOpen(true) }>+ New Offer</button>
        </div>
      </section>

      {
        parsedOffers.map(item => {
          return (
            <div className={'card-container'}>
              {item[0] && <OfferCard id={item[0].id} title={item[0].title} description={item[0].description} timePeriod={item[0].numberOfDays} price={item[0].dailyPrice}/>}
              {item[1] && <OfferCard id={item[1].id} title={item[1].title} description={item[1].description} timePeriod={item[1].numberOfDays} price={item[1].dailyPrice}/>}
            </div>
          )
        })
      }

      <Popup
          title='Create a New Offer'
          description='Configure the offer below.'
          isOpen={ isPopupOpen }
          onCancel={ () => setIsPopupOpen(false) }
          onFinish={ () => handleCreateOffer() }
      >
        <form>
          <ul className="ul">
            <li className="input">
              <label htmlFor="offer-title">Title</label>
              <input type="text" name="offer-title" value={title} onChange={event => setState({...state, title: event.target.value})}/>
            </li>

            <li className="input">
              <label htmlFor="offer-description">Description</label>
              <textarea name="offer-description" value={description} onChange={event => setState({...state, description: event.target.value})}/>
            </li>

            <li className="input">
              <label htmlFor="offer-number-of-days">Number of days</label>
              <input type="number" name="offer-number-of-days" value={numberOfDays} onChange={event => setState({...state, numberOfDays: parseInt(event.target.value)})}/>
            </li>

            <li className="input">
              <label htmlFor="offer-daily-price">Daily price</label>
              <input type="number" name="offer-daily-price" value={dailyPrice} onChange={event => setState({...state, dailyPrice: parseInt(event.target.value)})}/>
            </li>
          </ul>
        </form>
      </Popup>

    </div>
  )
}