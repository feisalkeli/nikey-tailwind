import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:pt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-palanquin font-bold">
          {" "}
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam,
          culpa vitae temporibus eaque, hic tempora qui sequi ad cum maiores
          distinctio ut a ducimus quae. Voluptatem, aspernatur. Tempore, rem!
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:g-6 gap-14">
        {products.map((product, index) => (
          <PopularProductCard key={product.index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
