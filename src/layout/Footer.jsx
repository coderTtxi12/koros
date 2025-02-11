import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  containerStyleCenterColumn,
  containerStyleToolbar,
  containerStyleLeftColumn,
  glowButtonStyle,
  hoverScaleAnimation,
} from "../styles/layoutStyles";

function Footer() {
  // Function to get current year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Box
      component="footer"
      sx={{
        ...containerStyleToolbar,
        flexDirection: "column",
        mt: 8,
        pt: 6,
        pb: 4,
      }}
    >
      {/* Main footer content section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "flex-start" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 4, sm: 0 },
          mb: 6,
        }}
      >
        {/* Brand section */}
        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 1,
              ...hoverScaleAnimation,
            }}
          >
            inseconds.ai
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Generate beautiful landing pages in seconds with AI
          </Typography>
        </Box>

        {/* Navigation links section */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Link
            href="/how-it-works"
            underline="none"
            sx={{ color: "text.primary" }}
          >
            How it works
          </Link>
          <Link href="/privacy" underline="none" sx={{ color: "text.primary" }}>
            Privacy
          </Link>
          <Link href="/terms" underline="none" sx={{ color: "text.primary" }}>
            Terms
          </Link>
        </Box>
      </Box>

      <Divider sx={{ width: "100%" }} />

      {/* Bottom footer section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
          mt: 4,
        }}
      >
        {/* Copyright section */}
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          © {getCurrentYear()}&nbsp;&nbsp;
          <Box component="span" sx={{ color: "text.primary" }}>
            inseconds.ai
          </Box>
        </Typography>

        {/* Social media links section */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link
            href="https://linkedin.com"
            target="_blank"
            sx={{ color: "text.primary" }}
          >
            <LinkedInIcon fontSize="medium" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            sx={{ color: "text.primary" }}
          >
            <TwitterIcon fontSize="medium" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
