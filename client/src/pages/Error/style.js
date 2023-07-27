import styled from "styled-components";
import { Button } from "@/components";

export const ErrorBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  min-width: 36rem;
  max-width: 40rem;
  max-height: 40rem;
  background-color: var(--background-card);
  border-radius: var(--radius-light);
`;

export const ConteinerInfoError = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const BoxConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

export const TextError = styled.h4`
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: 380;
  text-align: center;
  color: var(--text-primary);
  max-width: 20rem;
`;

export const ImgError = styled.img`
  width: 15rem;
  height: 15rem;
`;

export const ButtonError = styled(Button)`
  color: black;
  width: 90%;
`;
