import React, { useState } from 'react';
import './SignUpPage.css';


const SignUp = () => {
    // State variables for the form fields
    /*I used useState to create state variables and functions to update them. */
    const [nationality, setNationality] = useState('');
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [strongPassword, setStrongPassword] = useState(false);
    const [greeting, setGreeting] = useState('');

    // Handling changes when user writes in the email field, and checking it against the Regex
    /*Classmate suggested using Regex for email and password confirmation. This was my first time using Regex and I found it quite difficult, but
    educational. LLM helped to consider more edge cases and to simplify the Regex*/
    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        console.log(emailValid);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailValid(emailRegex.test(inputEmail));
    }

    // Handling changes when user writes in the password field, and checking it against the Regex
    const handlePasswordChange = (e) => {
      const inputPassword = e.target.value;
        setPassword(inputPassword);
        console.log(strongPassword);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])[\S]{8,}$/;
        setStrongPassword(passwordRegex.test(inputPassword));   
    }

    // Handling changes when user selects different nationality
    const handleNationalityChange = (e) => {
      setNationality(e.target.value);
  }

    // Handling the greeting based on the nationality selected
    /* The if-else block is quite long, and I'm sure it could be refactored */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted: ' , email, password);
        let greetingMessage = '';
        if (nationality === 'fi') {
            greetingMessage = 'Moi!';
        } else if (nationality === 'en') {
            greetingMessage = 'Hello!';
        } else if (nationality === 'de') {
            greetingMessage = 'Hallo!';
        } else if (nationality === 'fr') {
            greetingMessage = 'Bonjour!';
        }
        console.log('greetingMessage: ', greetingMessage);
        setGreeting(greetingMessage);
        }

    // Rendering the form
    /* I found this part to be somewhat challenging, but again educational. I made new state variables and functions as I was writing this part, so it kind of
    built itself as I went along. I'm sure there are parts that could be refactored, like maybe choosing the nationality, but I don't have the time to really focus 
    on it for this particular task.
     */
    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <p className="description">Email</p>
                <input 
                type="Email"
                placeholder="Enter your email"
                value={email}
                onChange ={handleEmailChange} // Using onChange to provide immediate response
                className={emailValid ? 'valid' : 'invalid'} // Dynamically setting the classname based on the emailValid state
                required/>
                {!emailValid && <p className="error-message">Please enter a valid email address</p>} 
                {emailValid && <p className="success-message">Email address is valid</p>}
                <p className="description">Password</p>
                <input
                 type="password" 
                 placeholder="Enter your password"
                 value= {password}
                 onChange = {handlePasswordChange} 
                 className = {strongPassword ? 'valid' : 'invalid'} 
                 required />
                 {!strongPassword && <p className="error-message">Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character</p>}
                 {strongPassword && <p className="success-message">Password is strong</p>}
                <p className="description">Nationality</p>
                <select
                id = "nationality"
                value= {nationality}
                onChange ={handleNationalityChange}
                required
                >
                    <option value="" disabled>
                    Select nationality
                    </option>
                    <option value = "fi">Finnish</option>
                    <option value = "en">English</option>
                    <option value = "de">German</option>
                    <option value = "fr">French</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
            {greeting && <p className="greeting">{greeting}</p>}
            {greeting && <p className="greeting">Your email address is {email}</p>}
        </div>
    );
}

export default SignUp;

/* I found the task to be fun and educational. It's nice to apply the things we've learned in class to a slightly more complex task.
Making a Sign Up -page is also very useful for the project. */