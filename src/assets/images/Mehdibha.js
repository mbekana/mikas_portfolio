import * as React from "react";
import { useTheme } from "@material-ui/styles";

const Logo = (props) => {
  const theme = useTheme();
  return (
    <div style={{ fontSize: "14px" }}>
      <h2>Milkias Bekana</h2>
    </div>
  );
};

export default Logo;
