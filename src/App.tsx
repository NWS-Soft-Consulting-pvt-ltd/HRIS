import AppRouter from "./routing/AppRouter";
import CssBaseline from "@mui/material/CssBaseline";
import ErrorBoundary from "./components/app/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <CssBaseline />
        <AppRouter />
      </ErrorBoundary>
    </>
  );
}

export default App;
