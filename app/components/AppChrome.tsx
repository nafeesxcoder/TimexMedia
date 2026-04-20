"use client";

import { WhatsAppFloat } from "./WhatsAppFloat";

export function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <WhatsAppFloat />
    </>
  );
}
