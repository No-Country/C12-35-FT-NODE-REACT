import { Request, Response } from "express";
import response from "../../../utils/response";
import CardService from "../services";
import { Card } from "../entities/Card.entity";
import AccountService from "../../../components/accounts/services";
import { User } from "src/components/users/entities/User.entity";

export default async (req: any, res: Response) => {
  const { type, bank_branding, card_number, cardholder_name, expiration_date } = req.body;

  const user: any = await AccountService.getAccountById(req.userId);
  const newCard = new Card();
  newCard.account = user;
  newCard.type = type;
  newCard.bank_branding = bank_branding;
  newCard.card_number = card_number;
  newCard.cardholder_name = cardholder_name;
  newCard.expiration_date = expiration_date;
  newCard.payments = [];

  await CardService.createCard(newCard);
  return response(res, 200, newCard);
};
