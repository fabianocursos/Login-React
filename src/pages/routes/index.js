import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home/index.js"
import Signin from "../signin/index.js"
import Signup from "../signup/index.js"

const Private = ({Item}) => {
    const signed = false;

    return signed > 0 ? <Item/> : <Signin/>;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private item={Home} />} />
                    <Route path="/" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />

                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp
