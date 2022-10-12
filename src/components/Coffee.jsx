import React from "react";
import styles from "../style";
import coffeeInfo from "../constants";

const CoffeeCard = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {coffeeInfo.map((coffee) => (
      <div key={coffee.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <img src={coffee.img} alt="Coffee images"/>
        <h1 className="font-poppins font-bold">{coffee.coffeeName}</h1>
        <h3 className="font-poppins font-semibold">{coffee.producer}</h3>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">Weight: {coffee.weight}</h4>
        <h4 className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-white">Quantity: {coffee.qt}</h4>
      </div>
    ))}
  </section>
);

export default CoffeeCard;