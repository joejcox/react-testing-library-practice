import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

test("render button that has initial text 'change to red' and initial class of 'blue'", () => {
  render(<App />)
  const button = screen.getByRole("button", { name: /change to red/i })
  expect(button).toHaveClass("blue")
})

test("expect button click to change text to 'Change to blue' and class to 'red'", async () => {
  render(<App />)
  const button = screen.getByRole("button", { name: /change to red/i })
  userEvent.click(button)

  expect(button).not.toHaveClass("blue")
  expect(button).toHaveTextContent(/change to blue/i)
  expect(button).toHaveClass("red")
})

test("expect button to be enabled initially", () => {
  render(<App />)
  const button = screen.getByRole("button", { name: /change to red/i })
  expect(button).toBeEnabled()
})

test("expect checkbox to be default not checked", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked()
})

test("expect button to be disabled when checkbox is checked", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox")
  const button = screen.getByRole("button", { name: /change to red/i })

  // check the box and set button to disabled
  userEvent.click(checkbox)

  expect(checkbox).toBeChecked()
  expect(button).toBeDisabled()
})
