import React, { useState } from "react";

import {
  Box,
  TextField,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
} from "@mui/material";

import {
  containerStyleCenterColumn,
  glowButtonStyle,
} from "../../../styles/layoutStyles";

function PromptSection() {
  
  const [formData, setFormData] = useState({
    businessName: "",
    businessDescription: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    const newErrors = {};
    if (!formData.businessName) {
      newErrors.businessName = "Business name is required";
    }
    if (!formData.businessDescription) {
      newErrors.businessDescription = "Business description is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process form
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
      }}
    >
      <Container sx={{ ...containerStyleCenterColumn }}>
        <Typography variant="h2" sx={{ mb: 1, color: "text.primary" }}>
          Tell us about your business
        </Typography>

        <Typography variant="h6" sx={{ mb: 4, color: "text.secondary" }}>
          Let's create your landing page together
        </Typography>

        {/* Form */}

        <Card
          sx={{
            width: "100%",
            maxWidth: 600,
            bgcolor: "background.paper",
            borderRadius: 2,
            border: "2px solid",
            borderColor: "primary.main",
            boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}80`,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {/* Form fields */}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                fullWidth
                required
                placeholder="Your business name"
                sx={{ mb: 3 }}
              />

              <TextField
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                placeholder="Tell us what your business does, for example, a digital marketing consultancy for e-commerce brands or a co-working space provider for remote workers and freelancers."
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  ...glowButtonStyle,
                }}
              >
                Generate Landing Page
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default PromptSection;
