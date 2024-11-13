import React, { useState } from 'react';
import './SignUpPage.css';


const SignUp = () => {
    const [nationality, setNationality] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    }
    const [greeting, setGreeting] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
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
                required/>
                <p className="description">Password</p>
                <input
                 type="password" 
                 placeholder="Enter your password"
                 value= {password}
                 onChange = {handlePasswordChange}
                 required />
                <p className="description">Nationality</p>
                <select
                id = "nationality"
                value= {nationality}
                onChange ={handleNationalityChange}
                >
                    <option value="" disabled selected>
                    Select nationality
                    </option>
                    <option value = "fi">Finnish</option>
                    <option value = "en">English</option>
                    <option value = "de">German</option>
                    <option value = "fr">French</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
            {greeting && <p>{greeting}</p>}
            {greeting && <p>Your email address is {email}</p>}
        </div>
    );
}

export default SignUp;