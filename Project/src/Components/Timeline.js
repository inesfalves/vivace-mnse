import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import whiteDot from "../whitedot.png";

function Timeline({ updatePageIndex, className, progress }) {
  return (
    <div className="timeline">
      <ProgressBar
        percent={progress}
        filledBackground="linear-gradient(to right, #fface4, #eb96e1, #d285e6, #b056c7)"
      >
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(0)}>
              {" "}
              <div class="timelineText">50s</div>
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(1)}>
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(2)}>
              {" "}
              <div class="timelineText">60s</div>
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(3)}>
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(4)}>
              {" "}
              <div class="timelineText">70s</div>
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(5)}>
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(6)}>
              {" "}
              <div class="timelineText">80s</div>
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(7)}>
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(8)}>
              {" "}
              <div class="timelineText">90s</div>
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(9)}>
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(10)}>
              {" "}
              <div class="timelineText">00s</div>
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(11)}>
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(12)}>
              {" "}
              <div class="timelineText">10s</div>
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(13)}>
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a className="timelineButton" onClick={() => updatePageIndex(14)}>
              {" "}
              <div class="timelineText">20s</div>
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}

export default Timeline;
