import { Route, Routes, useLocation } from "react-router";
import PageLayout from "./components/layout/PageLayout";
import ScrollToTop from "./components/common/ScrollToTop";
import NotFound from "./components/common/NotFound";
import FrameworkPage from "./pages/FrameworkPage";
import DomainPage from "./pages/DomainPage";
import LegalPage from "./pages/LegalPage";
import ContactPage from "./pages/ContactPage";
import SitemapPage from "./pages/SitemapPage";

export default function App(){const location=useLocation();return <><ScrollToTop/><Routes location={location} key={location.pathname}><Route element={<PageLayout/>}><Route path="/" element={<FrameworkPage/>}/><Route path="/remediation-intelligence" element={<DomainPage domainKey="remediation"/>}/><Route path="/soc-intelligence" element={<DomainPage domainKey="soc"/>}/><Route path="/incident-response-intelligence" element={<DomainPage domainKey="ir"/>}/><Route path="/resilience-intelligence" element={<DomainPage domainKey="resilience"/>}/><Route path="/compliance-intelligence" element={<DomainPage domainKey="compliance"/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/terms" element={<LegalPage pageType="terms"/>}/><Route path="/privacy" element={<LegalPage pageType="privacy"/>}/><Route path="/accessibility" element={<LegalPage pageType="accessibility"/>}/><Route path="/sitemap" element={<SitemapPage/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></>}
