import { useState } from "react";
import type { SelectChangeEvent } from "@mui/material/Select"

import type { FormData, FormErrors } from "../types";

export const useStateHandlerObject = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    occupation: "",
    city: "",
    country: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: false,
    lastName: false,
    occupation: false,
    city: false,
    country: false,
    email: false,
    password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    validateField(name, value)
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    validateField(name, value)
  }

  const validateField = (name: string, value: string) => {
    let isValid = true
    switch (name) {
      case "firstName":
      case "lastName":
        isValid = value.length >= 2
        break
      case "email":
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        break
      case "password":
        isValid = value.length >= 6
        break
      case "occupation":
      case "city":
      case "country":
        isValid = value.length > 0
        break
    }
    setErrors(prev => ({
      ...prev,
      [name]: !isValid
    }))
  }

    const isFormValid = () => {
      return !Object.values(errors).some(error => error) &&
            Object.values(formData).every(value => value.length > 0)
    }

  const reset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      occupation: "",
      city: "",
      country: "",
      email: "",
      password: "",
    });
    setErrors({
      firstName: false,
      lastName: false,
      occupation: false,
      city: false,
      country: false,
      email: false,
      password: false,
    });
  }

  return { 
    formData, 
    errors, 
    handleChange, 
    handleSelectChange, 
    isFormValid,
    resetForm: reset 
  }
};
