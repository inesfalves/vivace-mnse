import { useLoading, Audio } from "@agney/react-loading";
import "../../App.css";

function LoadingPage() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="80" />,
  });

  return (
    <div className="loadingPage" {...containerProps}>
      {indicatorEl} <h1> Loading . . . </h1>
    </div>
  );
}

export default LoadingPage;
