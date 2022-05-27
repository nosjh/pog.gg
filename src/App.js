import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import RosterT1Container from './containers/RosterT1Container';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/roster/t1" element={<RosterT1Container />} />
    </Routes>
  );
}

export default App;
