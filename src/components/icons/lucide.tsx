import { forwardRef } from "react";
import type { ReactNode, SVGProps } from "react";

type BaseProps = Omit<SVGProps<SVGSVGElement>, "role" | "viewBox" | "xmlns"> & { size?: number };

const Base = forwardRef<SVGSVGElement, BaseProps>(({ d, size = 16, width = size, height = size, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    width={width}
    height={height}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  />
));

type IconProps = Omit<BaseProps, "children">;

const create = (children: ReactNode) =>
  forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Base ref={ref} {...props}>
      {children}
    </Base>
  ));

/**
 * How to add icons ?
 *
 * - Go to https://lucide.dev/icons
 *
 * - Copy the icon as SVG, example:
 *    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
 *      <path d="M18 6 6 18" />
 *      <path d="m6 6 12 12" />
 *    </svg>
 *
 * - create component with `create` function then copy paste path elements, example:
 *    export const IconX = create(
 *      <>
 *        <path d="M18 6 6 18" />
 *        <path d="m6 6 12 12" />
 *      </>
 *    );
 */

// TODO : update icons

export const IconAngular = create(
<svg viewBox="0 0 128 128">
<linearGradient id="a" x1="14.704" x2="110.985" y1="46.27" y2="92.024" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e40035"></stop><stop offset=".24" stop-color="#f60a48"></stop><stop offset=".352" stop-color="#f20755"></stop><stop offset=".494" stop-color="#dc087d"></stop><stop offset=".745" stop-color="#9717e7"></stop><stop offset="1" stop-color="#6c00f5"></stop></linearGradient><path fill="url(#a)" d="m124.5 21.3-4.4 68.6L78.3 0l46.2 21.3zm-29 88.7L64 128l-31.5-18 6.4-15.5h50.3l6.3 15.5zM64 34.1l16.5 40.2h-33L64 34.1zM7.9 89.9 3.5 21.3 49.7 0 7.9 89.9z"></path><linearGradient id="b" x1="28.733" x2="91.742" y1="117.071" y2="45.195" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff31d9"></stop><stop offset="1" stop-color="#ff5be1" stop-opacity="0"></stop></linearGradient><path fill="url(#b)" d="m124.5 21.3-4.4 68.6L78.3 0l46.2 21.3zm-29 88.7L64 128l-31.5-18 6.4-15.5h50.3l6.3 15.5zM64 34.1l16.5 40.2h-33L64 34.1zM7.9 89.9 3.5 21.3 49.7 0 7.9 89.9z"></path>
</svg>
);

export const IconLinkedin = create(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </>
);

export const IconArrowRight = create(
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>
);

export const IconExternalLink = create(
  <>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </>
);

export const IconImage = create(
  <>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </>
);

export const IconUser = create(
  <>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>
);



