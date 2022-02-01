import React from 'react';
import {Link} from "react-router-dom";
import user from '../images/user.jpg';

const ContactDetails=(props)=>{
console.log(props);
  return(
   
    <div className="main">
      <br></br>
      <br></br>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user"/>
        </div>
        <div className="content">
          <div className="header">"ms"</div>
          <div className="description">"tp"</div>
        </div>
      </div>
      <div className="centerdiv">
        <Link to="/">
        <button className="ui button purple center">BackToContactList</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;