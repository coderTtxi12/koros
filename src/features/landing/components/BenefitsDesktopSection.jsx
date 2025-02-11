import React from "react";
import { Box, Grid, Typography, Button, Fade } from "@mui/material";
import { glowButtonStyle } from "../../../styles/layoutStyles";
import useTransitions from "../../../hooks/useTransitions";
import Animation from "./Animation";

function BenefitsDesktopSection(props) {
  // Custom hook for transitions
  const transitions = useTransitions();
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      sx={{
        mb: { md: 8 },
        py: 6, // Add vertical padding
        display: { xs: 'none', sm: 'none', md: 'flex' } // Add this line
      }}
      direction={{ md: props.reversed ? "row-reverse" : "row" }}
    >
      <Grid item md={6}>
        {/* Title */}

        <Box ref={transitions.fade.ref}>
          <Fade direction="up" in={transitions.fade.inView} timeout={1000}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  color: "primary.main",
                  mb: 1,
                  display: "block",
                  textAlign: "left",
                }}
              >
                {props.title}
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Subtitle */}

        <Box ref={transitions.fade.ref}>
          <Fade direction="up" in={transitions.fade.inView} timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  color: "text.primary",
                  textAlign: "left",
                }}
              >
                {props.subtitle}
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Description */}

        <Box ref={transitions.fade.ref}>
          <Fade direction="up" in={transitions.fade.inView} timeout={1000}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  mb: 4, // Increased spacing
                  textAlign: "left",
                  lineHeight: 1.6, // Improved readability
                }}
              >
                {props.description}
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Call-to-action button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={glowButtonStyle}
        >
          Get Started Now
        </Button>
      </Grid>

      {/* Animation */}
      <Grid item md={6}>
        <Box ref={transitions.fade.ref}>
          <Fade direction="up" in={transitions.fade.inView} timeout={1000}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                position: "relative",
                backgroundColor: (theme) =>
                  `${theme.palette.background.paper}80`,

                // Rounded corners
                borderRadius: 2,

                // Positioning
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                // Shadow
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.6)",
                overflow: "hidden",
              }}
            >
              <Animation
                lottieSrc={props.animation}
                alt="My cool animation"
                autoplay
                loop
              />
            </Box>
          </Fade>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BenefitsDesktopSection;
