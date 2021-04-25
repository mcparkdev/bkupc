import { useState, useEffect } from "react";

function giveItemsPerRow (windowSize){
  const {width, dpr} = windowSize
  if (!!width && !!dpr){
    const trueWidth = width / dpr
    if(trueWidth / dpr < 562) return 1
    else if (trueWidth < 976) return 2
    else if (trueWidth < 1258) return 3
    else if (trueWidth < 2163) return 4
    else return 5
  }
  else return 1
} 

export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    dpr: 1,
  });
  const xs = 600 * windowSize.dpr
  const sm = 960 * windowSize.dpr
  const md = 1280 * windowSize.dpr
  const lg = 1920 * windowSize.dpr
  const itemsPerRow = giveItemsPerRow(windowSize)
  const viewport = { ...windowSize, xs, sm, md, lg, isMobile:windowSize.width <= sm, isDesktop: windowSize.width > md, itemsPerRow}
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return viewport;
}
