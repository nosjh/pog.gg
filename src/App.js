import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
// import Rosters_t1 from './components/rosters/Rosters_t1';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/t1" element={<Rosters_t1 />} /> */}
    </Routes>
  );
}

export default App;
