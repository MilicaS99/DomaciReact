import React from 'react';
import {Link} from "react-router-dom";
import ContactCard from './ContactCard';

const ContactList=(props)=>{

  const deleteContactHandler=(id)=>{
    props.getContactId(id);
  };

 const renderContactList=props.contacts.map((contact)=>{
  return (<ContactCard contact={contact} 
  clickHandler={deleteContactHandler} 
  key={contact.id}
  />
  );
  });
    const stil = {margin:2 + "em" };
  return(
  
    <div className="main" stlye={stil}>
      <br></br>
      <br></br>
      <h2>Contact List </h2>
      <Link to="/add"><button className="ui button purple right">Add Contact</button></Link>
      
      
     <div className="ui celled list">{renderContactList}</div>
     </div>
     );

};

export default ContactList;