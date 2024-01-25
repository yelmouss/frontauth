import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from "./components/Confirmation";
import Authenfication from "./components/Authenfication";
import Home from "./components/Home";
import AuthGuard from "./components/AuthGuard";
import ProtectedCompo from "./components/ProtectedCompo";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
             
              <Home />
            </>
          }
        />

     
        <Route
          path="/login"
          element={
            <>           
              <Authenfication />
            </>
          }
        />
        <Route
          path="/confirmation/:userId"
          element={
            <>
              <Confirmation />
            </>
          }
        />

     
        <Route
          path="/Dashboard/"
          element={
            <>
              <AuthGuard />            
              <ProtectedCompo />
            </>
          }
        />

       

        
      </Routes>

    </BrowserRouter>
  );
}

export default Router;