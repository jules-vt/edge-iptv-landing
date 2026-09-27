import React from "react";
import { SchemaOrg } from "@/components/schema-org";

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrg lang="de" />
      {children}
    </>
  );
}
