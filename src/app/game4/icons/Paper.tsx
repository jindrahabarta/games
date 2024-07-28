import React from "react";

const Paper = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="url(#a)"
        d="M17.455 21.333c2.794 2.927 6.583 4.572 10.534 4.572H32a68.207 68.207 0 0 1 0-19.81h-4.01c-3.952 0-7.741-1.644-10.535-4.571v19.81Z"
      />
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M21.818 6.095H0v19.81a3.416 3.416 0 0 0 .118.894 3.732 3.732 0 0 0 .209.587 4.215 4.215 0 0 0 .31.572 4.986 4.986 0 0 0 .41.553 5.918 5.918 0 0 0 .505.527 7.101 7.101 0 0 0 .595.498 8.477 8.477 0 0 0 .679.462 9.81 9.81 0 0 0 .757.423 11.6 11.6 0 0 0 .828.38 13.476 13.476 0 0 0 1.356.48 15.797 15.797 0 0 0 1.467.363 17.4 17.4 0 0 0 1.547.239 18.652 18.652 0 0 0 1.593.11 19.488 19.488 0 0 0 3.186-.176 17.783 17.783 0 0 0 2.013-.402 15.833 15.833 0 0 0 1.397-.442 13.418 13.418 0 0 0 .86-.357 11.544 11.544 0 0 0 .793-.401 9.758 9.758 0 0 0 1.048-.68 7.905 7.905 0 0 0 .595-.497 6.496 6.496 0 0 0 .505-.527 5.423 5.423 0 0 0 .41-.553 4.644 4.644 0 0 0 .31-.572 3.935 3.935 0 0 0 .21-.587 3.616 3.616 0 0 0 .104-.595c.009-.1.013-.2.013-.3V6.096Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#c)"
        d="M10.91 12.19c6.024 0 10.908-2.728 10.908-6.095C21.818 2.73 16.934 0 10.91 0S0 2.729 0 6.095c0 3.367 4.884 6.096 10.91 6.096Z"
      />
      <path
        fill="url(#d)"
        d="M10.909 7.62c2.008 0 3.636-1.024 3.636-2.287 0-1.262-1.628-2.285-3.636-2.285S7.272 4.07 7.272 5.333c0 1.263 1.629 2.286 3.637 2.286Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={20.707}
          x2={31.898}
          y1={10.944}
          y2={10.867}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97D00" />
          <stop offset={1} stopColor="#FBC65F" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={0}
          x2={21.818}
          y1={15.632}
          y2={15.632}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FED783" />
          <stop offset={0.285} stopColor="#FDE0A2" />
          <stop offset={1} stopColor="#FAB127" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={10.909}
          x2={10.909}
          y1={12.287}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FCF1D6" />
          <stop offset={1} stopColor="#FFD272" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={10.909}
          x2={10.909}
          y1={3.048}
          y2={7.619}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAB227" />
          <stop offset={1} stopColor="#FA8E27" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Paper;
