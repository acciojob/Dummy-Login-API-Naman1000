
import React from 'react';
import { useState } from 'react'

const users = [
  { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
  { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
  { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" },
];

function App() {
  
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [usererror, setUserError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  
  const HandleSubmit =  (e) =>{
    e.preventDefault();
    
    setUserError("");
    setPasswordError("");
    
    const user = users.find((u) => u.email == email);
  
    setTimeout(() => {
      if(!user ){
        console.log("User not found");
        setUserError("User not found")
      }
      else if(user.password !== password){
        console.log("Password Incorrect");
        setPasswordError("Password Incorrect");
      }
      else{
        console.log("login successful")
        console.log(user);
        
      }
      
    }, 3000);
  }

  return (
    <div>
      <form onSubmit = {HandleSubmit}>
        
       <input type ="email" 
       placeholder = 'enter email' 
       value = {email}
       id = "input-email"
       onChange = {(e) => setEmail(e.target.value)}
        required />
        <p id ="user-error" style={{ color: "red" }}>{usererror}</p>
        <br />
      
      <input 
      type = "password" 
      placeholder = "enter password" 
      value = {password}
      id = "input-password"
      onChange = {(e) => setPassword(e.target.value)}
      required />
      <p id="password-error" style={{ color: "red" }}>
        {passworderror}</p>
      <br />
      <p></p>
      
      <button 
      id = "submit-form-btn"
      type= "submit"> Submit</button>
      </form>
      
    </div>
  )
}

export default App
