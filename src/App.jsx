import { Route, Routes } from "react-router";

import PageLayout from "./components/layout/PageLayout";
import ScrollToTop from "./components/common/ScrollToTop";
import NotFound from "./components/common/NotFound";
import FrameworkPage from "./pages/FrameworkPage";
import DomainPage from "./pages/DomainPage";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<PageLayout />}>
          <Route
            path="/"
            element={<FrameworkPage />}
          />

          <Route
            path="/remediation-intelligence"
            element={
              <DomainPage domainKey="remediation" />
            }
          />

          <Route
            path="/soc-intelligence"
            element={
              <DomainPage domainKey="soc" />
            }
          />

          <Route
            path="/incident-response-intelligence"
            element={
              <DomainPage domainKey="ir" />
            }
          />

          <Route
            path="/resilience-intelligence"
            element={
              <DomainPage domainKey="resilience" />
            }
          />

          <Route
            path="/compliance-intelligence"
            element={
              <DomainPage domainKey="compliance" />
            }
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </>
  );
}
