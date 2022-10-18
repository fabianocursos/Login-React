import React from 'react'
import Button from "../components/Button"
import * as C from "./style"
import {Link, useNavigate} from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Home = () => {
  const {signout} = useAuth();
  const navigate =  useNavigate();

  return (
    <C.Container>
      <C.Title>HOME</C.Title>
      <Button Text="Sair" onClick={[signout(),navigate("/")]}/>
    </C.Container>
    
  )
}

export default Home
