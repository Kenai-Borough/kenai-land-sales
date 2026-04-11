import type { ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import PageTransition from './components/PageTransition'
import AdminDashboard from './pages/admin/AdminDashboard'
import BrowsePage from './pages/BrowsePage'
import ClosingProcess from './pages/ClosingProcess'
import CreateListingPage from './pages/CreateListingPage'
import DashboardPage from './pages/DashboardPage'
import DueDiligence from './pages/DueDiligence'
import FSBOGuide from './pages/FSBOGuide'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import ListingDetailPage from './pages/ListingDetailPage'
import LoginPage from './pages/LoginPage'
import MarketData from './pages/MarketData'
import SafetyPage from './pages/SafetyPage'
import SignUpPage from './pages/SignUpPage'

const withTransition = (element: ReactNode) => <PageTransition>{element}</PageTransition>

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">404</p>
      <h1 className="mt-3 text-5xl font-semibold">That trail does not lead to a parcel.</h1>
      <p className="mt-4 text-[var(--color-muted)]">
        Try the browse page for active Kenai Peninsula listings and FSBO resources.
      </p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={withTransition(<HomePage />)} />
            <Route path="/browse" element={withTransition(<BrowsePage />)} />
            <Route path="/listing/:id" element={withTransition(<ListingDetailPage />)} />
            <Route path="/create-listing" element={withTransition(<CreateListingPage />)} />
            <Route path="/dashboard" element={withTransition(<DashboardPage />)} />
            <Route path="/login" element={withTransition(<LoginPage />)} />
            <Route path="/signup" element={withTransition(<SignUpPage />)} />
            <Route path="/how-it-works" element={withTransition(<HowItWorksPage />)} />
            <Route path="/safety" element={withTransition(<SafetyPage />)} />
            <Route path="/guide" element={withTransition(<FSBOGuide />)} />
            <Route path="/fsbo-guide" element={withTransition(<FSBOGuide />)} />
            <Route path="/due-diligence" element={withTransition(<DueDiligence />)} />
            <Route path="/market-data" element={withTransition(<MarketData />)} />
            <Route path="/closing-process" element={withTransition(<ClosingProcess />)} />
            <Route path="/admin" element={withTransition(<AdminDashboard />)} />
            <Route path="/admin/dashboard" element={withTransition(<AdminDashboard />)} />
            <Route path="*" element={withTransition(<NotFoundPage />)} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
