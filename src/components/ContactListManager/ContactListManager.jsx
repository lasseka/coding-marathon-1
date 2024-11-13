import React from 'react'
import {useState} from 'react'
import "./ContactListManager.css"
import Contact from './Contact'


//Took a bit of work to understand how utilising objects in the useState worked but after getting the hang of it I found it very intuitive
function ContactListManager() {

  const [contacts, setContacts] = useState([])
  const [newContact, setNewContact] = useState({name: "", email:"", phone: ""})


  //I liked this way of updating changes through objects as it stopped some repetition
  function handleInputChange(e){
    const {name, value} = e.target


    //This was achieved through LLM to not allow letters and special letters, but allows a '+' at the start
    if (name === "phone") {
      if (!/^\+?\d*$/.test(value)) return; 
    }

    setNewContact(c => ({...c, [name]: value}))
  }

    //Trim is a nice way to prevent some user error that I had not thought of initially, good to get some practice with this as well.
  function addContact(){
    if (newContact.name.trim() !=="" && newContact.email.trim() !== "" && newContact.phone.trim() !== "")
    setContacts(c => [...c, newContact]);
    setNewContact({name:"", email:"", phone:""})

  }

  function deleteContact(index){
    setContacts(contacts.filter((_, i) => i !== index))
  }

  //In the phone number input I tried to limit the type to tel or number to only allow numbers but I couldnt get it to work and dont really have the time to figure out why
  return (
    <article>
      <h1>ContactListManager</h1>
      <div className='inputs'>
        <input id='name' type='text' name="name" onChange={handleInputChange} value={newContact.name} placeholder='Insert name' ></input>
        <input id="email" type='text' name="email" onChange={handleInputChange} value={newContact.email} placeholder='insert email'></input>
        <input id="phone" type='tel' name="phone" onChange={handleInputChange} value={newContact.phone} placeholder='insert number'></input>
      <button onClick={addContact}>Add contact</button>
      </div>
      <div className='allContacts'>
        
      {contacts.map((contact, index) => (
          <div key={index}>
            <Contact contact = {contact} key={contact.index} onClick={() => deleteContact(index)} />
          </div>
        ))}
      </div>
    </article>
  )
}

export default ContactListManager
