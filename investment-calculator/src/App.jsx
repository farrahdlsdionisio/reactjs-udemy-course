import { useState } from "react"
import Header from "./components/Header.jsx"
import Results from "./Results.jsx"
import UserInput from "./components/UserInput.jsx"

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 1000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10
  })

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
      setUserInput(prevInput => {
          return {
              ...prevInput,
              [inputIdentifier]: +newValue //force conversion from string to number
          }
      })
  }
  return (
    <>
    <Header />
    <UserInput onChange={handleChange} userInput={userInput}/>
    {/* Error message goes here */}
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    {/* Results go here */}
    {inputIsValid && <Results userInput={userInput} />}
   </>
  )
}

export default App
