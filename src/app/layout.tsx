import React from "react";

import Layout2024 from "~/components/2024/layout/Layout";
import { LayoutProps } from "~/types";

export default async function Layout({ children }: LayoutProps) {
  return <Layout2024>{children}</Layout2024>;
}
