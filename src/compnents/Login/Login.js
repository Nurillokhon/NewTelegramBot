import React,{useState } from 'react';
import './login.css'
import GaiLogo from "../imgs/GaiLogo.svg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setlogin] = useState('');
    const [password, setpassword] = useState('');

    const navigate = useNavigate()
    const send = () =>{
        console.log(login , password);
        axios.post('https://asadbek6035.pythonanywhere.com/account/login/' ,{
          phone_number: login,
          password: password
        })
        .then(r =>{
          console.log(r.data.data.token.access);
          localStorage.setItem('token' , r.data.data.token.access)
      
          navigate('/home')
        
        })
        .catch(e =>{
          console.log(e);
            alert('xato')
        })
      }
    return (
        <div className='row gx-0'>
        <div className="col s6 loginImg">
          <img src={GaiLogo} className='gaiLogo' alt="GaiLogo" />
        </div>
        <div className="col s6 loginForm">
         <div className='formcontent'>
          <p className='formText'>Kirish uchun Login va Parol kiriting</p>
            <input
              placeholder='Login'
              type='text'
              name='Login'
              onInput={(i)=>setlogin(i.target.value)}
              />
            <input
              placeholder='Password'
              type='password'
              name='Password'
              onInput={(i)=>setpassword(i.target.value)}
               />
            <button onClick={send} className="btn cyan lighten-2 waves-effect waves-purple loginBtn" >Send</button>
         </div>
        </div>
      </div>
    );
}

export default Login;
