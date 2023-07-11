export interface IUser {
  id: number;
  password: string;
  email: string;
  address: string;
  local_address: string;
  postal_code: string;
  phone_number: string;
  profile_picture: string;
  country: string;
  document_type: string;
  document_number: string;
  birthdate: Date;
  first_name: string;
  last_name: string;
}
