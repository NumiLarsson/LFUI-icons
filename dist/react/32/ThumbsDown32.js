import * as React from "react";

function SvgThumbsDown32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M9.847 28l.69-4.83 1.24-2.17H4v-6h.501L4.5 12h.501L5 9h.501L5.5 6h12.662L23 7.613V5h5v17h-5v-3h-1.381l-1.28 2.557-3.024 3.53L15.566 28H9.847zm15.154-8h1V7h-1v13zm-12.848 6h2.282l1.208-2.014.098-.137 2.92-3.405L20.382 17H23V9.721L17.837 8H7.501v.586L9.914 11H7.001v.586L9.421 14H6.5v.586L8.921 17H6v2h9.222l-2.76 4.833-.31 2.167z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgThumbsDown32;