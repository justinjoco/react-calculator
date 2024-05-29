import { useState, useRef } from 'react';

function BasicCalculatorMDAS() {
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
      try {
        const value = String(evaluateExpression(expression))
        expressionRef.current = value
        setDisplay(value)
      } catch(e){
        setError("An error has occurred while parsing. Please clear the expression and try again.")
      }
    }

    function evaluateExpression(expression){
      let currNumber = 0
      let currOperator = "+"
      const stack = []

      for (let i = 0 ; i <= expression.length; i ++){
        let char = expression[i]
        if (isNaN(char)){
          switch (currOperator){
            case "-":
              stack.push(-currNumber)
              break
            case "+":
            case null:
              stack.push(currNumber)
              break
            case "*":
              stack.push(stack.pop() * currNumber)
              break
            case "/":
              if (currNumber === 0) {
                setError("Cannot evaluate expression because there is a division by zero")
              } else {
                stack.push(stack.pop() / currNumber)
              }
          }
          currOperator = char
          currNumber = 0
        } else {
          const number = Number(char)
          currNumber = currNumber * 10 + number
        }
      }

      let total = 0
      while (stack.length > 0){
        total += stack.pop()
      }
      return total
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
    const operators = ["+", "-", "*", "/"]
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
  
  export default BasicCalculatorMDAS;
  