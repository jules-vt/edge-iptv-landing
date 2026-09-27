import React from "react";
import { SchemaOrg } from "@/components/schema-org";

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrg lang="pt" />
      {children}
    </>
  );
}
