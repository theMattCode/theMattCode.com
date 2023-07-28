import styles from "./root.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction, MetaFunction } from "@remix-run/server-runtime";

export const meta: MetaFunction = () => {
  return { title: "Matthäus Mayer - Full-stack developer" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "icon", type: "image/png", href: "/favicon.png" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap",
    },
    { rel: "stylesheet", href: styles },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body data-theme="dark">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
