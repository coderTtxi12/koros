import React from "react";
import { Box, Typography } from "@mui/material";
import BenefitsMobileSection from "./BenefitsMobileSection";
import BenefitsDesktopSection from "./BenefitsDesktopSection";
import benefitsDb from "../data/landingDb";
import {
  containerStyleToolbar,
  containerStyleCenterColumn,
} from "../../../styles/layoutStyles";

function BenefitsSection() {
  return (
    <>
      {/* Desktop version: hidden on small screens */}

      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          ...containerStyleToolbar,
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: 10,
            pb: 4,
            mb: 0,
            textAlign: "center",
            color: "text.primary",
            display: { xs: "none", sm: "none", md: "block" }, // Add this line
          }}
        >
          Create stunning landing pages inseconds
        </Typography>

        {benefitsDb.map((benefit, index) => {
          // Reverse the order of the benefits on every odd index
          let reversed = index % 2 === 0 ? false : true;

          return (
            <BenefitsDesktopSection
              key={benefit.id}
              id={benefit.id}
              title={benefit.title}
              subtitle={benefit.subtitle}
              image={benefit.image}
              alt={benefit.alt}
              animation={benefit.animation}
              description={benefit.description}
              reversed={reversed}
            />
          );
        })}
      </Box>

      {/* Mobile version: shown only on small screens */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mt: 8,
            pb: 2,
            mb: 0,
            textAlign: "center",
            color: "text.primary",
          }}
        >
          Create stunning landing pages inseconds
        </Typography>
        {benefitsDb.map((benefit) => {
          return (
            <BenefitsMobileSection
              key={benefit.id}
              id={benefit.id}
              title={benefit.title}
              subtitle={benefit.subtitle}
              image={benefit.image}
              alt={benefit.alt}
              animation={benefit.animation}
              description={benefit.description}
            />
          );
        })}
      </Box>
    </>
  );
}

export default BenefitsSection;
