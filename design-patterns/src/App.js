import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
import { useState } from "react";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={goToNext({ name: 'John Doe' })}>Next</button>
  </>)
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={goToNext({ age: 100 })}>Next</button>
  </>)
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={goToNext({ hairColor: 'brown' })}>Next</button>
  </>)

function App() {
  const [onboardingData, setonboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setonboardingData({ ...onboardingData, ...stepData })
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <ControlledOnboardingFlow 
      currentIndex={currentIndex}
      onNext={onNext}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </ControlledOnboardingFlow>
  )
}

export default App;