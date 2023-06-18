import React from "react";

const CardDetails = ({ cardDetailsHeading, cardDetailsDesc, cardDetailsId }) => {
  return (
    <div className='row gap-3' id={cardDetailsId}>
      <h3>{cardDetailsHeading}</h3>
      <p>{cardDetailsDesc}</p>
    </div>
  );
};

export default CardDetails;
