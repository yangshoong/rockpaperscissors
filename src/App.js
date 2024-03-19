import { useState } from "react";
import './App.css';
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://letstalkscience.ca/sites/default/files/2020-02/balanced-stones-on-a-pebble-beach.jpg"

  },
  scissors: {
    name: "Scissors",
    img: "https://www.sallybeauty.co.uk/dw/image/v2/BBTX_PRD/on/demandware.static/-/Sites-sally-master-catalog/default/dw5f0fe95b/images/original/815144_1.jpg?sw=1000&sh=1000"
  },
  paper: {
    name: "Paper",
    img: "https://5.imimg.com/data5/HC/KF/HZ/SELLER-4619430/white-art-paper.jpg"
  }
}


function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  }


  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        {/* <Box title="Computer" /> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>

    </div>
  );
}

export default App;
