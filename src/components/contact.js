import React from "react"

const Contact = () => (
  <div className="secondary__section" id="contact">
    <h2 className="secondary__heading">Get In Touch</h2>
    <div className="form__container">
      <form
        action="https://formspree.io/brittany.isenberg@gmail.com"
        method="POST"
        className="secondary__form"
      >
        <input
          className="secondary__input"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="secondary__input"
          type="email"
          name="_replyto"
          placeholder="Email"
          required
        />
        <textarea
          className="secondary__input"
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        ></textarea>
        <hr className="secondary__form__hr" />
        <input
          type="submit"
          value="Send"
          className="button secondary__form__button"
        />
        <input
          type="hidden"
          name="_next"
          value="https://www.brittanyisenberg.com/"
        />
      </form>
    </div>
  </div>
)

export default Contact
