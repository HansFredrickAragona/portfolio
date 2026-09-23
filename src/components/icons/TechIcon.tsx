import { techIconPaths, type TechIconId } from "./techIconPaths";

export type TechIconProps = {
  id: TechIconId;
  className?: string;
  title?: string;
};

export function TechIcon({ id, className = "", title }: TechIconProps) {
  const meta = techIconPaths[id];
  const label = title ?? meta.title;

  return (
    <svg
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      focusable="false"
    >
      {title ? <title>{label}</title> : null}
      <path d={meta.path} />
    </svg>
  );
}
