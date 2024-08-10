import { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from "../utils/helpers";

function ContactPage() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    alert(`${userName}, your message was received`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="container text-center">
      <h1>Contact Me:</h1>
      <form className="" onSubmit={handleFormSubmit}>
        <div className="row p-2">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        <div className="row p-2">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
        </div>
        <div className="row p-2">
          <textarea
            rows="6"
            maxLength="200"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Leave message here..."
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
