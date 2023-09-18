import App from "./App";
import { useMediaQuery } from "react-responsive";

export default function ResponsiveApp() {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  const isPC = useMediaQuery({ query: "(min-width: 1024px)" });

  const mode = isMobile ? "mobile" : isPC ? "pc" : "pad";
  return <App mode={mode}></App>;
}
