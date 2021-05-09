import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import whiteDot from "../whitedot.png";

function Timeline(props) {
  return (
    <div className="timeline">
      <ProgressBar
        percent={props.progress}
        filledBackground="linear-gradient(to right, #fface4, #eb96e1, #d285e6, #b056c7)"
      >
        <Step transition="scale">
          {({ index }) => (
            <a href="/final">
              {" "}
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="/final">
              {" "}
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="/final">
              {" "}
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="/final">
              {" "}
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="30" src={whiteDot} />
            </a>
          )}
        </Step>
        <Step transition="scale">
          {({ index }) => (
            <a href="url">
              {" "}
              <img width="60" src={whiteDot} />
            </a>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}

export default Timeline;
