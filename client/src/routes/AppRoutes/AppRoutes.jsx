<<<<<<< HEAD
import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
<<<<<<< HEAD
<<<<<<< HEAD
import { Account, Home, Landing, Profile, TransferMoney } from "@/pages"
=======
import { Account, Home, Landing, Profile, AddMoney } from "@/pages"
>>>>>>> a2b13d5 (first version addMoney)
=======
=======
import { AuthRequire, RejectIsAuthenticated } from "@/layouts";
>>>>>>> 6b213c4 (Error page)
=======
import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
>>>>>>> c411a69 (implement add funs to account and refresh transfers and adds)
>>>>>>> main
import {
  Account,
  Home,
  Landing,
  Profile,
<<<<<<< HEAD
  AddMoney,
  TransferMoney,
  TransferInto,
  TransactionAmount,
  AddCard,
  Cards,
  Error,
  AddMoneyMethod,
  FAQ,
  AddMoneyAccount
} from "@/pages"
=======
  TransferMoney,
  TransferInto,
<<<<<<< HEAD
  TransferOut,
  TransactionAmount
=======
  TransactionAmount,
  AddCard,
<<<<<<< HEAD
<<<<<<< HEAD
  Cards
>>>>>>> fef9757 (Update AppRoutes.jsx)
=======
  Cards,
  AddMoneyMethod
>>>>>>> 43b05c8 (cards implement for add funds)
} from "@/pages"
>>>>>>> cf67f95 (transfer money (partial) +routes  & estructure cards reusables)
>>>>>>> main
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
=======
  Cards,
  Error,
  AddMoneyMethod,
<<<<<<< HEAD
  FAQ
} from "@/pages";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, MainContainer } from "./style";
>>>>>>> 6b213c4 (Error page)
=======
  FAQ,
  AddMoneyAccount
} from "@/pages"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Main, MainContainer } from "./style"
>>>>>>> c411a69 (implement add funs to account and refresh transfers and adds)

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Landing />} />

          {/* Error routes */}
<<<<<<< HEAD
          <Route path='*' element={<Error />} />
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path='*' element={<Landing />} />
=======
          <Route path='*' element={<div>ERROR PAGE</div>} />
>>>>>>> 43b05c8 (cards implement for add funds)
=======
          <Route path="*" element={<Error />} />
>>>>>>> 6b213c4 (Error page)
=======
          <Route path='*' element={<Error />} />
>>>>>>> c411a69 (implement add funs to account and refresh transfers and adds)
>>>>>>> main

          {/* Auth required routes */}
          <Route path='/app/' element={<AuthRequire />}>
            <Route index element={<Home />} />
<<<<<<< HEAD
            <Route path='profile' element={<Profile />} />
            <Route path='help' element={<FAQ />} />

            {/* {Transfer money routes} */}
            <Route path='transf' element={<TransferMoney />} />
            <Route path='transf/int' element={<TransferInto />} />
=======
<<<<<<< HEAD
            <Route path='profile' element={<Profile />} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            <Route path='help' element={<FAQ />} />
>>>>>>> d08ecd3 (faq finished)

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
<<<<<<< HEAD
=======
            <Route path="profile" element={<Profile />} />
            <Route path="add-money" element={<AddMoney />} />
            <Route path="transf" element={<TransferMoney />} />
            <Route path="transf/int" element={<TransferInto />} />
>>>>>>> 6b213c4 (Error page)
=======
>>>>>>> main
            <Route path='profile' element={<Profile />} />
            <Route path='add-money' element={<AddMoney />} />
            <Route path='transf' element={<TransferMoney />} />
            <Route path='transf/int' element={<TransferInto />} />
<<<<<<< HEAD
=======
>>>>>>> c411a69 (implement add funs to account and refresh transfers and adds)
>>>>>>> main
            <Route
              path='transf/int/:identifier'
              element={<TransactionAmount />}
            />
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cf67f95 (transfer money (partial) +routes  & estructure cards reusables)
=======
>>>>>>> main

            {/* {Add money routes} */}
            <Route path='addfunds' element={<AddMoney />} />
            <Route path='addfunds/method' element={<AddMoneyMethod />} />
            <Route path='addfunds/method/:card' element={<AddMoneyAccount />} />

            <Route path='cards' element={<Cards />} />
            <Route path='cards/addCard' element={<AddCard />} />
<<<<<<< HEAD
            <Route path='cards' element={<Cards />} />
            <Route path='cards/addCard' element={<AddCard />} />
=======
<<<<<<< HEAD
>>>>>>> 43b05c8 (cards implement for add funds)
=======
            <Route path="cards" element={<Cards />} />
            <Route path="cards/addCard" element={<AddCard />} />
>>>>>>> 6b213c4 (Error page)
=======
            <Route path='cards' element={<Cards />} />
            <Route path='cards/addCard' element={<AddCard />} />
>>>>>>> c411a69 (implement add funs to account and refresh transfers and adds)
>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default AppRoutes
=======
export default AppRoutes;
>>>>>>> 4ce0818 (page my Cards finished)
=======
export default AppRoutes;
>>>>>>> 6b213c4 (Error page)
=======
export default AppRoutes
>>>>>>> c411a69 (implement add funs to account and refresh transfers and adds)
>>>>>>> main
