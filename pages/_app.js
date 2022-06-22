import GlobalStyle from "./globalStyles";
import { Fragment } from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}
