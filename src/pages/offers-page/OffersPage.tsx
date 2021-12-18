import React, {useEffect, useState} from "react";
import {OfferCard} from "./OfferCard";
import './OffersPage.scss';

const offerList=[
  {
    title: "Standard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
    timePeriod: 2,
    price: 10
  },
  {
    title: "Low Calories",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
    timePeriod: 3,
    price: 15
  },
  {
    title: "Premium",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
    timePeriod: 2,
    price: 22
  },
  {
    title: "Elite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
    timePeriod: 2,
    price: 17
  },
  {
    title: "Vegan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
    timePeriod: 4,
    price: 20
  },
]

export const OffersPage: React.FC = () => {
  const [offers, setOffers] = useState(offerList);
  const [parsedOffers, setParsedOffers] = useState<any[]>([])

  useEffect(() => {
    const result = [] as any;
    for (var i = 0; i < offers.length; i += 2) {
      result.push(offers.slice(i, i + 2));
    }
    setParsedOffers(result);
  }, []);

  console.log(parsedOffers);


  return (
    <div className={'offers-page'}>
      {
        parsedOffers.map(item => {
          console.log(item)
          return (
            <div className={'card-container'}>
              {item[0] && <OfferCard title={item[0].title} description={item[0].description} timePeriod={item[0].timePeriod} price={item[0].price}/>}
              {item[1] && <OfferCard title={item[1].title} description={item[1].description} timePeriod={item[1].timePeriod} price={item[1].price}/>}
            </div>
          )
        })
      }
    </div>
  )
}