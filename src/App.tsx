import type { ReactNode } from 'react'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminRoute } from './components/auth/AdminRoute'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import Footer from './components/Footer'
import Header from './components/Header'
import InstallPrompt from './components/InstallPrompt'
import LoadingSkeleton from './components/LoadingSkeleton'
import PageTransition from './components/PageTransition'
import { KenaiAuthProvider } from './contexts/KenaiAuthContext'
import useAnalytics from './hooks/useAnalytics'

const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const BrowsePage = lazy(() => import('./pages/BrowsePage'))
const ClosingProcess = lazy(() => import('./pages/ClosingProcess'))
const CreateListingPage = lazy(() => import('./pages/CreateListingPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const DueDiligence = lazy(() => import('./pages/DueDiligence'))
const FSBOGuide = lazy(() => import('./pages/FSBOGuide'))
const HomePage = lazy(() => import('./pages/HomePage'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'))
const KenaiAccount = lazy(async () => ({ default: (await import('./pages/auth/KenaiAccount')).KenaiAccount }))
const KenaiSignIn = lazy(async () => ({ default: (await import('./pages/auth/KenaiSignIn')).KenaiSignIn }))
const KenaiSignUp = lazy(async () => ({ default: (await import('./pages/auth/KenaiSignUp')).KenaiSignUp }))
const ListingDetailPage = lazy(() => import('./pages/ListingDetailPage'))
const MarketData = lazy(() => import('./pages/MarketData'))
const SafetyPage = lazy(() => import('./pages/SafetyPage'))
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'))
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'))
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'))
const DMCA = lazy(() => import('./pages/legal/DMCA'))
const AcceptableUse = lazy(() => import('./pages/legal/AcceptableUse'))
const RealEstateDisclaimer = lazy(() => import('./pages/legal/RealEstateDisclaimer'))
const FairHousing = lazy(() => import('./pages/legal/FairHousing'))
const EscrowTransactionPage = lazy(() => import('./pages/EscrowTransactionPage'))

const withTransition = function (element: ReactNode) { return <PageTransition>{element}</PageTransition> }

function NotFoundPage() {
  return <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8"><p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">404</p><h1 className="mt-3 text-5xl font-semibold">That trail does not lead to a parcel.</h1><p className="mt-4 text-[var(--color-muted)]">Try the browse page for active Kenai Peninsula listings and FSBO resources.</p></div>
}

function AppRoutes() {
  useAnalytics()

  return (
    <>
      <a href="#main-content" className="sr-only absolute left-4 top-4 z-[80] rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg focus:not-sr-only">
        Skip to main content
      </a>
      <InstallPrompt />
      <main id="main-content">
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            <Route path="/" element={withTransition(<HomePage />)} />
            <Route path="/browse" element={withTransition(<BrowsePage />)} />
            <Route path="/listing/:id" element={withTransition(<ListingDetailPage />)} />
            <Route path="/create-listing" element={withTransition(<ProtectedRoute allowedRoles={['seller', 'admin']}><CreateListingPage /></ProtectedRoute>)} />
            <Route path="/dashboard" element={withTransition(<ProtectedRoute><DashboardPage /></ProtectedRoute>)} />
            <Route path="/sign-in" element={withTransition(<KenaiSignIn />)} />
            <Route path="/signin" element={withTransition(<KenaiSignIn />)} />
            <Route path="/login" element={withTransition(<KenaiSignIn />)} />
            <Route path="/sign-up" element={withTransition(<KenaiSignUp />)} />
            <Route path="/signup" element={withTransition(<KenaiSignUp />)} />
            <Route path="/account" element={withTransition(<ProtectedRoute><KenaiAccount /></ProtectedRoute>)} />
            <Route path="/how-it-works" element={withTransition(<HowItWorksPage />)} />
            <Route path="/safety" element={withTransition(<SafetyPage />)} />
            <Route path="/guide" element={withTransition(<FSBOGuide />)} />
            <Route path="/fsbo-guide" element={withTransition(<FSBOGuide />)} />
            <Route path="/due-diligence" element={withTransition(<DueDiligence />)} />
            <Route path="/market-data" element={withTransition(<MarketData />)} />
            <Route path="/closing-process" element={withTransition(<ClosingProcess />)} />
            <Route path="/escrow/:id" element={withTransition(<ProtectedRoute><EscrowTransactionPage /></ProtectedRoute>)} />
            <Route path="/escrow/demo" element={withTransition(<EscrowTransactionPage />)} />
            <Route path="/admin" element={withTransition(<AdminRoute><AdminDashboard /></AdminRoute>)} />
            <Route path="/admin/dashboard" element={withTransition(<AdminRoute><AdminDashboard /></AdminRoute>)} />
            <Route path="/terms" element={withTransition(<TermsOfService />)} />
            <Route path="/privacy" element={withTransition(<PrivacyPolicy />)} />
            <Route path="/cookies" element={withTransition(<CookiePolicy />)} />
            <Route path="/dmca" element={withTransition(<DMCA />)} />
            <Route path="/acceptable-use" element={withTransition(<AcceptableUse />)} />
            <Route path="/real-estate-disclaimer" element={withTransition(<RealEstateDisclaimer />)} />
            <Route path="/fair-housing" element={withTransition(<FairHousing />)} />
            <Route path="*" element={withTransition(<NotFoundPage />)} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default function App() {
  return (
    <KenaiAuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </KenaiAuthProvider>
  )
}
