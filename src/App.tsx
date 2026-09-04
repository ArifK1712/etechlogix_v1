import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import EnterpriseCustomSoftwarePage from './pages/EnterpriseCustomSoftwarePage';
import EnterpriseIntegrationsPage from './pages/EnterpriseIntegrationsPage';
import LegacyModernizationPage from './pages/LegacyModernizationPage';
import FunctionalPrototypesPage from './pages/FunctionalPrototypesPage';
import DedicatedEngineeringTeamsPage from './pages/DedicatedEngineeringTeamsPage';
import AgenticAIPage from './pages/AgenticAIPage';
import DocumentAutomationPage from './pages/DocumentAutomationPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InsightsPage from './pages/InsightsPage';
import LegacyVsModernSystemsPage from './pages/insights/LegacyVsModernSystemsPage';
import UnifiedHealthcarePage from './pages/insights/UnifiedHealthcarePage';
import ChatGptConversationalAiPage from './pages/insights/ChatGptConversationalAiPage';
import CustomSoftwareBenefitsPage from './pages/insights/CustomSoftwareBenefitsPage';
import SoftwareCompanyArizonaPage from './pages/insights/SoftwareCompanyArizonaPage';
import WhiteLabelDevelopmentPage from './pages/insights/WhiteLabelDevelopmentPage';
import Hl7ApiSolutionsPage from './pages/insights/Hl7ApiSolutionsPage';
import ShoppingCartIntegrationPage from './pages/insights/ShoppingCartIntegrationPage';
import TechSavvyLeadersPage from './pages/insights/TechSavvyLeadersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import ComingSoonPage from './pages/ComingSoonPage';
import NotFoundPage from './pages/NotFoundPage';
import { comingSoonRoutes } from './comingSoonConfig';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="company/about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route
            path="insights/navigating-legacy-systems-vs-modern-systems"
            element={<LegacyVsModernSystemsPage />}
          />
          <Route
            path="navigating-legacy-systems-vs-modern-systems"
            element={<LegacyVsModernSystemsPage />}
          />
          <Route
            path="insights/unified-healthcare-communication"
            element={<UnifiedHealthcarePage />}
          />
          <Route
            path="insights/the-future-of-healthcare"
            element={<UnifiedHealthcarePage />}
          />
          <Route
            path="the-future-of-healthcare"
            element={<UnifiedHealthcarePage />}
          />
          <Route
            path="insights/chatgpt-in-the-era-of-conversational-ai"
            element={<ChatGptConversationalAiPage />}
          />
          <Route
            path="chatgpt-in-the-era-of-conversational-ai"
            element={<ChatGptConversationalAiPage />}
          />
          <Route
            path="insights/custom-software-solution-benefits"
            element={<CustomSoftwareBenefitsPage />}
          />
          <Route
            path="insights/custom-software-solution-know-its-benefits-for-your-business-growth"
            element={<CustomSoftwareBenefitsPage />}
          />
          <Route
            path="custom-software-solution-know-its-benefits-for-your-business-growth"
            element={<CustomSoftwareBenefitsPage />}
          />
          <Route
            path="insights/custom-software-development-company-arizona"
            element={<SoftwareCompanyArizonaPage />}
          />
          <Route
            path="insights/best-custom-software-development-company-in-arizona"
            element={<SoftwareCompanyArizonaPage />}
          />
          <Route
            path="best-custom-software-development-company-in-arizona"
            element={<SoftwareCompanyArizonaPage />}
          />
          <Route
            path="insights/white-label-development"
            element={<WhiteLabelDevelopmentPage />}
          />
          <Route
            path="insights/white-label-dovelopment"
            element={<WhiteLabelDevelopmentPage />}
          />
          <Route
            path="white-label-dovelopment"
            element={<WhiteLabelDevelopmentPage />}
          />
          <Route
            path="white-label-development"
            element={<WhiteLabelDevelopmentPage />}
          />
          <Route
            path="insights/hl7-api-solutions-communication"
            element={<Hl7ApiSolutionsPage />}
          />
          <Route
            path="insights/api-solutions-and-flawless-communication-in-hl7"
            element={<Hl7ApiSolutionsPage />}
          />
          <Route
            path="api-solutions-and-flawless-communication-in-hl7"
            element={<Hl7ApiSolutionsPage />}
          />
          <Route
            path="insights/shopping-cart-enterprise-integration"
            element={<ShoppingCartIntegrationPage />}
          />
          <Route
            path="insights/shoppingcart-and-integration"
            element={<ShoppingCartIntegrationPage />}
          />
          <Route
            path="shoppingcart-and-integration"
            element={<ShoppingCartIntegrationPage />}
          />
          <Route
            path="insights/tech-savvy-leaders-changing-equations"
            element={<TechSavvyLeadersPage />}
          />
          <Route
            path="insights/tech-savvy-leaders-changing-equations-in-every-industry"
            element={<TechSavvyLeadersPage />}
          />
          <Route
            path="tech-savvy-leaders-changing-equations-in-every-industry"
            element={<TechSavvyLeadersPage />}
          />
          <Route path="blogs" element={<InsightsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-conditions" element={<TermsConditionsPage />} />
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
            path="services/agentic-ai"
            element={<Navigate to="/ai-automation/agentic-ai-workflow-automation" replace />}
          />
          <Route
            path="ai-automation/document-automation"
            element={<DocumentAutomationPage />}
          />
          {/* Dynamically register all coming soon routes */}
          {comingSoonRoutes.map((path) => (
            <Route
              key={path}
              path={path}
              element={<ComingSoonPage />}
            />
          ))}
          {/* Catch-all 404 handler */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
