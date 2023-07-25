import React, { useState } from 'react';
import { BackArrow } from './styles';
import { useNavigate } from 'react-router-dom';
import { UserTool } from "@/components"
import { EstructureCards } from '@/modules';
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePermContactCalendar
} from "react-icons/md"

export default function AddMoney() {
  const userData = useSelector((state) => state.auth);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

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
        return 'Seleccionar monto';
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

  return (
    <div>
        <BackArrow onClick={goBack}>{'<-'}</BackArrow>
        <EstructureCards 
          icon={<FaUserCircle />}
          title={getTitle(step)}
        >
          {showContent(step)}
        </EstructureCards>
    </div>
  )
}