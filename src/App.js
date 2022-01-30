import { useState } from "react"
import "./index.css"

const App = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [buttonColor, setButtonColor] = useState("blue")
  const newButtonColor = buttonColor === "blue" ? "red" : "blue"

  const handleClick = () => {
    setButtonColor(newButtonColor)
  }

  const handleIsChecked = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="container">
      <button
        className={buttonColor}
        onClick={() => handleClick()}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="checkbox"
          onChange={handleIsChecked}
        />
        <label htmlFor="checkbox">Disable button</label>
      </div>
    </div>
  )
}

export default App
