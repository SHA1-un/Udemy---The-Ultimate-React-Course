import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultsTable from "./components/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [calculatorState, setCalculatorState] = useState({
    userInput: {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    },
    resultTable: []
  });

  function handleUserInput(field, value) {
    setCalculatorState(oldValue => {
      const newCalculatorState = { userInput: {...oldValue.userInput},  resultTable: [...oldValue.resultTable]};
      newCalculatorState.userInput[field] = value;

      const annualData = calculateInvestmentResults(newCalculatorState.userInput);
      newCalculatorState.resultTable = [...annualData];

      return newCalculatorState
    })
  }

  console.log('new calculatorState')
  console.log(calculatorState)

  return (
    <>
      <Header />
      <InputForm handleUserInput={handleUserInput}> </InputForm>
      <ResultsTable rows={calculatorState.resultTable}></ResultsTable>
    </>
  )
}

export default App
