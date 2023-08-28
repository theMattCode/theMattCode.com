type Props = {
  text?: string;
  href: string;
  isExternal?: boolean;
};
export function LinkButton({ text, href, isExternal = false }: Props) {
  return (
    <a
      className="border border-amber-600 rounded-2xl px-4 py-1 self-center"
      href={href}
      target={isExternal ? "_blank" : undefined}
    >
      {text}
    </a>
  );
}
