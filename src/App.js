import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./App.css";

export default function App() {
  const x = useMotionValue(0);
  // Mapping from range, distance travelled on the x-axis
  const input = [-2, -162];
  const input2 = [-2, -81, -162];
  // SVG path, keyframes to interpolate between
  const keyframesOverlay = [
    "M 269.60295,826 V -136 H 228 V 287 C 228,317.13885 190,314.87925 190,345 190,375.12075 228,372.96796 228,403 V 826 Z",
    "M 269.60295,826 V -136 H -11 V 287 C -11,317.33323 -11.001,325 -11.001,345 -11.001,365 -11,372.66677 -11,403 V 826 Z",
  ];
  const keyframesHamburgerTopLine = [
    "M 26.5,33.001 C 26.5,33.001 42.166667,33.001167 50,33.001 57.833333,33.000833 73.5,33 73.5,33",
    "M 44.413445,28.694884 C 44.413445,28.694884 53.994133,27.603668 61.798759,31.536421 69.603385,35.469174 73.5,39.889787 73.5,39.889787",
    "M 61.041546,38.269049 C 61.041546,38.269049 65.195591,42.179365 67.272,44.134524 69.348409,46.089683 73.5,50 73.5,50",
  ];
  const keyframesHamburgerBottomLine = [
    "M 26.5,67 C 26.5,67 42.166667,67.001 50,67.001 57.833333,67.001 73.5,67 73.5,67",
    "M 44.413445,71.248903 C 44.413445,71.248903 53.994133,72.340119 61.798759,68.407366 69.603385,64.474613 73.5,60.054 73.5,60.054",
    "M 61.041546,61.730951 C 61.041546,61.730951 65.194364,57.820634 67.270773,55.865476 69.347182,53.910317 73.5,50 73.5,50",
  ];
  const menuRange = [280, 0];
  const iconRange = [0, -200];
  const menuX = useTransform(x, input, menuRange);
  const iconX = useTransform(x, input, iconRange, { clamp: false });
  const d = useTransform(x, input, keyframesOverlay, { clamp: false });
  const d2 = useTransform(x, input2, keyframesHamburgerTopLine);
  const d3 = useTransform(x, input2, keyframesHamburgerBottomLine);
  const constraintsRef = useRef(null);
  return (
    <div className="App">
      <motion.div className="container" ref={constraintsRef}>
        <div className="subtitle">Some subtitle</div>
        <div className="title">Some Title</div>
        <div className="body">
          Some body text about yada yada blah blah this is the greatest site
          ever or something similar
        </div>
        <svg className="overlay" viewBox="0 0 238 526" height="526" width="238">
          <motion.path d={d} />
        </svg>
        <motion.svg
          className="icon"
          style={{ x: iconX }}
          viewBox="0 0 100 100"
          height="100px"
          width="100px"
        >
          <circle r="50" cy="50" cx="50" id="path1078" className="icon-drop" />
          <motion.path className="icon-line" id="lineTop" d={d2} />
          <motion.path className="icon-line" d={d3} id="lineMiddle" />
          <path className="icon-line" id="lineMiddle" d="M 26.5,50 H 73.5" />
        </motion.svg>
        <motion.div className="menu" style={{ x: menuX }}>
          <div className="menu-title">Menu Title</div>
          <div class="menu-options">
            <div className="menu-option">Menu option 1</div>
            <div className="menu-option">Menu option 2</div>
            <div className="menu-option">Menu option 3</div>
          </div>
        </motion.div>
        <motion.div
          className="drag-box"
          drag="x"
          dragConstraints={constraintsRef}
          style={{ x }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
