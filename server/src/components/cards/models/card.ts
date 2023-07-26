export interface ICard {
  id: number;
  type: string;
  bank_branding: string;
  card_number: number;
  cardholder_name: string;
  expiration_date: string;
  cvv: number;
  payment_network: string;
  account_id: number;
}
