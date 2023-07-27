export interface IUser {
  address: string;
  local_address: string;
  phone_number: string;
  postal_code: string;
  profile_picture: string;
  country: string;
  document_type: string;
  document_number: string;
  birthdate: Date;
  first_name: string;
  last_name: string;
}

export interface IUserFullName {
  first_name: string;
  last_name: string;
}
