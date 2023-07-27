import { Request, Response } from "express";
import response from "../../../utils/response";
import CardService from "../services";
import { Card } from "../entities/Card.entity";
import AccountService from "../../../components/Account/services";
import { getCardType } from "../../../utils/getTypeCard";
import { Account } from "../../../components/Account/entities/Account.entity";

export default async (req: any, res: Response) => {
  const { type, card_number, cardholder_name, expiration_date, cvv } = req.body;

  const account = await AccountService.getAccountById(req.userId);
  if (!account) throw new Error("No se encontró el usuario");
  const newCard = new Card();
  const typeCard = getCardType(card_number.toString());

  newCard.account = account;
  newCard.type = type.toUpperCase();
  newCard.bank_branding = typeCard;
  newCard.card_number = card_number;
  newCard.cardholder_name = cardholder_name;
  newCard.expiration_date = expiration_date;
  newCard.cvv = cvv;

  await CardService.createCard(newCard);
  return response(res, 200, newCard);
};
