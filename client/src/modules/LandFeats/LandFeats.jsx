import React from 'react';
import { FeatsWrapper, FeatsTitle, FeatsGrid, Features } from './style';
import FeatCard from '@/components/FeatCard/FeatCard';
import userlanding from '@/assets/images/Userlanding.png';
import tarjetas from '@/assets/images/Tarjetas.png';
import ingresadinero from '@/assets/images/Ingresadinero.png';
import transferencia from '@/assets/images/Transferencia.png';

export default function LandFeats() {
  return (
    <FeatsWrapper id="beneficios">
      <FeatsTitle>¿Qué puedo hacer con FundWave?</FeatsTitle>
      <FeatsGrid>
        <Features>
            <FeatCard 
              title="Creá tu cuenta gratis"
              text="FundWave es totalmente gratis! Creá tu propia cuenta y disfrutá los beneficios."
              img={userlanding}
            ></FeatCard>
            <FeatCard 
              title="Añadí tus tarjetas"
              text="Podés tener todas tus tarjetas en un solo lugar."
              img={tarjetas}
            ></FeatCard>
            <FeatCard 
              title="Ingresá dinero"
              text="Ingresá dinero a tu cuenta cuando vos quieras, sin cargo."
              img={ingresadinero}
            ></FeatCard>
            <FeatCard 
              title="Realizá transferencias"
              text="Podes transferir dinero a otras cuentas, tampoco tiene cargo."
              img={transferencia}
            ></FeatCard>
        </Features>
      </FeatsGrid>
    </FeatsWrapper>
  )
}