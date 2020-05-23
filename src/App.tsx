import * as React from "react";
import IntroRoutes from './routes/IntroRoutes'



export default function App(): JSX.Element {
  return (
    navigator.onLine?<IntroRoutes />:<div>No internet connection</div>
  );
}
