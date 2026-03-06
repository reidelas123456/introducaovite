
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Exemplos01 from './pages/exemplos/ex-01';
import Exemplos02 from './pages/exemplos/ex-02';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exemplo/1" element={<Exemplos01/>} />
         <Route path="/exemplo/2" element={<Exemplos02 />} />
    </Routes>
  )
}

export default App;
