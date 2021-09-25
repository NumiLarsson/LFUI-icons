import * as React from "react";

function SvgCardBlock32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M3 9v2h22V9zM12 15v-2H6v2z" />
        <path d="M16 21H5c-.552 0-1-.447-1-.994V7.994c0-.55.443-.994.991-.994H23.01c.55 0 .991.442.991 1.006V16h2V8.006A2.991 2.991 0 0023.009 5H4.99A2.991 2.991 0 002 7.994v12.012A2.998 2.998 0 005 23h11v-2z" />
        <path d="M16.586 17l9.765 9.765 1.414-1.414L18 15.586z" />
        <path d="M22.5 27a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 2a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" />
      </g>
    </svg>
  );
}

export default SvgCardBlock32;