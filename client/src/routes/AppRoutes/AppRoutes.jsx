<<<<<<< HEAD
import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
<<<<<<< HEAD
import { Account, Home, Landing, Profile, TransferMoney } from "@/pages"
=======
import { Account, Home, Landing, Profile, AddMoney } from "@/pages"
>>>>>>> a2b13d5 (first version addMoney)
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Main, MainContainer } from "./style"
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRequire, RejectIsAuthenticated } from "@/layouts";
import { Landing, Home, Account } from "@/pages";
import { Main, MainContainer } from "./style";
import { Cards } from "@/pages";
>>>>>>> 4ce0818 (page my Cards finished)

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />

          {/* Error routes */}
<<<<<<< HEAD
          <Route path='*' element={<Landing />} />

          {/* Auth required routes */}
          <Route path='/app/' element={<AuthRequire />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
<<<<<<< HEAD
            <Route path='transf' element={<TransferMoney />} />
=======
            <Route path='add-money' element={<AddMoney />} />
>>>>>>> a2b13d5 (first version addMoney)
=======
          <Route path="*" element={<div>ERROR PAGE</div>} />

          {/* Auth required routes */}
          <Route path="/app" element={<AuthRequire />}>
            <Route index element={<Home />} />
            <Route path="/app/cards" element={<Cards/>}>
          </Route>
>>>>>>> 4ce0818 (page my Cards finished)
          </Route>

          {/* Not passing if authenticated routes */}
          <Route path="/srv" element={<RejectIsAuthenticated />}>
            <Route index element={<Account type="Register" />} />
            <Route path="/srv/login" element={<Account type="Login" />} />
          </Route>
        </Routes>
      </MainContainer>
    </Main>
  );
};

<<<<<<< HEAD
export default AppRoutes
=======
export default AppRoutes;
>>>>>>> 4ce0818 (page my Cards finished)
