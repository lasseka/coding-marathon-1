import React from 'react';
import "./Contact.css"

function Contact({ contact, onClick }) {
  return (
    <div className="contact">
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={onClick}>Delete</button>
    </div>
  );
}

export default Contact;
