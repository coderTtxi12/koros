import React from "react";
import { Box, Grid, Typography, Button, Fade } from "@mui/material";
import { glowButtonStyle } from "../../../styles/layoutStyles";
import useTransitions from "../../../hooks/useTransitions";
import Animation from "./Animation";

function BenefitsMobileSection(props) {
  // Custom hook for transitions
  const transitions = useTransitions();

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Grid container spacing={2}>
        {/* Title */}
        <Grid item xs={12}>
          <Box ref={transitions.fadeOnce.ref}>
            <Fade
              direction="up"
              in={transitions.fadeOnce.inView}
              timeout={1000}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.main",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {props.title}
                </Typography>
              </Box>
            </Fade>
          </Box>
        </Grid>

        {/* Subtitle */}

        <Grid item xs={12}>
          <Box ref={transitions.fadeOnce.ref}>
            <Fade
              direction="up"
              in={transitions.fadeOnce.inView}
              timeout={1000}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "text.primary",
                    textAlign: "center",
                    mb: 2,
                  }}
                >
                  {props.subtitle}
                </Typography>
              </Box>
            </Fade>
          </Box>
        </Grid>

        {/* Animation */}
        <Grid item xs={12}>
          <Box ref={transitions.fadeOnce.ref}>
            <Fade
              direction="up"
              in={transitions.fadeOnce.inView}
              timeout={1000}
            >
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "80%",
                  },
                  mx: { sm: "auto" },
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

        {/* Description */}

        <Grid item xs={12}>
          <Box ref={transitions.fadeOnce.ref}>
            <Fade
              direction="up"
              in={transitions.fadeOnce.inView}
              timeout={1000}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    color: "text.secondary",
                    mb: 2,
                  }}
                >
                  {props.description}
                </Typography>
              </Box>
            </Fade>
          </Box>
        </Grid>

        {/* Call-to-action button */}
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{
              ...glowButtonStyle,
              minWidth: 200,
            }}
          >
            Get Started Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BenefitsMobileSection;
