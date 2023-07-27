<<<<<<< HEAD
import { EstructureCards } from "@/modules"
import { UserTool } from "@/components"
import { useIcons } from "@@/global/customIcons"
import { BsCreditCard2Back } from "react-icons/bs"
import { PiCoinsLight } from "react-icons/pi"
=======
import React, { useState } from 'react';
import { BackArrow } from './styles';
import { useNavigate } from 'react-router-dom';
import { UserTool, AmountCard } from "@/components"
import { EstructureCards } from '@/modules';
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  MdCurrencyBitcoin,
  MdOutlineAccountBalanceWallet,
  MdOutlinePermContactCalendar
} from "react-icons/md";
import { sendMeMoney } from "@@/queries/Transaction.jsx";
import { useDispatch } from "react-redux";
>>>>>>> 61588d3 (trying to fix add money)

export default function AddMoney() {
  //hooks
  const { MoneyBillTransfer } = useIcons()

  //constants
  const toolData = [
    {
      id: 2,
      icon: <BsCreditCard2Back />,
      title: "Débito/Crédito",
      subtitle: "Sin cargo",
      link: "/app/addfunds/method",
      resalt: true
    },
    {
      id: 3,
      icon: <PiCoinsLight />,
      title: "Efectivo",
      link: "/app/addfunds/cash"
    }
<<<<<<< HEAD
  ]
=======
  }

  const showContent = (step) => {
    switch(step) {
      case 0:
        return <>
          <UserTool
            data={{
              id: 1,
              icon: <MdOutlineAccountBalanceWallet />,
              title: "Débito",
              subtitle: "Sin cargo",
              onClick: selectCard
            }}
          />
          <UserTool
            data={{
              id: 2,
              icon: <MdOutlineAccountBalanceWallet />,
              title: "Efectivo"
            }}
          />
        </>;
      case 1:
        return <>
          {userData.cards.length > 0 ? userData.cards.map((card) => {
            <UserTool
              data={{
                id: card.id,
                title: card.card_number,
                subtitle: card.expiration_date,
                onClick: selectAmount
              }}
            />
          }) : 
          <UserTool
            data={{
              id: Math.random(),
              title: '.... 1234',
              subtitle: 'Vencimiento 24/24',
              onClick: selectAmount
            }}
          />}
        </>;
      case 2:
        return <AmountCard
                  data={{
                    back: goBack,
                    title: "Ingresá el monto que deseas ingresar",
                    amount: currAmount,
                    amountHandler: amountHandler,
                    add1: add1,
                    amo1: '500',
                    add2: add2,
                    amo2: '1000',
                    add3: add3,
                    amo3: '1500',
                    buttonText: 'Siguiente',
                    next: addMoney
                  }}
                />;
      case 3:
        return 'Resultado de la operación';
      default:
        return 'working ?';
    }
  }

  const selectCard = () => {
    setStep((step + 1));
  }

  const selectAmount = () => {
    setStep((step + 1));
  }

  const amountHandler = (e) => {
    const regex = /^[0-9]+$/;
    if(regex.test(e.target.value)) {
      setCurrAmount(e.target.value);
    }
  }

  const add1 = () => {
    setCurrAmount(parseInt(currAmount) + 500);
  }

  const add2 = () => {
    setCurrAmount(parseInt(currAmount) + 1000);
  }

  const add3 = () => {
    setCurrAmount(parseInt(currAmount) + 1500);
  }

  const addMoney = () => {
    setStep((step + 1));
    dispatch(sendMeMoney({
      'amount': parseInt(currAmount),
      'currency': 'ARS'
    }));
  }
>>>>>>> 61588d3 (trying to fix add money)

  return (
    <EstructureCards
      returnRoute='/app'
      icon={<MoneyBillTransfer />}
      title='Seleccioná un método de ingreso'>
      {toolData.map((tool) => {
        return <UserTool key={tool.id} data={tool} />
      })}
    </EstructureCards>
  )
}
