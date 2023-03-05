
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Page1 from './Page1';
import Snag from './Snag';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/snag" element={<Snag/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
