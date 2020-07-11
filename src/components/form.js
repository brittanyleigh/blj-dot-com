import React from "react"
import Button from "./button"
import { FaLaughBeam } from "react-icons/fa"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return status === "SUCCESS" ? (
      <p className="text-center">
        Thanks so much for reaching out, I'll be in touch shortly!
        <FaLaughBeam className="text-6xl m-auto my-3 text-brand fill-current" />
      </p>
    ) : (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mnqgoqwj"
        method="POST"
        className="flex flex-wrap py-3"
      >
        {status === "ERROR" && (
          <p>Oops! There was an error. Please try again.</p>
        )}
        <div className="w-full sm:w-1/2 py-3 sm:pr-3">
          <label>Name:</label>
          <br />
          <input type="name" name="name" className="border w-full p-1" />
        </div>
        <div className="w-full sm:w-1/2 py-3 sm:pl-3">
          <label>Email:</label>
          <br />
          <input type="email" name="email" className="border w-full p-1" />
        </div>

        <div className="w-full py-3">
          <label>Message:</label>
          <textarea
            name="message"
            rows="6"
            className="border w-full py-3 p-1"
          />
        </div>
        <div className="ml-auto">
          <Button label="Submit" />
        </div>
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    const successResponse = 200
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return
      }
      if (xhr.status === successResponse) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
