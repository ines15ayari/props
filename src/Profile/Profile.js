import React from "react";
import PropTypes from "prop-types";


 function Profile({fullName,bio,profession, children }){
    
    const handleClick=() =>{
       
       
        alert(fullName);
    
    }
    
  
  return (
     
        <div style={{backgroundColor:"rgb(214, 36, 66)" ,border:"5px solid",borderColor:"black",textAlign:"center",width:"900px", justifyContent:"space-between",marginLeft: "15% "}}>
          <h1 style={{color:"White"}}>{fullName}</h1>
          <h2>{bio}</h2>
          <h3>{profession}</h3>
          {children}
          <br/>
          <button onClick={handleClick}><h1>Click Me!</h1></button>
        </div>
     
   
  );
}
export default Profile
Profile.defaultProps = {
 
    fullName: "Ines Ayari", 
    bio: "I am a pre-engineering student",
    profession: "student"

   };
   Profile.propTypes = {
       fullName:PropTypes.string,
       bio:PropTypes.string,
       profession:PropTypes.string
  
   };
