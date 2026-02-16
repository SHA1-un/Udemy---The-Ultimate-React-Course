import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    }
  );

  function handleUserInput(field, value) {
    setUserInput(oldValue => {
      const newUserInput = {...oldValue};
      newUserInput[field] = value;

      return newUserInput
    })
  }


  return (
    <body>
      <Header />
      <InputForm handleUserInput={handleUserInput}> </InputForm>
      {/* <ResultsTable entries={[]}></ResultsTable> */}
    </body>
  )
}

export default App
