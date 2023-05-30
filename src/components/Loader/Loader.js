import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import LinearProgress from "@material-ui/core/LinearProgress";

const Loader = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 180);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <LoaderContainer>
      <LinearProgress variant="determinate" value={progress} />
      <h2 style={{ color: "white" }}>Loading...</h2>
    </LoaderContainer>
  );
};

export default Loader;
