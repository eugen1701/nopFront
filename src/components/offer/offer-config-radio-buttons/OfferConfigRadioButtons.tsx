import React, { useState } from 'react';
import "./OfferConfigRadioButtons.scss";

interface OfferConfigRadioButtonsProps {
  options: Array<string>,
  handleClick: (i: number) => void
}


export const OfferConfigRadioButtons: React.FC<OfferConfigRadioButtonsProps> = (props) => {
  const [selectedRadioButtonIndex, setSelectedRadioButtonIndex] = useState(0);
  
  function handleRadioButtionClick(index: number) {
    setSelectedRadioButtonIndex(index);
    props.handleClick(index);
  }

  function renderOptions() {
    return props.options.map((value, index) =>
      <li 
        key={index} 
        className={`
          offer-config-radio-buttons__radio-button 
          ${ index == selectedRadioButtonIndex ? "button-green" : "button-green-bordered" }
        `}
        onClick={ () => handleRadioButtionClick(index) }
      >
        {value}
      </li>
    )
  }


  return (
    <ul className="offer-config-radio-buttons ul flex-row">
      { renderOptions() }
    </ul>
  )
}