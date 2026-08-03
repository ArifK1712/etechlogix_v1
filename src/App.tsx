import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EnterpriseCustomSoftwarePage from './pages/EnterpriseCustomSoftwarePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services/enterprise-custom-software"
          element={<EnterpriseCustomSoftwarePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
