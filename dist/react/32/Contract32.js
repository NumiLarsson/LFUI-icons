import * as React from "react";

function SvgContract32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path fillRule="nonzero" d="M7 27V5h16v5h2V3H5v26h20v-5h-2v3z" />
        <path
          fillRule="nonzero"
          d="M10 11h10V9H10zM10 15h10v-2H10zM10 19h7v-2h-7zM13 25h7v-2h-7z"
        />
        <path
          d="M26.378 13.214l-8.364 8.364v1.414h1.414l8.364-8.364-1.414-1.414zm-6.121 11.778h-4.243V20.75l10.364-10.364 4.243 4.242-10.364 10.364z"
          fillRule="nonzero"
        />
        <path d="M24.914 13.5l2.829 2.828-1.415 1.414-2.828-2.828z" />
      </g>
    </svg>
  );
}

export default SvgContract32;