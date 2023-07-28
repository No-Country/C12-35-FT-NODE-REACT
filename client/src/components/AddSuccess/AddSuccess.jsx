import React from 'react';
import { BtnVolver, CardWrapper, Imagen, Subtitle, Title, UpperGroup } from './style';
import imagen from '@/assets/images/IconoExito.png';
import { useNavigate } from 'react-router-dom';

export default function AddSuccess({ title, subtitle}) {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/app', { replace: true });
    }

  return (
    <CardWrapper>
      <UpperGroup>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </UpperGroup>
      <Imagen src={imagen}/>
      <BtnVolver onClick={goHome}>Volver al inicio </BtnVolver>
    </CardWrapper>
  )
}