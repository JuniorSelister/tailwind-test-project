import React from "react";
import styles from "../style";
import coffeeInfo from "../constants";

const CoffeeCard = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {coffeeInfo.map((coffee) => (
      <div key={coffee.id} className="{`flex-1 flex justify-start items-center flex-row m-3`">
        <h2 className="font-poppins font-bold">{coffee.coffee_name}</h2>
        <h3 className="font-poppins font-semibold">{coffee.producer}</h3>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89] xs:leading-[53.16] leading-[43.16] text-white">{coffee.weight}</h4>
        <h4 className="font-poppins font-normal xs:text-[20.45px] text-[15.45] xs:leading-[26.58] leading-[21.58] text-white">{coffee.qt}</h4>
      </div>
    ))};
  </section>
);

export default CoffeeCard;