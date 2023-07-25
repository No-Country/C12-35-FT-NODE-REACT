import React, { useState } from 'react';
import { BackArrow } from './styles';
import { useNavigate } from 'react-router-dom';

export default function AddMoney() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const goBack = () => {
    step > 0 ? setStep((step-1)) : navigate(-1);
  }

  const goNext = () => {
    setStep((step + 1));
  }

  return (
    <div>
        <BackArrow onClick={goBack}>{'<-'}</BackArrow>
        {step == 0 ? 
          <div onClick={goNext}>Seleccionar medio de pago
          </div> :
        step == 1 ?
          <div onClick={goNext}>Seleccionar tarjeta
          </div> :
        step == 2 ?
          <div onClick={goNext}>Seleccionar monto
          </div> : 
        step == 3 ?
          <div onClick={goNext}>Resultado de la operación
          </div> :
        <></>}
    </div>
  )
}