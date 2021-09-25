import * as React from "react";

function SvgCircle24(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgCircle24;