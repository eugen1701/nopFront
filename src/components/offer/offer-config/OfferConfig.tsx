import React, {useEffect, useState} from 'react';
import './OfferConfig.scss';
import { IOffer } from '../../../models/offer/IOffer';
import { OfferConfigRadioButtons } from '../offer-config-radio-buttons/OfferConfigRadioButtons';
import { OfferConfigMeals } from "../offer-config-meals/OfferConfigMeals";
import axios from "axios";
import {IMeal} from "../../../models/meal/IMeal";

export const OfferConfig: React.FC = () => {
    const [offer, setOffer] = useState<any>({numberOfDays: 7,
    dayIds: []});
    const [currentWeek, setCurrentWeek] = useState<number>(1);
    const [currentDay, setCurrentDay] = useState<number>(1);
    const weekRadioButtonsTexts = initWeekRadioButtonsTexts();
    const dayRadioButtonsTexts = initDayRadioButtonsTexts();

    async function getOffer() {
        let offerID = document.URL.slice(document.URL.lastIndexOf("/") + 1);
        console.log("The offer id is ", offerID);
        const url = `http://localhost:7768/api/Offer/${offerID}`;
        const token = localStorage.getItem("token");
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        }
        try{
            const response = await axios.get(url, config);
            console.log("RESPONSE OFFER: ", response.data);
            setOffer(response.data);
            return response.data;
        } catch (error: any) {
            console.log(error);
        }
        return {};
    }

    const [meals, setMeals] = useState<Array<IMeal>>([])
    const getMeals = async () => {
        const offer1 = await getOffer();
        const indexDay = (currentWeek-1) * 7 + currentDay-1;
        console.log("current day"+ currentDay);
        const token = localStorage.getItem("token");
        console.log("offer: ", offer1);
        console.log("indexDay: ", indexDay);
        const url =  `http://localhost:7768/api/Meal/Day/${offer1.dayIds[indexDay]}`;

        const config = {
            headers: {Authorization: `Bearer ${token}`}
        };
        try{
            const response = await axios.get(url, config);
            console.log("RESPONSE day: ", indexDay, " response: ",  response);
            setMeals(response.data);
        } catch (error: any) {
            console.log(error);
        }
    }
    useEffect(() => {
        console.log("hello useeffect");
        getMeals();
    }, []);

  function initWeekRadioButtonsTexts() {
    const weeksCount = (offer.numberOfDays ?? 0) / 7;
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
        handleClick={ (i: number) => {
            setCurrentWeek(i);
            getMeals().then();
        } }
      />
      <br />

      <h2>Day</h2>
      <OfferConfigRadioButtons
        options={ dayRadioButtonsTexts }
        handleClick={ (i: number) => {setCurrentDay(i); getMeals().then();} }

      />
      <br /><br />

      <OfferConfigMeals currentDay={currentDay} currentWeek={currentWeek} meals={meals}/>
    </div>
  )
}
