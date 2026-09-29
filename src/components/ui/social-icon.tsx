import paths from "./social-icon-paths.json";

export function SocialIcon({ name }: { name: keyof typeof paths }) {
  return (
    <svg
      className="social-icon size-[max(22px,1.5em)] fill-current stroke-none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
