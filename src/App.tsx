import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="w-screen h-screen bg-secondary-100">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
