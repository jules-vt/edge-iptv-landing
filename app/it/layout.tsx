import React from "react";
import { SchemaOrg } from "@/components/schema-org";

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrg lang="it" />
      {children}
    </>
  );
}
