import React from "react";

const Card = ({ title1, title2, description }) => {
  return (
    <div className="bg-[#2B2742] flex-1 rounded-3xl p-6 text-bg flex flex-col items-start justify-between">
      <h4 className="text-2xl">
        {title1}
        <br />
        {title2}
      </h4>
      <p className="leading-5">{description}</p>
    </div>
  );
};

export default Card;
