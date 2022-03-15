import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoadingPage from "./Components/Shared/LoadingPage/LoadingPage";
import AuthProvider from "./Components/Context/AuthProvider";
const App = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
    import("./App")
  );
});
// import reportWebVitals from'./reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
