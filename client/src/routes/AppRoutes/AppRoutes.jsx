<<<<<<< HEAD
import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
<<<<<<< HEAD
<<<<<<< HEAD
import { Account, Home, Landing, Profile, TransferMoney } from "@/pages"
=======
import { Account, Home, Landing, Profile, AddMoney } from "@/pages"
>>>>>>> a2b13d5 (first version addMoney)
=======
import {
  Account,
  Home,
  Landing,
  Profile,
  TransferMoney,
  TransferInto,
<<<<<<< HEAD
  TransferOut,
  TransactionAmount
=======
  TransactionAmount,
  AddCard,
<<<<<<< HEAD
  Cards
>>>>>>> fef9757 (Update AppRoutes.jsx)
=======
  Cards,
  AddMoneyMethod
>>>>>>> 43b05c8 (cards implement for add funds)
} from "@/pages"
>>>>>>> cf67f95 (transfer money (partial) +routes  & estructure cards reusables)
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Main, MainContainer } from "./style"
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRequire, RejectIsAuthenticated } from "@/layouts";
import { Landing, Home, Account,Cards, AddCard} from "@/pages";
import { Main, MainContainer } from "./style";
<<<<<<< HEAD
import { Cards } from "@/pages";
<<<<<<< HEAD
>>>>>>> 4ce0818 (page my Cards finished)
=======
import { AddCardsForm } from "@/modules";
>>>>>>> 4f6a669 (adding add cards form)
=======
>>>>>>> 5211a70 (added validations)

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Landing />} />

          {/* Error routes */}
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path='*' element={<Landing />} />
=======
          <Route path='*' element={<div>ERROR PAGE</div>} />
>>>>>>> 43b05c8 (cards implement for add funds)

          {/* Auth required routes */}
          <Route path='/app/' element={<AuthRequire />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
<<<<<<< HEAD
<<<<<<< HEAD
=======

            {/* {Transfer money routes} */}
>>>>>>> 43b05c8 (cards implement for add funds)
            <Route path='transf' element={<TransferMoney />} />
<<<<<<< HEAD
=======
            <Route path='add-money' element={<AddMoney />} />
>>>>>>> a2b13d5 (first version addMoney)
=======
          <Route path="*" element={<div>ERROR PAGE</div>} />

          {/* Auth required routes */}
          <Route path="/app" element={<AuthRequire />}>
            <Route index element={<Home />} />
            <Route path="/app/cards" element={<Cards/>}/>            
            <Route path="/app/cards/addCard" element={<AddCard/>}>            
          </Route>
>>>>>>> 4ce0818 (page my Cards finished)
=======
            <Route path='transf/int' element={<TransferInto />} />
            <Route
              path='transf/int/:identifier'
              element={<TransactionAmount />}
            />
<<<<<<< HEAD
>>>>>>> cf67f95 (transfer money (partial) +routes  & estructure cards reusables)
=======

            {/* {Add money routes} */}
            <Route path='addfunds' element={<AddMoney />} />
            <Route path='addfunds/method' element={<AddMoneyMethod />} />
            {/* <Route
              path='transf/int/:identifier'
              element={<TransactionAmount />}
            /> */}

            <Route path='cards' element={<Cards />} />
            <Route path='cards/addCard' element={<AddCard />} />
>>>>>>> 43b05c8 (cards implement for add funds)
          </Route>

          {/* Not passing if authenticated routes */}
          <Route path='/srv' element={<RejectIsAuthenticated />}>
            <Route index element={<Account type='Register' />} />
            <Route path='/srv/login' element={<Account type='Login' />} />
          </Route>
        </Routes>
      </MainContainer>
    </Main>
  )
}

<<<<<<< HEAD
export default AppRoutes
=======
export default AppRoutes;
>>>>>>> 4ce0818 (page my Cards finished)
