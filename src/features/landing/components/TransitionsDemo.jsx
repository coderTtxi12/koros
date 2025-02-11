import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Typography,
  Fade,
  Slide,
  Grow,
  Zoom,
  Collapse,

} from "@mui/material";

function TransitionsDemo() {
  // -- Intersection Observer Hooks (auto-trigger transitions when in view) --
  const { ref: fadeRef, inView: fadeInView } = useInView({ triggerOnce: false });
  const { ref: slideRef, inView: slideInView } = useInView({ triggerOnce: false });
  const { ref: growRef, inView: growInView } = useInView({ triggerOnce: false });
  const { ref: zoomRef, inView: zoomInView } = useInView({ triggerOnce: false });
  const { ref: collapseRef, inView: collapseInView } = useInView({ triggerOnce: false });


  return (
    <Box p={2}>
      {/* --------------- Fade --------------- */}
      <Typography variant="h6" gutterBottom>
        Fade Transition
      </Typography>
      <Box ref={fadeRef} mb={4}>
        <Fade in={fadeInView} timeout={1000}>
          <Box p={2} sx={{ bgcolor: "secondary.light" }}>
            This box fades in when in view
          </Box>
        </Fade>
      </Box>

      {/* --------------- Slide --------------- */}
      <Typography variant="h6" gutterBottom>
        Slide Transition
      </Typography>
      <Box ref={slideRef} mb={4}>
        <Slide direction="left" in={slideInView} timeout={1000} mountOnEnter unmountOnExit>
          <Box p={2} sx={{ bgcolor: "success.light" }}>
            This box slides in when in view
          </Box>
        </Slide>
      </Box>

      {/* --------------- Grow --------------- */}
      <Typography variant="h6" gutterBottom>
        Grow Transition
      </Typography>
      <Box ref={growRef} mb={4}>
        <Grow in={growInView} timeout={1000}>
          <Box p={2} sx={{ bgcolor: "info.light" }}>
            This box grows in when in view
          </Box>
        </Grow>
      </Box>

      {/* --------------- Zoom --------------- */}
      <Typography variant="h6" gutterBottom>
        Zoom Transition
      </Typography>
      <Box ref={zoomRef} mb={4}>
        <Zoom in={zoomInView} timeout={1000}>
          <Box p={2} sx={{ bgcolor: "warning.light" }}>
            This box zooms in when in view
          </Box>
        </Zoom>
      </Box>

      {/* --------------- Collapse --------------- */}
      <Typography variant="h6" gutterBottom>
        Collapse Transition
      </Typography>
      <Box ref={collapseRef} mb={4}>
        <Collapse in={collapseInView} timeout={1000}>
          <Box p={2} sx={{ bgcolor: "error.light" }}>
            This box collapses when in view
          </Box>
        </Collapse>
      </Box>

     
    </Box>
  );
}

export default TransitionsDemo;
