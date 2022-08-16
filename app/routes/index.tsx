import { Icon } from "~/components/Icon/Icon";
import iconStyles from "~/components/Icon/icon.css";
import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import { LinkDescriptor } from "@remix-run/server-runtime/dist/links";

type SiteMetadata = {
  name: string;
  role: string;
  location: string;
  media: {
    name: string;
    handle: string;
    url: string;
  }[];
};

export const loader: LoaderFunction = (): SiteMetadata => {
  return {
    name: "Matthäus Mayer",
    role: "Full-stack developer",
    location: "Reutlingen, BW, Germany",
    media: [
      {
        name: "GitHub",
        handle: "theMattCode",
        url: "https://github.com/theMattCode",
      },
      {
        name: "Twitter",
        handle: "@theMattCode",
        url: "https://twitter.com/theMattCode",
      },
      {
        name: "E-Mail",
        handle: "hello@theMattCode.com",
        url: "mailto:hello@theMattCode.com",
      },
    ],
  };
};

const createSVGLink = (href: string):LinkDescriptor => ({ href, rel: "preload", as: "image", type: "image/svg+xml", crossOrigin: "anonymous" })

export const links: LinksFunction = () => [
  createSVGLink("/icons/email.svg"),
  createSVGLink("/icons/github.svg"),
  createSVGLink("/icons/location.svg"),
  createSVGLink("/icons/twitter.svg"),
  { rel: "stylesheet", href: iconStyles },
];

export default function Index() {
  const siteMetadata = useLoaderData<SiteMetadata>();
  return (
    <main>
      <h1 className="bold">{siteMetadata.name}</h1>
      <p>{siteMetadata.role}</p>
      <div className="italic low-opacity flex-h">
        <Icon name="Location" />
        {siteMetadata.location}
      </div>
      <p className="flex-h">
        {siteMetadata.media!.map((entry: any) => (
          <a href={entry.url} key={entry.name} className="pad-r-m">
            <Icon name={entry.name} />
          </a>
        ))}
      </p>
    </main>
  );
}
