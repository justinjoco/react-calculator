import './App.css';
import BasicCalculator from './calculators/BasicCalculator';
import BasicCalculatorMDAS from './calculators/BasicCalculatorMDAS';
import BasicCalculatorPMDAS from './calculators/BasicCalculatorPMDAS';

/*
Calcualtor
Number display

Multiplication/Division are same priority as addition/subtraction

Number buttons
Operator buttons (+ - * / =)
Clear button

total -> not rendered 
currNumber -> not rendered
display -> rendered

Example input:
32+10-9
Display:33

2*4-5=
Display=3

2+2*5=20

Display currNumber when number button is pressed
Display total when operator button is pressed
*/

function App() {
  return (
    <div className="App">
      <BasicCalculator/>
      <BasicCalculatorMDAS/>
      <BasicCalculatorPMDAS/>
    </div>
  );
}

export default App;
