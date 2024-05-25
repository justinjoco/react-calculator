import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function evaluateExpression(total, operator, number){
  let result = 0
  switch (operator){
    case "+":
        result = total + number
        break
      case "-":
        result = total - number
        break
      case "*":
        result = total * number
        break
      case "/":
        result = total / number
        break
  }
  return result
}
// Clear display when a new operator is pressed and a new button is pressed
function App() {
  const [total, setTotal] = useState(0)
  const [display, setDisplay] = useState("")
  const [operator, setOperator] = useState("")

  function handleOperatorButton(event){
    event.preventDefault()
    setOperator(event.target.value)
   
    if (event.target.value === "="){
      let newTotal = evaluateExpression(total, operator, Number(display))
      setTotal(newTotal)
      setDisplay(newTotal)
    } else {
      setTotal(Number(display))
      setDisplay("")
    }
  }
  
  function handleNumberButton(event){
    event.preventDefault()
    setDisplay(`${display}${event.target.value}`)
  }

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const numberButtons = numbers.map((number)=> {
    return <button id={`button${number}`} value={number} onClick={(e) => handleNumberButton(e)}>{number}</button>
  })
  const operators = ["+", "-", "/", "*", "="]
  const operatorButtons = operators.map((operator)=> {
    return <button id={`button${operator}`} value={operator}  onClick={(e) => handleOperatorButton(e)}>{operator}</button>
  })
  return (
    <div className="App">
      <header className="App-header">
        <textarea value={display}/>
        {numberButtons}
        {operatorButtons}
      </header>
    </div>
  );
}

export default App;
