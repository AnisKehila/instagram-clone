"use client";
import React from "react";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import styles from "@/assets/styles/progress..css";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthContextProvider>{children}</AuthContextProvider>
      <ProgressBar
        options={{ showSpinner: false }}
        shallowRouting
        style={styles}
      />
    </>
  );
};

export default Providers;
