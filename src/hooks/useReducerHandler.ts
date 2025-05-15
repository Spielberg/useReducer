import { useReducer } from "react";
import type { SelectChangeEvent } from "@mui/material/Select"
import type { FormData, FormErrors } from "../types";

export type FormState = {
  formData: FormData;
  errors: FormErrors;
};

export type FormAction =
  | { type: "SET_FIELD"; field: keyof FormData; value: string }
  | { type: "SET_ERROR"; field: keyof FormErrors; value: boolean }
  | { type: "RESET_FORM" };

export const initialState: FormState = {
  formData: {
    firstName: "",
    lastName: "",
    occupation: "",
    city: "",
    country: "",
    email: "",
    password: "",
  },
  errors: {
    firstName: false,
    lastName: false,
    occupation: false,
    city: false,
    country: false,
    email: false,
    password: false,
  },
};

export const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.value,
        },
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}; 

export const useReducerHandler = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as keyof typeof state.formData, value });
    validateField(name, value);
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as keyof typeof state.formData, value });
    validateField(name, value);
  }

  const validateField = (name: string, value: string) => {
    let isValid = true;
    switch (name) {
      case "firstName":
        isValid = value.length >= 2;
        break;
      case "lastName":
        isValid = value.length >= 2;
        break;
      case "email":
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case "password":
        isValid = value.length >= 6;
        break;
      case "occupation":
        isValid = value.length > 0;
        break;
      case "city":
        isValid = value.length > 0;
        break;
      case "country":
        isValid = value.length > 0;
        break;
    }
    dispatch({ type: "SET_ERROR", field: name as keyof typeof state.errors, value: !isValid });
  }

  const isFormValid = () => {
    const { formData, errors } = state;
    return !Object.values(errors).some(Boolean) &&
           Object.values(formData).every(value => value.length > 0);
  }

  const resetForm = () => {
    dispatch({ type: "RESET_FORM" });
  }

  return {
    formData: state.formData,
    errors: state.errors,
    handleChange,
    handleSelectChange,
    isFormValid,
    resetForm,
  }
};
