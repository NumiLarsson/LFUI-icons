import * as React from "react";

function SvgRadioRound32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" />
        <path d="M16 17.909a1.884 1.884 0 01-1.909-1.91c0-1.073.835-1.908 1.91-1.908 1.073 0 1.908.835 1.908 1.909A1.884 1.884 0 0116 17.909m0-7.818A5.915 5.915 0 0010.091 16a5.915 5.915 0 005.91 5.909 5.915 5.915 0 005.908-5.91A5.915 5.915 0 0016 10.092" />
      </g>
    </svg>
  );
}

export default SvgRadioRound32;