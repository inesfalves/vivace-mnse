import {useState} from "react";
import VideoPage from "./VideoPage";
import Timeline from "../Timeline";
import Button from "../Button";

function DecadePage() {
    const [decadeIndex, setDecadeIndex] = useState(0);

    const incrementDecade = () => {
        setDecadeIndex((prev) => prev + 1);
        console.log(decadeIndex);
    }

    const decrementDecade = () => {
        setDecadeIndex((prev) => prev - 1);
        console.log(decadeIndex);
    }

    return (

    <div className="DecadePage">
        <VideoPage url={"9ZkuqRGeLJM"}/>
        <Timeline className="timeline" progress={decadeIndex*20}/>;
        <button onClick={decrementDecade}>
            previous decade
        </button>
        <button onClick={incrementDecade}>
            next decade
        </button>
    </div>
    );
}

export default DecadePage;
