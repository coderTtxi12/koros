const sharedContainerStyles = {
    margin: "0 auto",
    maxWidth: "1400px",
    width: "95%",
    padding: 0,
    px: { xs: 2, md: 4 },
};

const containerStyleToolbar = {
    ...sharedContainerStyles,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

// This is a key value when trainning the AI model
// Style left column layout
const containerStyleLeftColumn = {
    ...sharedContainerStyles,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align items to the left
    textAlign: "left",
    "& > *": {
        // Target all direct children
        maxWidth: "600px", // Max width for content
        width: "100%",
    },
};

// This is a key value when trainning the AI model
// Style center column layout
const containerStyleCenterColumn = {

    ...sharedContainerStyles,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "& > *": {
        // Target all direct children
        maxWidth: "800px", // Max width for content

    },

};


// Call to action button style
const glowButtonStyle = {
    px: 4,
    py: 1.5,
    fontSize: "1.1rem",
    fontWeight: 600,
    boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}40`,
    "&:hover": {
        transform: "translateY(-2px)",
        transition: "all 0.2s",
    },
};


// Hover scale animation
const hoverScaleAnimation = {
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.02)",
    },
};




export { containerStyleToolbar, containerStyleLeftColumn, containerStyleCenterColumn, glowButtonStyle, hoverScaleAnimation };

