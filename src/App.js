import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const adjustContentDivWidth = () => {
      // set pnel and content div widths
      const w = document.getElementById("main-content-div");
      const sidePanelWidth = parseInt(
        window
          .getComputedStyle(document.getElementById("side-panel"), null)
          ["width"].replace("px", "")
      );
      w.style.width = `${window.innerWidth - sidePanelWidth}px`;
      return w.style.width;
    };
    window.addEventListener("resize", adjustContentDivWidth);
    adjustContentDivWidth(); // initial rendering after DOM Loads
  }, []);

  return (
    <div style={{ display: "inline" }}>
      <div
        id="side-panel"
        style={{
          position: "fixed",
          width: "23%",
          height: "100%",
          margin: "0px",
          // backgroundImage: `url("./assets/him.jpg")`,
          minWidth: "300px",
          zIndex: "6",
          boxShadow: "1px 0px 8px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ margin: "20px", textAlign: "center" }}>
          <button className="btn-grad" style={{ width: "80%" }}>
            Dashboard
          </button>
        </div>
      </div>
      <div
        id="main-content-div"
        style={{
          position: "fixed",
          right: "0px",
          backgroundColor: "white",
          zIndex: "1",
        }}
      >
        <div style={{ margin: "30px" }}>hi</div>
      </div>
    </div>
  );
}

export default App;
