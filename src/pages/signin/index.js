import React, { useState } from 'react'
import Input from "../components/Input"
import Button from "../components/Button"
import * as C  from "./style"
import { Link, useNavigate } from 'react-router-dom'
import useAuth from "../hooks/userAuth"



const Signin = () => {

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const [error,setError] = useState("");
  
  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input type="email" 
        placeholder = "Digite seu email"
        value={email}
        onChange = {(e)=> {setEmail(e.target.value), setError("")}}
        />
        <Input type="password" 
        placeholder = "Digite seu senha"
        value={senha}
        onChange = {(e)=> {setSenha(e.target.value), setError("")}}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Entrar" onClick={handleLogin}/>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <link to="./signup">&nbsp; Registre-se</link>
          </C.Strong>
          </C.LabelSignup>
      </C.Content>


    </C.Container>
  )
}

export default Signin

