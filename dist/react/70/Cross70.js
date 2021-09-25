import * as React from "react";

function SvgCross70(props) {
  return (
    <svg
      width={70}
      height={70}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path d="M23 7v14h14v2H23v14h-2V23H7v-2h14V7h2z" id="cross-70_svg__a" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          transform="rotate(45 12.808 44.192)"
          xlinkHref="#cross-70_svg__a"
        />
      </g>
    </svg>
  );
}

export default SvgCross70;