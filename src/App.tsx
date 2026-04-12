
import type { ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminRoute } from './components/auth/AdminRoute'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import Footer from './components/Footer'
import Header from './components/Header'
import PageTransition from './components/PageTransition'
import { KenaiAuthProvider } from './contexts/KenaiAuthContext'
import AdminDashboard from './pages/admin/AdminDashboard'
import BrowsePage from './pages/BrowsePage'
import ClosingProcess from './pages/ClosingProcess'
import CreateListingPage from './pages/CreateListingPage'
import DashboardPage from './pages/DashboardPage'
import DueDiligence from './pages/DueDiligence'
import FSBOGuide from './pages/FSBOGuide'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import { KenaiAccount } from './pages/auth/KenaiAccount'
import { KenaiSignIn } from './pages/auth/KenaiSignIn'
import { KenaiSignUp } from './pages/auth/KenaiSignUp'
import ListingDetailPage from './pages/ListingDetailPage'
import MarketData from './pages/MarketData'
import SafetyPage from './pages/SafetyPage'
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CookiePolicy from './pages/legal/CookiePolicy';
import DMCA from './pages/legal/DMCA';
import AcceptableUse from './pages/legal/AcceptableUse';
import RealEstateDisclaimer from './pages/legal/RealEstateDisclaimer';
import FairHousing from './pages/legal/FairHousing';

const withTransition = function (element: ReactNode) { return <PageTransition>{element}</PageTransition> }
function NotFoundPage() { return <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8"><p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">404</p><h1 className="mt-3 text-5xl font-semibold">That trail does not lead to a parcel.</h1><p className="mt-4 text-[var(--color-muted)]">Try the browse page for active Kenai Peninsula listings and FSBO resources.</p></div> }

export default function App() {
  return (
    <KenaiAuthProvider>
      <BrowserRouter>
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/dmca" element={<DMCA />} />
                <Route path="/acceptable-use" element={<AcceptableUse />} />
                <Route path="/real-estate-disclaimer" element={<RealEstateDisclaimer />} />
                <Route path="/fair-housing" element={<FairHousing />} />
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]"><Header /><main><Routes><Route path="/" element={withTransition(<HomePage />)} /><Route path="/browse" element={withTransition(<BrowsePage />)} /><Route path="/listing/:id" element={withTransition(<ListingDetailPage />)} /><Route path="/create-listing" element={withTransition(<ProtectedRoute allowedRoles={['seller', 'admin']}><CreateListingPage /></ProtectedRoute>)} /><Route path="/dashboard" element={withTransition(<ProtectedRoute><DashboardPage /></ProtectedRoute>)} /><Route path="/sign-in" element={withTransition(<KenaiSignIn />)} /><Route path="/signin" element={withTransition(<KenaiSignIn />)} /><Route path="/login" element={withTransition(<KenaiSignIn />)} /><Route path="/sign-up" element={withTransition(<KenaiSignUp />)} /><Route path="/signup" element={withTransition(<KenaiSignUp />)} /><Route path="/account" element={withTransition(<ProtectedRoute><KenaiAccount /></ProtectedRoute>)} /><Route path="/how-it-works" element={withTransition(<HowItWorksPage />)} /><Route path="/safety" element={withTransition(<SafetyPage />)} /><Route path="/guide" element={withTransition(<FSBOGuide />)} /><Route path="/fsbo-guide" element={withTransition(<FSBOGuide />)} /><Route path="/due-diligence" element={withTransition(<DueDiligence />)} /><Route path="/market-data" element={withTransition(<MarketData />)} /><Route path="/closing-process" element={withTransition(<ClosingProcess />)} /><Route path="/admin" element={withTransition(<AdminRoute><AdminDashboard /></AdminRoute>)} /><Route path="/admin/dashboard" element={withTransition(<AdminRoute><AdminDashboard /></AdminRoute>)} /><Route path="*" element={withTransition(<NotFoundPage />)} /></Routes></main><Footer /></div>
      </BrowserRouter>
    </KenaiAuthProvider>
  )
}
