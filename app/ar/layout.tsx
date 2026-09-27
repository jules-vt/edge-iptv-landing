import React from "react";
import { SchemaOrg } from "@/components/schema-org";

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrg lang="ar" />
      {children}
    </>
  );
}
