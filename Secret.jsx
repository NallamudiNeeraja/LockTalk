import "../Secret.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Secret() {
  const[msg,setmsg]=useState('');
  const[secret,setSecret]=useState('');
  const[pswd,setpswd]=useState('');
  const[hint,setHint]=useState('');
  const navigate=useNavigate();
  const[secretdecrpt,setSecretDecrpt]=useState('');
  const[pswdDecrpt,setPswdDecrpt]=useState('');
  const[eform,setEform]=useState(true);
  const[dform,setDform]=useState(false);
  const[decryptedMsg,setDecryptedMsg]=useState('');

  const EncruptMessage=()=>{
       axios.post(`http://localhost:8080/encrupt?msg=${msg}&password=${pswd}`)
       .then((response)=>{
        const secretmsg=response.data;
        setSecret(secretmsg);
       navigate("/Sucess",{state:{hint_msg:hint,secret_msg:secretmsg}})
  })}
  const decruptMessage=()=>{
       axios.post(`http://localhost:8080/decrptmsg?secret=${secretdecrpt}&password=${pswdDecrpt}`)
       .then((response)=>{
        const secretmsg=response.data;
        setDecryptedMsg(secretmsg);
       
  })}
  return (
    <>
     <div className="container">
              <h1>Lock-Talk</h1>
              <div>
                <button className={eform ? 'active' : "disable"} onClick={()=>{
                  setEform(true);
                  setDform(false);
                }}>Encrpty</button>
                <button className={dform ? 'active' : "disable"} onClick={()=>{
                  setDform(true);
                  setEform(false);
                }}>Decrypt</button>
              </div>
          {eform && <div id="form">
              <label> Message: </label>
              <textarea id="msg-box" type="text" placeholder="Enter your Message" value={msg} onChange={(event)=>{setmsg(event.target.value)}}/>
              <label>Password:</label>
              <input placeholder="Enter your Password"
              type="password" value={pswd} onChange={(event)=>{setpswd(event.target.value)}}/>
              <label>Hint:</label>
              <input placeholder="Enter Hint For Password" value={hint} onChange={(event)=>{setHint(event.target.value)}}/>
              <button onClick={EncruptMessage}>Encrypt Message</button>
          
          </div>
          }
          {dform && <div id="decrpt">
          <label>Secret Message:</label>
          <input placeholder="Enter Secret Message" value={secretdecrpt} onChange={(event)=>{setSecretDecrpt(event.target.value)}}/>
          <label>Password:</label>
          <input placeholder="Enter Password" type="password" value={pswdDecrpt} onChange={(event)=>{setPswdDecrpt(event.target.value)}}/>
          <button onClick={decruptMessage}>Decrypt Message</button>
          <input readOnly value={decryptedMsg}></input>
          </div>}
     </div>
    
    </>
   
  )
}

export default Secret
