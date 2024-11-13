import { BrowserRouter,Routes, Route } from "react-router-dom";
import Char from './Char.jsx';
import Search from './Search.jsx';
import Result from './Result.jsx';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Search/>}/>
            <Route path="/" element={<Search/>}/>
            <Route path="/character" element={<Char/>}/>
            <Route path="/search-result" element={<Result/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
