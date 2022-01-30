import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Input from "./Input"

test("should type term in to input field and reflect in value", () => {
  render(<Input />)
  const input = screen.getByLabelText(/input/i)
  userEvent.type(input, "Giant Dildos")
  expect(input).toHaveValue("Giant Dildos")
})
