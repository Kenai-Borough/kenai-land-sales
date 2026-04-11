import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Seo from '../components/Seo'
import { useToast } from '../context/ToastContext'
import { resetPassword, signIn } from '../lib/supabase'

export default function LoginPage() {
  const navigate = useNavigate()
  const { pushToast } = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const { error: authError } = await signIn(email, password)
    if (authError) {
      setError(authError.message)
      return
    }
    pushToast({
      title: 'Signed in',
      description: 'Your dashboard is ready.',
      variant: 'success',
    })
    navigate('/dashboard')
  }

  const handleReset = async () => {
    if (!email) {
      setError('Enter your email first so we know where to send reset steps.')
      return
    }
    const { error: resetError } = await resetPassword(email)
    if (resetError) {
      setError(resetError.message)
      return
    }
    pushToast({
      title: 'Reset link prepared',
      description: 'Check your email or use the local demo flow.',
      variant: 'success',
    })
  }

  return (
    <>
      <Seo
        title="Sign In | Kenai Land Sales"
        description="Access your Kenai Land Sales dashboard, inquiry inbox, saved parcels, and direct-owner land sale tools."
      />
      <div className="mx-auto max-w-md px-4 py-16">
        <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Account access
          </p>
          <h1 className="mt-3 text-4xl font-semibold">Sign in</h1>
          <p className="mt-3 text-[var(--color-muted)]">
            Seller and buyer dashboards use Supabase auth in production, with a local demo
            fallback when credentials are not configured.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
            />
            <input
              type="password"
              required
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
              Sign in
            </button>
          </form>

          <button
            type="button"
            onClick={handleReset}
            className="mt-4 text-sm font-semibold text-[var(--color-primary)]"
          >
            Forgot password?
          </button>

          <p className="mt-6 text-sm text-[var(--color-muted)]">
            New to the platform?{' '}
            <Link to="/signup" className="font-semibold text-[var(--color-primary)]">
              Create your free account
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
