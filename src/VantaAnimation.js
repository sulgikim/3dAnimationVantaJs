import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import CELLS from "vanta/dist/vanta.cells.min";
import FOG from "vanta/dist/vanta.fog.min";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(innerWidth, innerHeight);
  return {
    width,
    height
  };
}

export default VantaAnimation = (props) => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  // const { screenHeight, screenWidth } = useWindowDimensions();
  // console.log("screenWidth: " + screenWidth + " screenHeight: " + screenHeight);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    if (!vantaEffect) {
      setVantaEffect(
        /******** BIRDS *******/
        // VANTA.BIRDS({
        //   el: vantaRef.current,
        //   birdSize: 2,
        //   mouseControls: true,
        //   touchControls: true,
        //   gyroControls: false
        // })

        /******** CELLS *******/
        // VANTA.CELLS({
        //   el: vantaRef.current,
        //   color1: 0x8c8c,
        //   color2: 0xf2e735,
        //   size: 0.6,
        //   speed: 1.5,
        //   minHeight: 1000.0,
        //   minWidth: 500.0
        // })

        /******** FOG *******/
        VANTA.FOG({
          el: vantaRef.current,
          highlightColor: "#c8e981",
          midtoneColor: "#f4d380",
          lowlightColor: "#c8e981",
          baseColor: "#c3e3fe",
          // blurFactor: 0.73,
          speed: 5.0,
          zoom: 1.1,
          minHeight: 300.0,
          minWidth: 300.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [vantaEffect]);
  return (
    <div
      className="vanta"
      ref={vantaRef}
      style={{ width: windowDimensions.width, height: windowDimensions.height }}
    >
      <span>Sulgi Kim</span>
    </div>
  );
};
