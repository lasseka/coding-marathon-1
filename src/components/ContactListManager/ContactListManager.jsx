import React from 'react'
import {useState} from 'react'
import "./ContactListManager.css"

function ContactListManager() {

  const [contacts, setContacts] = useState([])
  const [newContact, setNewContact] = useState({name: "", email:"", phone: ""})

  function handleInputChange(e){
    const {name, value} = e.target
    setNewContact(c => ({...c, [name]: value}))
    console.log("test")
  }

  function addContact(){
    setContacts(c => [...c, newContact]);
    setNewContact({name:"", email:"", phone:""})

  }

  function deleteContact(index){
    setContacts(contacts.filter((_, i) => i !== index))
  }
  return (
    <article>
      <h1>ContactListManager</h1>
      <div className='inputs'>
        <input id='name' type='text' name="name" onChange={handleInputChange} value={newContact.name} placeholder='Insert name' ></input>
        <input id="email" type='text' name="email" onChange={handleInputChange} value={newContact.email} placeholder='insert email'></input>
        <input id="phone" type='text' name="phone" onChange={handleInputChange} value={newContact.phone} placeholder='insert number'></input>
      <button onClick={addContact}>Add contact</button>
      </div>
      <div>
      {contacts.map((contact, index) => (
          <div key={index} className='contact'>
            <p>Name: {contact.name}</p><p>Email: {contact.email}</p> <p>Phone: {contact.phone}</p>
            <button onClick={() => deleteContact(index)}>Delete</button>
          </div>
        ))}
      </div>
    </article>
  )
}

export default ContactListManager
