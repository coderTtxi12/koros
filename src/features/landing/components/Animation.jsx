import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";

const Animation = ({
  lottieSrc, // JSON data for your animation
  alt, // alt-like prop, not natively used by Player but good for accessibility/semantics
  autoplay = true,
  loop = true,
  boxSx = {}, // Allows you to merge additional styling into the container
  ...playerProps // Pass any other Player props (e.g. speed, controls, etc.)
}) => {
  return (
    <Box
      sx={{
        width: "50%",
        height: "50%",
        aspectRatio: "1 / 1", // Keep it square
        overflow: "hidden",
        backgroundColor: "transparent",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)", // Subtle zoom
        },
        ...boxSx, // Merge any extra Box styling
      }}
    >
      <Player
        src={lottieSrc}
        autoplay={autoplay}
        loop={loop}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        {...playerProps}
      />
    </Box>
  );
};

export default Animation;
