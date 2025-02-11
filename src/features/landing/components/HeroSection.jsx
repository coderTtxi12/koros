import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Button,
  keyframes,
  Fade,
  Slide,
  Grow,
  Zoom,
  Collapse,
} from "@mui/material";

import useVantaBirds from "../hooks/useVantaBirds";

import {
  containerStyleLeftColumn,
  containerStyleCenterColumn,
  glowButtonStyle,
} from "../../../styles/layoutStyles";

import useTransitions from "../../../hooks/useTransitions";

// Pulse animation keyframes for the gradient effect
const pulse = keyframes`
  0%   { transform: scale(1);   opacity: 0.7; }
  50%  { transform: scale(1.2); opacity: 0.3; }
  100% { transform: scale(1);   opacity: 0.7; }
`;

function HeroSection() {
  // Custom hook for navigation
  const navigate = useNavigate();

  const handleStart = () => {
    // Potentially do other logic here, e.g. call a REST API,
    // store something in Redux or context, etc.
    navigate("/prompt");
  };

  // Custom hook for transitions
  const transitions = useTransitions();

  // Custom hook for Vanta Brids background
  const { vantaRef } = useVantaBirds({
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x0,
    backgroundAlpha: 0,
    color1: 0xff1493, // Primary color
    color2: 0xff1493, // Secondary color
    birdSize: 1.5,
    wingSpan: 20.0,
    separation: 50.0,
    quantity: 5,

    onError: (error) => console.error("Vanta effect error:", error),
  });

  return (
    <Box
      ref={vantaRef}
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // This is a key variable when trainning the AI model or maybe it is not
        overflow: "hidden",
        // Gradient background layer
        background: (theme) => `
      radial-gradient(
        circle at 20% 20%,
        ${theme.palette.secondary.main}30 50%,
        transparent 85%
      ),
      linear-gradient(
        180deg,
        ${theme.palette.background.default} 20%,
        ${theme.palette.background.paper} 100%
      )
    `,
      }}
    >
      {/* Gradient */}

      <Box
        sx={{
          position: "absolute",
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
          background: (theme) => `
        radial-gradient(
          circle at 50% 50%,
          ${theme.palette.primary.main}30 0%,
          ${theme.palette.secondary.main}40 30%,
          ${theme.palette.primary.main}10 60%,
          transparent 70%
        )
      `,
          animation: `${pulse} 4s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      {/* Overlay layer */}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent black overlay
          zIndex: 1, // Between background and content
        }}
      />

      {/* Content container */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          ...containerStyleCenterColumn,
        }}
      >
        {/* Content */}

        <Box ref={transitions.fadeOnce.ref}>
          <Fade direction="up" in={transitions.fadeOnce.inView} timeout={1000}>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  color: "text.primary",
                }}
              >
                Build your landing page inseconds with AI
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                }}
              >
                No code, no headaches.
                <br />
                Instantly generates beautiful, high-converting landing pages
                with AI-powered.
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Call to action button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={glowButtonStyle}
          onClick={handleStart}
        >
          Get Started Now
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
