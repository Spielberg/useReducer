import { useState } from "react";
import type { SelectChangeEvent } from "@mui/material/Select"
import type { FormErrors, FormData } from "../types";

export const useStateHandler = () => {
  const [firstName, setFirstName] = useState<FormData['firstName']>("");
  const [lastName, setLastName] = useState<FormData['lastName']>("");
  const [occupation, setOccupation] = useState<FormData['occupation']>("");
  const [city, setCity] = useState<FormData['city']>("");
  const [country, setCountry] = useState<FormData['country']>("");
  const [email, setEmail] = useState<FormData['email']>("");
  const [password, setPassword] = useState<FormData['password']>("");

  const [firstNameError, setFirstNameError] = useState<FormErrors['firstName']>(false);
  const [lastNameError, setLastNameError] = useState<FormErrors['lastName']>(false);
  const [occupationError, setOccupationError] = useState<FormErrors['occupation']>(false);
  const [cityError, setCityError] = useState<FormErrors['city']>(false);
  const [countryError, setCountryError] = useState<FormErrors['country']>(false);
  const [emailError, setEmailError] = useState<FormErrors['email']>(false);
  const [passwordError, setPasswordError] = useState<FormErrors['password']>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "occupation":
        setOccupation(value);
        break;
      case "city":
        setCity(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
    validateField(name, value);
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    switch (name) {
      case "occupation":
        setOccupation(value);
        break;
      case "city":
        setCity(value);
        break;
      case "country":
        setCountry(value);
        break;
    }
    validateField(name, value);
  }

  const validateField = (name: string, value: string) => {
    let isValid = true;
    switch (name) {
      case "firstName":
        isValid = value.length >= 2;
        setFirstNameError(!isValid);
        break;
      case "lastName":
        isValid = value.length >= 2;
        setLastNameError(!isValid);
        break;
      case "email":
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setEmailError(!isValid);
        break;
      case "password":
        isValid = value.length >= 6;
        setPasswordError(!isValid);
        break;
      case "occupation":
        isValid = value.length > 0;
        setOccupationError(!isValid);
        break;
      case "city":
        isValid = value.length > 0;
        setCityError(!isValid);
        break;
      case "country":
        isValid = value.length > 0;
        setCountryError(!isValid);
        break;
    }
  }

  const isFormValid = () => {
    return !firstNameError &&
           !lastNameError &&
           !occupationError &&
           !cityError &&
           !countryError &&
           !emailError &&
           !passwordError &&
           firstName.length > 0 &&
           lastName.length > 0 &&
           occupation.length > 0 &&
           city.length > 0 &&
           country.length > 0 &&
           email.length > 0 &&
           password.length > 0;
  }

  const formData = {
    firstName,
    lastName,
    occupation,
    city,
    country,
    email,
    password,
  };

  const errors = {
    firstName: firstNameError,
    lastName: lastNameError,
    occupation: occupationError,
    city: cityError,
    country: countryError,
    email: emailError,
    password: passwordError,
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setOccupation("");
    setCity("");
    setCountry("");
    setEmail("");
    setPassword("");
    
    setFirstNameError(false);
    setLastNameError(false);
    setOccupationError(false);
    setCityError(false);
    setCountryError(false);
    setEmailError(false);
    setPasswordError(false);
  };

  return { 
    formData, 
    errors, 
    handleChange, 
    handleSelectChange, 
    isFormValid,
    resetForm 
  }
};
