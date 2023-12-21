import { LayoutProps } from "~/types";

export default async function Layout({ children }: LayoutProps) {
  return <div className="container">{children}</div>;
}
