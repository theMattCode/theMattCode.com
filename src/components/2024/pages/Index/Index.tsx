import "./index.css";
import Link from "next/link";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { ContactBlock } from "~/components/2024/pages/Index/ContactBlock";

export default function IndexPage() {
  return (
    <>
      <div className="section">
        <div className="hero container">
          <div className="hero-text">
            <span>Hi!</span> I&apos;m Matthäus, a passionate senior full-stack
            developer.
          </div>
          <div className="hero-subtext">
            <p>Welcome to my personal corner of the web.</p>
            <p>
              As a technology enthusiast, I&apos;m always looking for secure and
              elegant solutions, thinking outside the box and getting things
              done.
            </p>
          </div>
        </div>
        <div className="social-media container">
          <Link
            href="https://github.com/themattcode"
            target="_blank"
            className="social-media-item"
          >
            <FaGithub className="social-media-icon" />
          </Link>
          <Link
            href="https://twitter.com/theMattCode"
            target="_blank"
            className="social-media-item"
          >
            <FaSquareXTwitter className="social-media-icon" />
          </Link>
        </div>
      </div>
      <div className="section">
        <ContactBlock />
      </div>
    </>
  );
}
