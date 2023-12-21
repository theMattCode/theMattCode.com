import { Metadata } from "next";

import IndexPage2024 from "~/components/2024/pages/Index/Index";

export function generateMetadata(): Metadata {
  return {
    title: "Matthäus Mayer",
    description: "Portfolio of Matthäus Mayer, full-stack developer",
  };
}

export default async function IndexPage() {
  return <IndexPage2024 />;
}
