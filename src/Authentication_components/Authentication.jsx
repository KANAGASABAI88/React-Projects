import { useState } from "react"


export default function Authentication(){
const[username,setUserName]=useState('')
const[password,setPassword]=useState('')
const[isValid,setisValid]=useState(true)

const handleUserNameChange=(event)=>{
    const value=event.target.value
    setUserName(value)

}

const handlePasswordChange=(event)=>{
    const value=event.target.value
    setPassword(value)
    if(value.length<8){
        setisValid(false)
    }

}

const handleSubmit=(event)=>{
    event.preventdefault();
    console.log("username",username)
    console.log("password",password)

    setUserName('')
    setPassword('')

}
    return(<div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUserNameChange}
            style={{
                padding:'10px',
                marginBottom:"15px",
                borderRadius:'5px',
                border:'1px solid blue',
                width:'100%',
            }}/>
            <input
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={handlePasswordChange}
            style={{border:isValid ? '1px solid green' :'1px solid red',
                padding:'10px',
                marginBottom:"15px",
                borderRadius:'5px',
                
                width:'100%',
             }}/>
            
            
            <button
            type="submit"
            style={{
                cursor:'pointer',
                padding:'10px',
                border:'none',
                backgroundColor:'#007bff',
                color:'black',
                width:'100%'

            }}>Login</button>
            
        </form>
        
    </div>)
}