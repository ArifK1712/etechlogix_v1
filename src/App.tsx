import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import EnterpriseCustomSoftwarePage from './pages/EnterpriseCustomSoftwarePage';
import EnterpriseIntegrationsPage from './pages/EnterpriseIntegrationsPage';
import LegacyModernizationPage from './pages/LegacyModernizationPage';
import FunctionalPrototypesPage from './pages/FunctionalPrototypesPage';
import DedicatedEngineeringTeamsPage from './pages/DedicatedEngineeringTeamsPage';
import AgenticAIPage from './pages/AgenticAIPage';
import DocumentAutomationPage from './pages/DocumentAutomationPage';

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
          <Route
            path="services/functional-prototypes"
            element={<FunctionalPrototypesPage />}
          />
          <Route
            path="services/product-prototyping"
            element={<FunctionalPrototypesPage />}
          />
          <Route
            path="services/dedicated-engineering-teams"
            element={<DedicatedEngineeringTeamsPage />}
          />
          <Route
            path="ai-automation/agentic-ai-workflow-automation"
            element={<AgenticAIPage />}
          />
          <Route
            path="ai-automation/document-automation"
            element={<DocumentAutomationPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
