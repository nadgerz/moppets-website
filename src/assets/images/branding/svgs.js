import React from "react"
// import { themeColors } from '../css/themeColors';

const xmlns = "http://www.w3.org/2000/svg"


export const HiBubble = ( props ) =>
  <svg
    className="svg HiBubble"
    xmlns={xmlns}
    x="0px"
    y="0px"
    viewBox="0 0 105 90"
  >
  
  </svg>
;



export const Logo = ( props ) =>
  <svg
    height={'9rem'}
    width={'10.5rem'}
    className="svg logo"
    xmlns={xmlns}
    x="0px"
    y="0px"
    viewBox="0 0 105 90"
  >
    <path
      className="line"
      fill="none"
      stroke="#9D979E"
      // stroke-width="1px"
      d="M27.6,21.6c2.9-4.5,1.8-9.4-1.1-12.3c-3.5-3.5-13.4-4.9-18.5,5.6C2.4,26.4,9.5,48.2,4.5,88c2.8 - 8.9, 10.2 - 18.5, 15 - 20.1c4.6 - 1.6, 9.1, 2.5, 5.6, 7.6c - 2.1, 3 - 5.8, 4.8 - 9.4, 5c5.4, 2.6, 7, 5.5, 10.4, 6.9c4.1, 1.8, 7.1, 2, 11.7, 2H105"/>
    <path
      className="circle"
      fill={props.fill || "#FFEC7D"}
      d="M44.2,33c-2.1-8.1-8.5-13.5-17.2-12.3c-7.8,1.1-13.8,8.4-12.9,16.4c0.9,8.3,9.6,14.6,17.8,13.6C40.2, 49.8, 46.3, 41.2, 44.2, 33C44, 32.3, 45.4, 37.7, 44.2, 33z"/>
  </svg>
;

// svg width={standardWidth}
// height={standardHeight}
// xmlns={xmlns}
// className={'icon-home icon'}
// viewBox={`0 0 24 24`}>

// export const hiBubble = {
//   name: `hiBubble`,
//   xmlns: xmlns,
//   height: '3.8rem',
//   width: '3.8rem',
//   viewBox: '0 0 38 38',
//
//   fill: colors.quaternary,
//   path: 'M19,0C8.5,0,0,8.5,0,19s8.5,19,19,19s19-8.5,19-19S29.5,0,19,0z M27,20H14.8l5.6,5.2l-1.3,1.4L11,19l8.1-7.5l1.3,1.4L14.8,18H27V20z'
//
// };
