import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Exemplos01 from './pages/exemplos/ex-01'
import Exemplos02 from './pages/exemplos/ex-02'
import Atividade01 from './pages/atividades/atv-01'
import Exemplos03 from './pages/exemplos/ex-03'
import Atividade02 from './pages/atividades/atv-02'
import Atividade03 from './pages/atividades/atv-03'
import Exemplos04 from './pages/exemplos/ex-04'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exemplo/1" element={<Exemplos01 />} />
      <Route path="/exemplo/2" element={<Exemplos02 />} />
      <Route path="/atividades/1" element={<Atividade01 />} />
      <Route path="/exemplo/3" element={<Exemplos03 />} />
       <Route path="/atividades/2" element={<Atividade02 />} />
       <Route path="/atividades/3" element={<Atividade03 />} />
              <Route path="/exemplo/4" element={<Exemplos04 />} />
    </Routes>
  )
}

export default App;