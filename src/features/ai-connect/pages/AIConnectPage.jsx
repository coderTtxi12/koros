import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../../../layout/Header";
import PromptSection from "../components/PromptSection";

function AIConnectPage() {
  return (
    <>
      <CssBaseline />
      <Header landing={false} />
      <PromptSection />
    </>
  );
}

export default AIConnectPage;
