import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { glowButtonStyle } from "../../../styles/layoutStyles";

function CallToActionSection() {
  return (
    <Box
      component="section"
      sx={{
        mt: 5,
        position: "relative",
        overflow: "hidden",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.semiTransparent",
        py: 8,
      }}
    >
      {/* Abstract Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-50px", md: "-80px" },
          left: { xs: "-100px", md: "-150px" },
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: "50%",
          backgroundColor: "primary.main",
          opacity: 0.1,
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: { xs: "30%", md: "20%" },
          left: { xs: "-50px", md: "10%" },
          width: { xs: 180, md: 250 },
          height: { xs: 180, md: 250 },
          borderRadius: "35% 65% 55% 45% / 45% 35% 65% 55%",
          backgroundColor: "secondary.main",
          opacity: 0.15,
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-60px", md: "-100px" },
          right: { xs: "-60px", md: "-120px" },
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: "50%",
          backgroundColor: "primary.main",
          opacity: 0.1,
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: { xs: "50%", md: "40%" },
          right: { xs: "-30px", md: "10%" },
          width: { xs: 180, md: 250 },
          height: { xs: 180, md: 250 },
          borderRadius: "40% 60% 70% 30% / 50% 35% 65% 50%",
          backgroundColor: "secondary.main",
          opacity: 0.15,
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Main Content */}

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 800,
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{ mb: 2, color: "text.primary" }}>
          Lightning-fast & easy to use
        </Typography>

        <Typography variant="h6" sx={{ mb: 4, color: "text.secondary" }}>
          Generate beautiful landing pages inseconds with AI
        </Typography>

        <Box sx={{ display: "inline-flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              ...glowButtonStyle,
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CallToActionSection;
