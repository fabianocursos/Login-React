import {Fragment} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/index"
import Signin from "../signin/index"
import Signup from "../signup/index"
import useAuth from "../hooks/useAuth"

const Private = ({Item}) => {

    const {signed} = useAuth();
    
    return signed > 0 ? <Item/> : <Signin/>;
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
            <Route exact path="/home" element={<Private Item={Home}/>}/>      {/*pagina home, acesso somente se logado, rota privada*/}
            <Route path="/" element={<Signin/>}/>                             {/*pagina signin */}
            <Route exact path="/signup" element={<Signup/>}/>                 {/*pagina signup */}
            <Route path="*" element={<Signin/>}/>                             {/*pagina inicial */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp
