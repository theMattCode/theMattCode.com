import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Matthäus Mayer",
    description: "Portfolio of Matthäus Mayer, full-stack developer",
  };
}

export default async function IndexPage() {
  return (
    <>
      <h1>Matth&auml;us Mayer</h1>
      <p>Full-stack Developer</p>
    </>
  );
}
