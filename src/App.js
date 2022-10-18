import React from "react";
import GlobalStyle from "./style/Global";
import RoutesApp from "./pages/routes";
import { AuthProvider } from "./pages/contexts/auth";


function App() {
  return (
    <AuthProvider>

    <RoutesApp/>
    <GlobalStyle/>
    
    </AuthProvider>
  );
}

export default App;
