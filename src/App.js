import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path={`/${process.env.REACT_APP_HOST}`} element={<Main />} />
    </Routes>
  );
}

export default App;
