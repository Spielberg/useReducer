import React from "react"
import {
  Grid,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
  TextField,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import type { Theme } from "@mui/material/styles"
import { useStateHandler } from "../hooks/useStateHandler";

interface FormProps {
  title: string;
  hook: ReturnType<typeof useStateHandler>;
}

const StyledCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(3),
}))

const StyledButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  margin: theme.spacing(1),
}))

const Form = ({ title, hook }: FormProps) => {
  const { formData, errors, handleChange, handleSelectChange, isFormValid, resetForm } = hook

  const options = [
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "manager", label: "Manager" },
  ]


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid()) {
      console.log("Form submitted:", formData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} justifyContent="center">
        <Grid>
          <StyledCard>
            <CardHeader title={title} />
            <CardContent>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    helperText={errors.firstName ? "First name is required" : ""}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    helperText={errors.lastName ? "Last name is required" : ""}
                  />
                </Grid>

                <Grid size={12}>
                  <FormControl fullWidth variant="outlined" error={errors.occupation}>
                    <InputLabel id="occupation-label">Occupation</InputLabel>
                    <Select
                      labelId="occupation-label"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleSelectChange}
                      label="Occupation"
                    >
                      <MenuItem value="">None</MenuItem>
                      {options.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    error={errors.city}
                    helperText={errors.city ? "City is required" : ""}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Country"
                    variant="outlined"
                    fullWidth
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    error={errors.country}
                    helperText={errors.country ? "Country is required" : ""}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    helperText={errors.email ? "Invalid email format" : ""}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    helperText={errors.password ? "Password must be at least 6 characters" : ""}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <StyledButton
                variant="contained"
                color="primary"
                type="submit"
                disabled={!isFormValid()}
              >
                REGISTER
              </StyledButton>
              <StyledButton
                variant="outlined"
                color="secondary"
                onClick={resetForm}
              >
                RESET
              </StyledButton>
            </CardActions>
          </StyledCard>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
