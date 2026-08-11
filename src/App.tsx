import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import EnterpriseCustomSoftwarePage from './pages/EnterpriseCustomSoftwarePage';
import EnterpriseIntegrationsPage from './pages/EnterpriseIntegrationsPage';

import LegacyModernizationPage from './pages/LegacyModernizationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<HomePage />} />
          <Route
            path="services/enterprise-custom-software"
            element={<EnterpriseCustomSoftwarePage />}
          />
          <Route
            path="services/enterprise-integrations"
            element={<EnterpriseIntegrationsPage />}
          />
          <Route
            path="services/legacy-modernization"
            element={<LegacyModernizationPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
