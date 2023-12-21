import React from "react";
import "./base.css";
import "./layout.css";
import { Logo } from "~/components/2024/logo/Logo";
import Link from "next/link";
import { GrCode } from "react-icons/gr";
import { PiHeartFill } from "react-icons/pi";
import { PiCopyright } from "react-icons/pi";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header className="header-bar">
          <nav className="nav container">
            <Link href="/">
              <Logo />
            </Link>
            <div className="nav-items">
              {/*
              <Link className="nav-item" href="/">
                Projects
              </Link>
              <Link className="nav-item" href="/">
                Blog
              </Link>
              */}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <span>
            <GrCode /> with <PiHeartFill />
            by Matth&auml;us Mayer <PiCopyright />
            {new Date().getFullYear()}
          </span>
          <span>
            <Link href="/terms-of-service-and-privacy">
              Terms of Service & Privacy
            </Link>
          </span>
        </footer>
      </body>
    </html>
  );
}
