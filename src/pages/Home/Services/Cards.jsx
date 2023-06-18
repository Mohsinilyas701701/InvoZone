import React from "react";
import "./Services.css";

const Cards = ({ cardText, cardImage, cardId, onClickCard }) => {
  const handleClick = () => {
    onClickCard(cardId);
  };

  return (
    <div
      className='service_left_card d-flex gap-3 flex-column p-4 rounded-5'
      onClick={handleClick}
      id={cardId}
    >
      <div className='text-center service_left_card_img'>
        <img src={cardImage} alt='Card' />
      </div>
      <p className='text-center'>{cardText}</p>
    </div>
  );
};

export default Cards;
