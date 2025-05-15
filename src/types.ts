export interface FormData {
  firstName: string;
  lastName: string;
  occupation: string;
  city: string;
  country: string;
  email: string;
  password: string;
}

export interface FormErrors {
  firstName: boolean;
  lastName: boolean;
  occupation: boolean;
  city: boolean;
  country: boolean;
  email: boolean;
  password: boolean;
}