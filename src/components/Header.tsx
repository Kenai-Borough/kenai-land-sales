
import { Link, NavLink } from 'react-router-dom'
import { LogOut, MoonStar, SunMedium, User } from 'lucide-react'
import { KenaiNetworkBadge } from './KenaiNetworkBadge'
import { useKenaiAuth } from '../contexts/KenaiAuthContext'
import { useTheme } from '../context/ThemeContext'
import { cn } from '../lib/utils'
import MobileNav from './MobileNav'

const navItems = [
  { to: '/browse', label: 'Browse' },
  { to: '/guide', label: 'FSBO Guide' },
  { to: '/market-data', label: 'Market Data' },
  { to: '/closing-process', label: 'Closing' },
  { to: '/dashboard', label: 'Dashboard' },
]

export default function Header() {
  const auth = useKenaiAuth()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--color-bg)]/85 backdrop-blur-xl"><nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"><Link to="/" className="flex items-center gap-3"><div className="rounded-2xl bg-[var(--color-primary)] p-2 text-white shadow-lg"><svg viewBox="0 0 64 64" className="h-7 w-7 fill-current"><path d="M9 48 24 28l8 10 9-15 14 25H9Z" /><path d="M15 50h34v6H15z" /></svg></div><div><p className="text-lg font-semibold tracking-wide">Kenai Land Sales</p><p className="text-xs uppercase tracking-[0.35em] text-[var(--color-muted)]">Your Land, Your Sale</p></div></Link><div className="hidden items-center gap-6 lg:flex">{navItems.map(function (item) { return <NavLink key={item.to} to={item.to} className={function (props) { return cn('text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-text)]', props.isActive && 'text-[var(--color-text)]') }}>{item.label}</NavLink> })}</div><div className="hidden items-center gap-3 lg:flex"><button type="button" onClick={toggleTheme} className="rounded-full border border-white/10 bg-[var(--color-surface-elevated)] p-3" aria-label="Toggle theme">{theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}</button>{auth.user ? <KenaiNetworkBadge /> : null}{auth.user ? <><Link to="/account" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold"><User className="h-4 w-4" /> Account</Link><button type="button" onClick={function () { void auth.signOut() }} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold"><LogOut className="h-4 w-4" /> Sign out</button></> : <Link to="/sign-in" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold"><User className="h-4 w-4" /> Sign in</Link>}<Link to="/create-listing" className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white">List Your Land Free</Link></div><MobileNav navItems={navItems} /></nav></header>
  )
}
