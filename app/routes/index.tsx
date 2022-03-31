import { Icon } from "~/components/Icon/Icon";
import iconStyles from "~/components/Icon/icon.css";
import { LinksFunction, LoaderFunction, useLoaderData } from "remix";

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

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/icons/email.svg",
    as: "image",
    type: "image/svg+xml",
  },
  {
    rel: "preload",
    href: "/icons/github.svg",
    as: "image",
    type: "image/svg+xml",
  },
  {
    rel: "preload",
    href: "/icons/location.svg",
    as: "image",
    type: "image/svg+xml",
  },
  {
    rel: "preload",
    href: "/icons/twitter.svg",
    as: "image",
    type: "image/svg+xml",
  },
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
