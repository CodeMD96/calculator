import './App.css';
import { useState} from "react";
import { evaluate } from "mathjs"
import CalcButtons from "./components/CalcButtons"

//look into grid for the buttons

function App() {
  const [sum, setSum] = useState([0])
  let calcButtons = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","=","AC"]

  const buttonHandler = (val) => {
      if (val === "AC") {
        setSum([0])
      } else if (val === "=") {
        let joinedSum = sum.join("")
        let newSum = evaluate(joinedSum)
        setSum([newSum])
      } else {
        let storedSum = [...sum, val]
        if (storedSum[0] === 0) {
          storedSum.shift()
        }
        setSum(storedSum)
      }
  }

  return(
    <div className="App">
      <div className="calculator">
        <h1>Calc</h1>
        <p className="display" >{sum}</p>
        <div className="calcWrapper">
          <CalcButtons buttons={calcButtons} buttonHandler={buttonHandler} />
        </div>
      </div>
    </div>
);
}

export default App;
