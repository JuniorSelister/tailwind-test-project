import React from "react";
import styles from "./style";
import CoffeeCard from "./components/Coffee";

const App = () => {
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CoffeeCard />
      </div>
    </div>
  </div>
}

export default App;