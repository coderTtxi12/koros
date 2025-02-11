import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function TestimonialCard(props) {
  return (
    <Paper
      elevation={0}
      sx={{
        minWidth: 280,
        maxWidth: 300,
        minHeight: 150,
        p: 3,
        borderRadius: 4,
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        mr: 3,
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          background: "rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      {/* Message */}
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          display: "-webkit-box",
          WebkitLineClamp: 8,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textAlign: "left",
          textOverflow: "ellipsis",
          whiteSpace: "normal",
          wordBreak: "break-word",
          maxWidth: 300,
          mb: 3,
          lineHeight: 1.6,
        }}
      >
        {props.comment}
      </Typography>

      {/* Name */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
        <Typography
          sx={{
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.95)",
            fontSize: "1rem",
          }}
        >
          {props.name}
        </Typography>
      </Box>

      {/* Title */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "0.875rem",
          }}
        >
          {props.title}
        </Typography>
      </Box>
    </Paper>
  );
}

export default TestimonialCard;
