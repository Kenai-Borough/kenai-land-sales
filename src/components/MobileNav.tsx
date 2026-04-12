import { LogOut, Menu, MoonStar, SunMedium, User, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useKenaiAuth } from '../contexts/KenaiAuthContext'
import { useTheme } from '../context/ThemeContext'
import { cn } from '../lib/utils'
import { KenaiNetworkBadge } from './KenaiNetworkBadge'

interface MobileNavProps {
  navItems: Array<{ to: string; label: string }>
}

export default function MobileNav({ navItems }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const drawerRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const auth = useKenaiAuth()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (drawerRef.current?.contains(target) || triggerRef.current?.contains(target)) return
      setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="rounded-full border border-white/10 p-3"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div className={`fixed inset-0 z-40 bg-black/50 transition ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden="true" />

      <div
        id="mobile-navigation"
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[var(--color-bg)] px-5 py-5 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-2xl bg-[var(--color-primary)] p-2 text-white shadow-lg">
              <svg viewBox="0 0 64 64" className="h-7 w-7 fill-current"><path d="M9 48 24 28l8 10 9-15 14 25H9Z" /><path d="M15 50h34v6H15z" /></svg>
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">Kenai Land Sales</p>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-muted)]">Your Land, Your Sale</p>
            </div>
          </Link>
          <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-white/10 p-3" aria-label="Close navigation drawer">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 rounded-[28px] border border-white/10 bg-[var(--color-surface)] p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Account</p>
          <div className="mt-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[var(--color-text)]">{auth.user?.email ?? 'Browsing as guest'}</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{auth.user ? 'Manage your listings and buyer inquiries.' : 'Sign in to save parcels and manage your land listings.'}</p>
            </div>
            {auth.user ? <KenaiNetworkBadge /> : null}
          </div>
        </div>

        <nav className="mt-5 grid gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => cn('rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-muted)] transition hover:bg-[var(--color-surface-elevated)] hover:text-[var(--color-text)]', isActive && 'bg-[var(--color-surface-elevated)] text-[var(--color-text)]')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto space-y-3 border-t border-white/10 pt-4">
          <button type="button" onClick={toggleTheme} className="flex w-full items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold" aria-label="Toggle dark mode">
            <span>{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          </button>
          {auth.user ? (
            <>
              <Link to="/account" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold">
                <User className="h-4 w-4" /> Account
              </Link>
              <button type="button" onClick={() => void auth.signOut()} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold">
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            </>
          ) : (
            <Link to="/sign-in" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold">
              <User className="h-4 w-4" /> Sign in
            </Link>
          )}
          <Link to="/create-listing" className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold text-white">
            List Your Land Free
          </Link>
        </div>
      </div>
    </div>
  )
}
