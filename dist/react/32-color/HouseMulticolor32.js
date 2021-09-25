import * as React from "react";

function SvgHouseMulticolor32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fillRule="nonzero" fill="none">
        <path
          fill="#005AA0"
          d="M30.392 16.265l1.216-1.588L16.004 2.74.393 14.676l1.214 1.59L16.004 5.258z"
        />
        <path
          fill="#E30613"
          d="M18.392 12.088l1.216-1.588L16 7.74 12.393 10.5l1.214 1.589 2.394-1.83z"
        />
        <path
          fill="#005AA0"
          d="M14 19h4v8h2V17h-8v10h2zM4 12v15h2V12zM26 12v15h2V12z"
        />
      </g>
    </svg>
  );
}

export default SvgHouseMulticolor32;