import React from "react";

const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      {imgUrl && (
        <img
          src={imgUrl}
          alt="img"
          className="rounded-full object-cover w-[120px] h-[120px]"
        />
      )}
      <h3 className=" max-w-sm font-bold text-coral-red text-2xl font-montserrat">
        lorem
      </h3>
      <p className="mt-6 max-w-sm text-center info-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
        voluptates vitae perferendis saepe quaerat, obcaecati beatae ratione at
        assumenda voluptas!{feedback}
      </p>
    </div>
  );
};

export default ReviewCard;
