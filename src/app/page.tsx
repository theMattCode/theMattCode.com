import { Metadata } from "next";
import { LinkButton } from "./components/button/LinkButton";

export function generateMetadata(): Metadata {
  return {
    title: "Matthäus Mayer",
    description: "Portfolio of Matthäus Mayer, full-stack developer",
  };
}

export default async function IndexPage() {
  return (
    <div className="flex flex-col items-center p-6 gap-6">
      <div className="animate-[fade-in_1s_linear] px-4 border-l border-gray-500 font-light">
        <div className="text-xl">Hi, I&apos;m</div>
        <h1 className="text-4xl uppercase font-bold">Matth&auml;us Mayer</h1>
        <h2>Full-stack developer and creator</h2>
      </div>
      <div className="opacity-0 animate-[fade-in_1s_linear_1s_forwards] gap-4">
        <LinkButton
          text="GitHub"
          href="https://www.github.com/theMattCode"
          isExternal={true}
        />
        <LinkButton
          text="Twitter/X"
          href="https://twitter.com/theMattCode"
          isExternal={true}
        />
      </div>
    </div>
  );
}
