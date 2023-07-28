import { AuthRequire, RejectIsAuthenticated } from "@/layouts";
import {
  Account,
  Home,
  Landing,
  Profile,
  AddMoney,
  TransferMoney,
  TransferInto,
  TransactionAmount,
  AddCard,
  Cards,
  Error
} from "@/pages";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, MainContainer } from "./style";

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Landing />} />

          {/* Error routes */}
          <Route path="*" element={<Error />} />

          {/* Auth required routes */}
          <Route path="/app/" element={<AuthRequire />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />

            {/* {Transfer money routes} */}
            <Route path='transf' element={<TransferMoney />} />
            <Route path='transf/int' element={<TransferInto />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-money" element={<AddMoney />} />
            <Route path="transf" element={<TransferMoney />} />
            <Route path="transf/int" element={<TransferInto />} />
            <Route
              path="transf/int/:identifier"
              element={<TransactionAmount />}
            />

            {/* {Add money routes} */}
            <Route path='addfunds' element={<AddMoney />} />
            <Route path='addfunds/method' element={<AddMoneyMethod />} />
            {/* <Route
              path='transf/int/:identifier'
              element={<TransactionAmount />}
            /> */}

            <Route path='cards' element={<Cards />} />
            <Route path='cards/addCard' element={<AddCard />} />
            <Route path="cards" element={<Cards />} />
            <Route path="cards/addCard" element={<AddCard />} />
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

export default AppRoutes;
