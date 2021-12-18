import React, { useState } from 'react';
import './OfferConfig.scss';
import { IOffer } from '../../../models/offer/IOffer';
import { OfferConfigRadioButtons } from '../offer-config-radio-buttons/OfferConfigRadioButtons';
import { OfferConfigMeals } from "../offer-config-meals/OfferConfigMeals";

export const OfferConfig: React.FC = () => {
  const [offer, setOffer] = useState<IOffer>({ number_of_days: 21 });
  const [currentWeek, setCurrentWeek] = useState<number>(-1);
  const [currentDay, setCurrentDay] = useState<number>(-1);
  const weekRadioButtonsTexts = initWeekRadioButtonsTexts();
  const dayRadioButtonsTexts = initDayRadioButtonsTexts();


  function initWeekRadioButtonsTexts() {
    const weeksCount = (offer.number_of_days ?? 0) / 7;
    const weekRadioButtonsTexts = [];

    for(let i = 1; i <= weeksCount; ++i) {
      weekRadioButtonsTexts.push(`Week ${i}`);
    }
    return weekRadioButtonsTexts;
  }

  function initDayRadioButtonsTexts() {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }


  return (
    <div id="offer-config">
      <h1 className="text-black text-large">Configure Standard Offer</h1>
      <br />
    
      <h2>Week</h2>
      <OfferConfigRadioButtons 
        options={ weekRadioButtonsTexts }
        handleClick={ (i: number) => setCurrentWeek(i) }
      />
      <br />

      <h2>Day</h2>
      <OfferConfigRadioButtons
        options={ dayRadioButtonsTexts }
        handleClick={ (i: number) => setCurrentDay(i) }
      />
      <br /><br />

      <OfferConfigMeals />
    </div>
  )
}

