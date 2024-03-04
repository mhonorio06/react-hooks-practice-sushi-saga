import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ fourSushis, eatSushi, getSushi}) {
  const sushisList = fourSushis.filter(sushi => !sushi.eaten)
  .map(sushi => {
     return (
      <Sushi key={sushi.id}
             sushi={sushi} eatSushi={eatSushi}/>
    )
  })
  return (
    <div className="belt">
      {sushisList}
      <MoreButton getSushi={getSushi}/>
    </div>
  );
}

export default SushiContainer;
