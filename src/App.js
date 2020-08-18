import React from 'react';
import './App.css';
import Profile from './Profile/Profile'

function App() {
  const styleObject={border:"5px solid",textAlign:"center"}
  return (
    <div style={{border:"5px solid black",textAlign:"center"}}>
   
    <Profile fullName="Ines Ayari" bio="I am a pre-engineering student"profession="student">
    <img style={{border:"5px solid"}}src="https://image.freepik.com/vecteurs-libre/fille-souriante-avatar_102172-32.jpg" alt="avatarImage"/>
   </Profile> 
    </div>
  );
}

export default App;


