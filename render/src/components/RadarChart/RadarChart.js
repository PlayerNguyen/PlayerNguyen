import React, { useEffect, useState } from "react";

export default function RadarChart({ frameSize, data }) {
  // const DEFAULT_SIZE = 128;
  // const DEFAULT_FRAME_COLOR = "#e3e3e3";
  // const TOTAL_FRAME_NUMBER = 3;
  // const DEFAULT_DOT_SIZE = 3;

  // const [minMax, setMinMax] = useState([-1, -1]);

  // const getCurrentFrameSize = () => {
  //   return `${frameSize || DEFAULT_SIZE}`;
  // };

  // const getCenter = () => {
  //   return getCurrentFrameSize() / 2;
  // };

  // let min = data[0].value;
  // let max = data[0].value;
  // for (let i = 0; i < data.length; i++) {
  //   let v = data[i].value;
  //   max = Math.max(v, max);
  //   min = Math.min(v, min);
  // }

  // return (
  //   <div
  //     className="radar-chart-wrapper"
  //     style={{
  //       width: `${getCurrentFrameSize()}px`,
  //       height: `${getCurrentFrameSize()}px`,
  //       position: "relative",
  //       // background: "red",
  //     }}
  //   >
  //     <div
  //       className="radar-frame"
  //       style={{
  //         position: "absolute",
  //         width: getCurrentFrameSize(),
  //         height: getCurrentFrameSize(),
  //         // background: "blue",
  //         borderRadius: "50%",
  //         border: "1px solid gray",
  //       }}
  //     >
  //       {/* Sub-frames */}
  //       {[...Array(TOTAL_FRAME_NUMBER)].map((_item, index) => {
  //         const affectSize =
  //           getCurrentFrameSize() * ((index + 2) / (TOTAL_FRAME_NUMBER + 2));

  //         // Build a style for frame outline
  //         const frameOutlineStyle = {
  //           position: "absolute",
  //           width: `${affectSize}px`,
  //           height: `${affectSize}px`,
  //           //backgroundColor:
  //           //colorFrame[Math.floor(Math.random() * colorFrame.length)],
  //           backgroundOpacity: ".5",
  //           borderRadius: "50%",
  //           border: "1px solid #e5e5e5",
  //           top: `${getCenter() - affectSize / 2}px`,
  //           left: `${getCenter() - affectSize / 2}px`,
  //         };

  //         return (
  //           <div
  //             className="radar-frame-outline"
  //             key={index}
  //             style={frameOutlineStyle}
  //           ></div>
  //         );
  //       })}
  //     </div>

  //     {/* Point */}
  //     <div
  //       className="radar-chart-point-wrapper"
  //       style={{ width: getCurrentFrameSize(), height: getCurrentFrameSize() }}
  //     >
  //       {/* Center dot */}
  //       {/* <span
  //         className="point"
  //         style={{
  //           width: `${DEFAULT_DOT_SIZE}px`,
  //           height: `${DEFAULT_DOT_SIZE}px`,
  //           borderRadius: "50%",
  //           backgroundColor: DEFAULT_FRAME_COLOR,
  //           position: "absolute",

  //           left: `${getCurrentFrameSize() / 2 - DEFAULT_DOT_SIZE / 2}px`,
  //           top: `${getCurrentFrameSize() / 2 - DEFAULT_DOT_SIZE / 2}px`,
  //           zIndex: 30,
  //         }}
  //       ></span> */}
  //       {[...data].map((_, index) => {
  //         const r = getCurrentFrameSize() / 2;

  //         const dotSize = DEFAULT_DOT_SIZE;
  //         const currentTheta = index * 2 * (Math.PI / data.length);

  //         const illustrateTheta = currentTheta - Math.PI / 2;
  //         let xPosition = r;
  //         xPosition += r * Math.cos(illustrateTheta);

  //         let yPosition = r;
  //         yPosition += r * Math.sin(illustrateTheta);

  //         // Text offset
  //         let textOffset = 18; // as pixel
  //         let xTextPosition = r;
  //         xTextPosition += (r + textOffset) * Math.cos(illustrateTheta);
  //         let yTextPosition = r;
  //         yTextPosition += (r + textOffset) * Math.sin(illustrateTheta);

  //         //

  //         return (
  //           <div className="point-wrapper text-zinc-600" key={index}>
  //             {/* Draw line from center to point */}
  //             <span
  //               style={{
  //                 width: `${r - 1}px`,
  //                 height: `1px`,
  //                 borderBottom: `1px solid #e5e5e5`,
  //                 position: "absolute",
  //                 transform: `rotate(${illustrateTheta}rad)`,
  //                 left: `${r}px`,
  //                 top: `${r}px`,
  //                 transformOrigin: "0 0.5px", // This will make feel more center when the span rotated
  //                 borderTopLeftRadius: "50%",
  //                 borderBottomLeftRadius: "50%",
  //               }}
  //             ></span>

  //             {/* Plot the value point */}
  //             <span
  //               className="point"
  //               style={{
  //                 width: `${dotSize}px`,
  //                 height: `${dotSize}px`,
  //                 borderRadius: "50%",
  //                 backgroundColor: DEFAULT_FRAME_COLOR,
  //                 position: "absolute",

  //                 left: `${xPosition - dotSize / 2}px`,
  //                 top: `${yPosition - dotSize / 2}px`,
  //                 opacity: "1",
  //               }}
  //             ></span>

  //             {/* Name */}
  //             <span
  //               className="name"
  //               style={{
  //                 position: "absolute",
  //                 fontSize: "12px",
  //                 whiteSpace: "nowrap",
  //                 left: `${xTextPosition}px`,
  //                 top: `${yTextPosition}px`,
  //               }}
  //             >
  //               {_.name}
  //             </span>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  return <></>;
}
