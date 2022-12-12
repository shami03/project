import React,{useState} from 'react'

function Login() {
    document.title="Login/Signup Page";
    const[Username,setUsername]=useState('');
    const[Password,setPassword]=useState('');
    const[Error,setError]=useState(false);
    const formhandler=(event)=>{

        if(Username.length==0 && Password.length==0)
        {
            setError(true);
        }
        if(Username&&Password)
        {
        const loginObj={
            name:Username,
            pwd:Password
        }
        console.log(loginObj);
        alert(JSON.stringify(loginObj));
    }
    }
  return (
    <div>Login<hr/>
    <h3>SIGNUP/LOGIN</h3>
    <form className='formed' onSubmit={formhandler}>
    Username: <input type="text" value={Username} placeholder="Enter Your Name" onChange={(e)=>setUsername(e.target.value)}/><br/><br/><br/>
    Password: <input type="password" value={Username} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/><br/>

    <button>Login</button> <br/>
    </form>
    </div>
  )
}

export default Login
