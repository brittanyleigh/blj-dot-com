import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Input from "./input"
import Button from "./button"
import { FaGlassCheers } from "react-icons/fa"

const Newsletter = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await addToMailchimp(email, { name })
    if (response.result === "success") {
      setSuccess(true)
      setError(false)
    } else {
      setError(true)
      setSuccess(false)
    }
    setMessage(response.msg)
  }

  const inputs = (
    <div className="flex items-center justify-center flex-wrap sm:flex-no-wrap">
      <Input
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        required={true}
      />
      <Input
        type="text"
        name="fname"
        label="Name"
        value={name}
        onChange={event => setName(event.target.value)}
        required={true}
      />
      <Button
        label={
          <React.Fragment>
            Hurray! <FaGlassCheers className="text-xl" />
          </React.Fragment>
        }
        color="light"
        type="submit"
      />
    </div>
  )

  return (
    <div className="texture-bg flex justify-center items-center border-t border-b p-12">
      <form className="container m-auto text-center" onSubmit={handleSubmit}>
        <p className="text-5xl white-oleander">
          Sign up to get 10% off your first order!
        </p>
        {!success && inputs}
        {(success || error) && (
          <p className="p-2">
            {message} {error && "Try again."}
          </p>
        )}
      </form>
    </div>
  )
}

export default Newsletter
