import { useState, useRef } from 'react';

function BasicCalculatorPMDAS() {
  const expressionRef = useRef("")
  const [display, setDisplay] = useState("0")
  const [error, setError] = useState("")

  function handleExpressionButton(e){
    const character = e.target.value
    let expression = expressionRef.current
    
    expression += character
    setDisplay(expression)
    expressionRef.current = expression
  }

  function handleEqualsButton(){
    const expression = expressionRef.current
    const value = evaluateExpression(expression)
    setDisplay(value)
  }

  function evaluateExpression(expression){

  }
  

  function handleClearClick(){
    expressionRef.current = ""
    setDisplay("0")
    setError("")
  }

  const numberButtons = []
  for (let i = 0 ; i < 10; i ++){
    numberButtons.push(<button key={`button${i}`} value={i} onClick={e => handleExpressionButton(e)}>{i}</button>)
  }
  const operators = ["+", "-", "*", "/", "(", ")"]
  const operatorButtons = operators.map(operator => <button key={`button${operator}`} value={operator} onClick={e => handleExpressionButton(e)}>{operator}</button>)
  
  const equalsButton = <button onClick={() => handleEqualsButton()}>=</button>

  const clearButton = <button onClick={() => handleClearClick()}>CLR</button>
  return (
    <div>
      <h1>Basic Calculator with MDAS</h1>
        <h2>{display}</h2>
        <p>{error}</p>
        {numberButtons}
        <br/>
        {operatorButtons}
        <br/>
        {equalsButton}
        {clearButton}
    </div>
  );
  }
  
  export default BasicCalculatorPMDAS;
  