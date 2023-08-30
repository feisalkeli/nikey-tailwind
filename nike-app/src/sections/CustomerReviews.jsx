import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold text-4xl">
        What Our <span className="text-coral-red">Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ratione
        labore nobis ullam rerum, earum quaerat aspernatur facere perferendis.
        Perspiciatis?
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feddback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
