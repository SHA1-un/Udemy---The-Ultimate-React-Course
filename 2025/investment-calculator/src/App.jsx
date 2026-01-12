import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { InputForm } from "./components/InputForm.jsx";
import { Results } from "./components/Results.jsx";
import { calculateInvestmentResults } from "./util/investment.js";

const results = [{
  investment_value: "test",
  interest_year: "test",
  total_interest: "test",
  investment_capital: "test",
}]

function App() {
  const [results, setResults] = useState([{
    investment_value: "test",
    interest_year: "test",
    total_interest: "test",
    investment_capital: "test",
  }]);

  function updateCalculation() {
    
  }


  return (
    <>
      <Header />
      <InputForm />
      <Results dataArray={results} />
    </>
  )
}

export default App
