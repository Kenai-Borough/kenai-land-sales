import { Component, type ErrorInfo, type PropsWithChildren, type ReactNode } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = { hasError: false }

  public static getDerivedStateFromError() {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Kenai Land Sales UI error', error, errorInfo)
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6 text-[var(--color-text)]">
          <div className="max-w-xl rounded-3xl border border-white/10 bg-[var(--color-surface)] p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-muted)]">
              Service restored quickly
            </p>
            <h1 className="mt-3 text-3xl font-semibold">
              We hit a snag loading this parcel experience.
            </h1>
            <p className="mt-4 text-[var(--color-muted)]">
              Refresh the page to try again. If the issue continues, reach out and
              we will review the listing moderation and trust systems immediately.
            </p>
            <button
              className="mt-6 rounded-full bg-[var(--color-primary)] px-5 py-3 font-semibold text-white"
              onClick={() => window.location.reload()}
            >
              Reload site
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
