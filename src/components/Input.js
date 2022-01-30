import { useState } from "react"

const Input = () => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        aria-label="input"
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default Input
