import React from "react";
import styles from "./style";
import CoffeeCard from "./components/Coffee";

const App = () => {
  return (
    // <div className="bg-primary w-full overflow-hidden">
    <div>
      <CoffeeCard />
    </div>
    // <div>
    //   {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}> */}
    //   <div>
    //     {/* <div className={`${styles.boxWidth}`}> */}
    //   </div>
    // </div>
  )
}

export default App;