"use client";
import { AuthProvider } from "@/components/AuthProvider";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers; 