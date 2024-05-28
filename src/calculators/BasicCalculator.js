import { useState, useRef } from 'react';

function BasicCalculator() {
    const totalRef = useRef(0)
    const currNumberRef = useRef(0)
    const currOperatorRef = useRef("+")
    const [display, setDisplay] = useState("0")
    const [error, setError] = useState("")
  
    function handleNumberClick(e){
      const number = Number(e.target.value)
      let currNumber = currNumberRef.current
  
      currNumber = currNumber * 10 + number
      setDisplay(String(currNumber))
      currNumberRef.current = currNumber
    }
  
    /*
    Step 1
    Curr number = 10
    Total = 0
    operator = "+"
    currOperator = "-"
  
    Should go to
    Total = 10
    currNumber = 0
    operator = "-"
  
    Step 2a
    total = 10
    currNumber = 2
    operator = "-"
    currOperator = "="
  
    Should go to
    Total = 8
    currNumber = 0
    operator = "="
  
    Step 2b
    total = 10
    currNumber = 2
    operator = "-"
    currOperator = "*"
  
    Should go to
    total = 8
    currNumber = 0
    operator = "*"
    currOperator = "="
    */
  
    function handleOperatorClick(e){
      setError("")
      const nextOperator = e.target.value
      let total = totalRef.current
      let currNumber = currNumberRef.current
      let currOperator = currOperatorRef.current
      
      switch (currOperator) {
        case "=":
          break
        case "+":
          total += currNumber
          break
        case "*":
          total *= currNumber
          break
        case "-":
          total -= currNumber
          break
        case "/":
          if (currNumber !== 0){
            total /= currNumber
          } else {
            setError("You attempted to divide by zero. Please use another number")
          }
          break
  
      }
  
      const displayStr = Number.isInteger(total) ? String(total) : String(total.toFixed(2))
      setDisplay(displayStr)
      totalRef.current = total
      currOperatorRef.current = nextOperator
      currNumberRef.current = 0
    }
  
    function handleClearClick(){
      totalRef.current = 0
      currNumberRef.current = 0
      currOperatorRef.current = "+"
      setDisplay("0")
      setError("")
    }
  
    const numberButtons = []
    for (let i = 0 ; i < 10; i ++){
      numberButtons.push(<button key={`button${i}`} value={i} onClick={e => handleNumberClick(e)}>{i}</button>)
    }
    const operators = ["+", "-", "*", "/", "="]
    const operatorButtons = operators.map(operator => 
      <button key={`button${operator}`} value={operator} onClick={e => handleOperatorClick(e)}>{operator}</button>)
  
    const clearButton = <button onClick={() => handleClearClick()}>CLR</button>
    return (
      <div>
        <h1>Basic Calculator</h1>
          <h2>{display}</h2>
          <p>{error}</p>
          {numberButtons}
          <br/>
          {operatorButtons}
          <br/>
          {clearButton}
      </div>
    );
  }
  
  export default BasicCalculator;
  