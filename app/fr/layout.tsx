import React from "react";
import { SchemaOrg } from "@/components/schema-org";

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrg lang="fr" />
      {children}
    </>
  );
}
