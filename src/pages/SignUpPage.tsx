import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Seo from '../components/Seo'
import { useToast } from '../context/ToastContext'
import { signUp } from '../lib/supabase'

export default function SignUpPage() {
  const navigate = useNavigate()
  const { pushToast } = useToast()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState<'buyer' | 'seller'>('seller')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const { error: authError } = await signUp(email, password, fullName, role, phone)
    if (authError) {
      setError(authError.message)
      return
    }
    pushToast({
      title: 'Account created',
      description: 'Your FSBO dashboard is ready.',
      variant: 'success',
    })
    navigate('/dashboard')
  }

  return (
    <>
      <Seo
        title="Create Account | Kenai Land Sales"
        description="Create a buyer or seller account to publish Alaska land listings, save parcels, manage inquiries, and track closings."
      />
      <div className="mx-auto max-w-md px-4 py-16">
        <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Get started
          </p>
          <h1 className="mt-3 text-4xl font-semibold">Create your account</h1>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Full name"
              className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
            />
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone"
              className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
            />
            <select
              value={role}
              onChange={(event) => setRole(event.target.value as 'buyer' | 'seller')}
              className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
            >
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
            <input
              required
              minLength={6}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
            />
            {error ? <p className="text-sm text-rose-300">{error}</p> : null}
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--color-primary)] px-4 py-3 font-semibold text-white"
            >
              Create account
            </button>
          </form>
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[var(--color-primary)]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
