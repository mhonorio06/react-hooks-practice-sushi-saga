import React, { useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [fourSushis, setFourSushis] = useState([])
  const [budget, setBudget] = useState(100)
  
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const allSushis = data.map(s => {
      return {...s, eaten : false}
      })
      
      const four = allSushis.splice(0,4)
      setSushis(allSushis)
      setFourSushis(four)
    })
  }, [])
  function getSushi() {
    console.log("get sushi")
    const allSushis = sushis
    const four = allSushis.splice(0,4)
      setSushis(allSushis)
      setFourSushis(four)
  }
  function eatSushi(event) {
    const newSushi = fourSushis.map(sushi => {
      return sushi.id == event.target.id ? {...sushi, eaten : true} : sushi;
    })
    console.log(newSushi)
    const newBudget = budget - parseInt(event.target.dataset.price);
    setBudget(newBudget)
    setFourSushis(newSushi)
  }
  return (
    <div className="app">
      <SushiContainer fourSushis={fourSushis} eatSushi={eatSushi} getSushi={getSushi}/>
      <Table fourSushis={fourSushis} budget={budget}/>
    </div>
  );
}

export default App;
