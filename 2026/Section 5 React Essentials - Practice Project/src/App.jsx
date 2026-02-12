import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultsTable from "./components/ResultsTable";

function App() {
  return (
    <>
      <Header/>
      <InputForm> </InputForm>
      <ResultsTable entries={[]}></ResultsTable>
    </>
  )
}

export default App
