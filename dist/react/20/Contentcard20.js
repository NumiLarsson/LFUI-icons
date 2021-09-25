import * as React from "react";

function SvgContentcard20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <path
          d="M19 3v14H1V3h18zm-2 2H3v10h14V5zm-7 2a3 3 0 013 3h-2a1 1 0 10-1 1v2a3 3 0 110-6z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgContentcard20;