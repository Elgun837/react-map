import { useState, useEffect } from "react";

function ScreenSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "black",
        color: "white",
        textAlign: "center",
        padding: "5px",
        fontFamily: "monospace",
        zIndex: 9999,
      }}
    >
      Width: {size.width}px | Height: {size.height}px
    </div>
  );
}
export default ScreenSize;