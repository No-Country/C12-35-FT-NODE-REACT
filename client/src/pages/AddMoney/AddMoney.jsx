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

export default function AddMoney() {
  const userData = useSelector((state) => state.auth);
  const [step, setStep] = useState(0);
  const [currAmount, setCurrAmount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBack = () => {
    step > 0 ? setStep((step-1)) : navigate(-1);
  }

  const getTitle = (step) => {
    switch(step) {
      case 0:
        return 'Selecciona un método de ingreso';
      case 1:
        return '¿Desde dónde querés ingresar dinero?';
      case 2:
        return 'Ingresá el monto que deseas ingresar';
      case 3:
        return 'Resultado de la operación';
      default:
        return 'Error';
    }
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

  return (
    <div>
        <BackArrow onClick={goBack}>{'<-'}</BackArrow>
        {step != 2 ? <EstructureCards 
          icon={<FaUserCircle />}
          title={getTitle(step)}
        >
          {showContent(step)}
        </EstructureCards>
        : showContent(step)}
    </div>
  )
}