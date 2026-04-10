import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profil from './pages/Profil/Profil';
import Coach from './pages/Coach/Coach';
import CoachIA from './pages/CoachIA/CoachIA';
import Cours from './pages/Cours/Cours';
import Journal from './pages/Journal/Journal';
import Messages from './pages/Messages/Messages';
import Bibliotheque from './pages/Bibliotheque/Bibliotheque';
import Rapports from './pages/Rapports/Rapports'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page Login sans Layout */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Pages avec Header + Sidebar */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/coach-ia" element={<CoachIA />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bibliotheque" element={<Bibliotheque />} />
          <Route path="/rapports" element={<Rapports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;