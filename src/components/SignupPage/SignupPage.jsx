import React, { useState } from 'react';
import './SignUpPage.css';


const SignUp = () => {
    const [nationality, setNationality] = useState('');
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [strongPassword, setStrongPassword] = useState(false);
    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    }
    const [greeting, setGreeting] = useState('');

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        console.log(emailValid);
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        setEmailValid(emailRegex.test(inputEmail));
    }

    const handlePasswordChange = (e) => {
      const inputPassword = e.target.value;
        setPassword(inputPassword);
        console.log(strongPassword);
        const passwordRegex = /(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.*[\W_])+[\S]{8,}/;
        setStrongPassword(passwordRegex.test(inputPassword));   
    }

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


    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <p className="description">Email</p>
                <input 
                type="Email"
                placeholder="Enter your email"
                value={email}
                onChange ={handleEmailChange}
                className={emailValid ? 'valid' : 'invalid'}
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