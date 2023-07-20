import React, { useRef } from 'react';
import { LandingWrapper, Background, SVGWrapper, PathWrapper } from './style';
import { LandHeader, LandHero, LandFeats, LandAbout, LandForm, LandFooter } from "@/modules/";

export default function Landing() {
  return (
    <LandingWrapper>
      <SVGWrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 500">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#4bffb3" />
            <stop offset="30%" stopColor="#4b66ff" />
            <stop offset="50%" stopColor="#4bffb3" />
            <stop offset="70%" stopColor="#4b66ff" />
            <stop offset="100%" stopColor="#4bffb3" />
          </linearGradient>
        </defs>
        <PathWrapper d="
          M70 -20 
          Q60 35 85 35 
          Q120 30 130 72 
          M0 30 Q5 55 40 55 
          Q55 55 50 90
          Q30 105 -10 110
          M130 120
          Q80 130 85 160
          Q80 180 130 200
          M-10 210
          Q45 225 50 240
          Q50 285 -10 300
          M130 310
          Q85 312 80 340
          Q85 358 130 360
          M-10 370
          Q10 385 45 390
          Q90 400 75 500"
          fill="none" stroke="url(#gradient)" strokeWidth="10" 
        />
      </SVGWrapper>
      <Background />
      <LandHeader />
      <LandHero />
      <div style={{minHeight:'75vh'}} />
      <LandFeats />
      <LandAbout />
      <LandForm />
      <LandFooter />
    </LandingWrapper>
  )
}